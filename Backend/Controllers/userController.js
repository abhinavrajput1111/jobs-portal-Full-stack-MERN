import mongoose from "mongoose"
import userModel from "../Models/userModel.js"


export const registerUser = async (req,res, next)=>{
    const {name, email, password} = req.body;


    if (!name) {
      return next({ status: 400, message: "Name is required" });
      }
  
      if (!email) {
        return next({ status: 400, message: "Email is required" });

      }
  
      if (!password) {
        return next({ status: 400, message: "Password is required" });

      }

    //   check if user already exists

    const existingUser = await userModel.findOne({email});
    
    if(existingUser){
        return res.status(409).send({message:"Email already exists, Kindly try with another Email", success: false})
    }


    const createUserDoccument = await userModel.create({name, email, password});
    const token = createUserDoccument.createJWT();


    res.status(201).send({ 
        status: true,
        message: "New User Registered Sucessfully",
        user: {
          name: createUserDoccument.name,
          lastName : createUserDoccument.lastName,
          email: createUserDoccument.email,
          location: createUserDoccument.location,
        },
        token
    })

}


export const loginController = async (req, res, next)=>{

  const {email, password} = req.body;

  if(!email || !password){
    return next({
      status: 400,
      message: "Filling all fields are Mandatory"
    })
  }

  // find if any email matches fron user given email from DB

  const findUserByEmail = await userModel.findOne({email}).select("+password");

  if(!findUserByEmail){
   return next({ status: 400, message: "Kindly Check Email !" })
  }

  // compare user given password with user's password in DB.
  const checkPasswordFromDB = await findUserByEmail.comparePassword(password);

  // check if password does not match, then throw new error through Error middleware.
  if(!checkPasswordFromDB){
    return next({ status: 400, message: "Kindly Check Credientials !" })
  }

  const token = await findUserByEmail.createJWT();

  res.status(200).json({
    status: true,
    message: "SUCESSFULLY LOGIN 🥳",
    user: {
      email: findUserByEmail.email,
      name: findUserByEmail.name ,
      location: findUserByEmail.location,
      userId : findUserByEmail._id
    },
    token
  })
}


// ---------------------------------------------------------------
// ------------------------------------------------------------------
    // Admin Controllers 
    // 
// ---------------------------------------------------------------
// ------------------------------------------------------------------

export const updateUserController = async (req,res,next)=>{

  const {email, location, name, lastName} = req.body;

  if(!email || !location ||!name || !lastName){
    return next({
      status: 400,
      message: "Kindly Fill All Fields!!"
    })
  }
  

  // Ye controller AuthMiddleware se hokr aaya hai, Usne req.user nam ka ek
  // naya object banaya fir usme token ke payload se userID nam ki value daali
  //  isliye hum whi user nikal rhe hain jiska token me userID hai, agar whi
  // user hua to hi hum update krwayenge user nahi to nahi karayenge.
  
  const user = await userModel.findOne({_id: req.user.userId});

  // This is done by me only............IF problem arrive remote this
  if(!user){
  return  next({
      status: 400,
      message: "Enter User is Not Available in Database, Can't find user, userController LN 117"
    })
  }
  // 

  user.name = name;
  user.location = location;
  user.lastName = lastName; 
  user.email = email;

  await  user.save();

  const token = user.createJWT();

  res.status(201).json({
    status: 201,
    message: "User Updated Successfully !!",
    user,
    token
  })

}

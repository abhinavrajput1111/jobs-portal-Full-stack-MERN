import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs"
import dotEnv from "dotEnv";
import JWT from "jsonwebtoken";

dotEnv.config();

// Define user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required"]
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Enter Correct Email"],
    validate: [validator.isEmail, "Please enter a valid email"]
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    validate: {
      validator: function(value) {
        // Regular expression for password validation
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+{}|:"><])[A-Za-z\d~!@#$%^&*()_+{}|:"><]{8,}$/.test(value);
      },
      message: "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters",
    },
    select: true,
  },
  location: {
    type: String,
    default: "India"
  }
}, { timestamps: true }); // Added timestamps option for createdAt and updatedAt


// before creating model we will convert the password into hash.

userSchema.pre("save", async function(){

  // to hash password, we need to use Password from Schema, but it is out of the scope
  // that's why we will use This. keyword.
  if(!this.isModified("password")){
    return;
  }
  const saltRounds = await bcrypt.genSalt(10);
  const generateHashPassword = await bcrypt.hash(this.password,saltRounds);
  this.password = generateHashPassword;

});

// compare password - User given with Database 

userSchema.methods.comparePassword = async function(userPassword){

  const isMatch = await bcrypt.compare(userPassword , this.password);
  return isMatch;

}


// Create a JWT token, and give mongoose generated _ID in payload, and make it
// expire in 1day

userSchema.methods.createJWT = function (){
  return JWT.sign({userId: this._id}, process.env.JWT_SECRET, {expiresIn: "6d"} )
}


// Create and export the model
const userModel = mongoose.model("User", userSchema);




export default userModel;

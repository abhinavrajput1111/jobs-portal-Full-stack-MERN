import JWT from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();



export const authMiddleware = async (req,res,next)=>{

    const authToken = req.headers.authorization;

    if(!authToken || !authToken.startsWith("Bearer")){
        return next({
            status: 400,
            message: "No Bearer token found, Page is not Ascessible"
        })
    }

    const token = authToken.split(" ")[1];

    try{
        const payLoad = JWT.verify(token, process.env.JWT_SECRET)
        
        // here we are using req.user because in request we are receiving
        // a user object which we have send response on register and login

        req.user = {userId: payLoad.userId};
        next();
    }
    catch(error){
        console.log(error);
        return next({
            status: 400,
            message: "Token Authentication Failed / Catch block"
        })
    }

}
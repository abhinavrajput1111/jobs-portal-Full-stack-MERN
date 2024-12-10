import express from "express";
import { authMiddleware } from "../Middlewares/AuthMiddleware.js";
import { updateUserController } from "../Controllers/userController.js";


const userRouter = express.Router();

// Get All Users || GET 
// Badme banayenge admin panel ke time par



// Update User Info from Admin Panel 

// isko bhi protected route banayenge, taaki login User hi changes kr ske.

userRouter.put("/update-user", authMiddleware, updateUserController);



export default userRouter;
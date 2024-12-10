import express from "express";

import { loginController, registerUser } from "../Controllers/userController.js";

const authRouter = express.Router();

// localhost/jobs/registerUser

// Register || Post method
authRouter.post("/registerUser", registerUser);

// Login || Post method

authRouter.post("/login", loginController);


export default authRouter;
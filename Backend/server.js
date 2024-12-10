import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import colors from "colors"
import connectDB from "./Config/db.js";
import cors from "cors"
import morgan from "morgan";
import router from "./Routes/routes.js";
import authRouter from "./Routes/AuthRoutes.js";
import errorMiddleware from "./Middlewares/errorMiddleware.js";
import userRouter from "./Routes/UserRoutes.js";
import jobsRouter from "./Routes/jobsRoutes.js";


// configure enviroment variables
dotenv.config();



const app = express();

// middlewares
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"))

// connection to MongoDB

connectDB();


// Routes
app.use("/v1/data", router)
app.use("/jobs", authRouter)
app.use("/v1/data/update-user", userRouter);
app.use("/v1/data/jobs", jobsRouter);

// Error Middleware

app.use(errorMiddleware);

// Listen to the server

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`Backend Server started at port ${PORT} and on ${process.env.DEV_MODE}`.bgRed)
})
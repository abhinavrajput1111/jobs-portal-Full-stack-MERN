import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import colors from "colors"
import connectDB from "./Config/db.js";
import cors from "cors"
import morgan from "morgan";

// API doccumentation imports

import swaggerUi from "swagger-ui-express";
import swaggerDoc from "swagger-jsdoc";

// Security Middlewares imports

import helmet from "helmet";
// import xss from "xss";
import bodyParser from "body-parser";
import {xss} from "express-xss-sanitizer"
import mongoSanitize from "express-mongo-sanitize";

// -------------------------
import router from "./Routes/routes.js";
import authRouter from "./Routes/AuthRoutes.js";
import errorMiddleware from "./Middlewares/errorMiddleware.js";
import userRouter from "./Routes/UserRoutes.js";
import jobsRouter from "./Routes/jobsRoutes.js";


// configure enviroment variables
dotenv.config();



const app = express();

const options = {
    definition: { openapi:"3.0.0",
    info:{
        title: "Job Portal Application",
        description: "Node ExpressJs Job Portal Application"
    },
    servers:[{
        url:"http://localhost:6969/",
    }],
    },
    apis : ["./Routes/*.js"]
}

const spec = swaggerDoc(options);

// middlewares
app.use(helmet());
app.use(
    cors({
      origin: ["http://localhost:5173", "http://localhost:5174"],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
    })
  );
  
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"))
app.use(mongoSanitize());

// middlewares form cross site scription attacks  using npm express-xss-sanitizer package

app.use(bodyParser.json({limit:'1kb'}));
app.use(bodyParser.urlencoded({extended: true, limit:'1kb'}));
app.use(xss());



// connection to MongoDB

connectDB();



// Routes
app.use("/v1/data", router)
app.use("/jobs", authRouter)
app.use("/v1/data/update-user", userRouter);
app.use("/v1/data/jobs", jobsRouter);

// Swagger doccumentation homeroute Root
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(spec));

// Error Middleware

app.use(errorMiddleware);
// Listen to the server




const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`Backend Server started at port ${PORT} and on ${process.env.DEV_MODE}`.bgRed)
})
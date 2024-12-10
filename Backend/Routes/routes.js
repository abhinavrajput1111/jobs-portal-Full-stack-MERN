import express from "express";
import { getAllJobs } from "../Controllers/jobsController.js";
import { authMiddleware } from "../Middlewares/AuthMiddleware.js";

const router = express.Router();

router.get("/getalljobs", authMiddleware, getAllJobs)

export default router;
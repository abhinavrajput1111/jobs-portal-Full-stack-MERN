import express from "express";
import { createJobs, getAllJobs, jobsStatsController } from "../Controllers/jobsController.js";
import { authMiddleware } from "../Middlewares/AuthMiddleware.js";

const jobsRouter = express.Router();

// Create Jobs, We will create jobs only if we check it is authentic user to add jobs
// by authMiddleware.

// Create Jobs || post

jobsRouter.post("/create-job", authMiddleware, createJobs)


// Get all jobs created by user

jobsRouter.get("/getAllJobs", authMiddleware, getAllJobs);


// Update Jobs || Patch

// jobsRouter.patch("/update-job/:id", authMiddleware, updateJobController)

// Delete Jobs || Delete

// jobsRouter.delete("/delete-job/:id", authMiddleware, deleteJobController);


// Job Stats || Get

jobsRouter.get("/jobs-stats", authMiddleware, jobsStatsController)

export default jobsRouter;
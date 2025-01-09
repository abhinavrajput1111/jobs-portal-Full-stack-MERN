import express from "express";
import { loginController, registerUser } from "../Controllers/userController.js";
import { rateLimit } from "express-rate-limit";

// Apply rate limiting to avoid abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 50, // Allow 50 requests per IP in the 15-minute window
  standardHeaders: 'draft-8', // Include rate-limit headers
  legacyHeaders: false, // Disable the legacy rate-limit headers
});

// Initialize router
const authRouter = express.Router();

// Swagger Documentation for User model
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - lastName
 *         - email
 *         - password
 *         - location
 *       properties:
 *         id:
 *           type: string
 *           description: Auto-generated user ID
 *           example: 'SLjaffkfnv1sd4sd45ds1215'
 *         name:
 *           type: string
 *           description: User's first name
 *           example: 'Abhinav'
 *         lastName:
 *           type: string
 *           description: User's last name
 *           example: 'Rajput'
 *         email:
 *           type: string
 *           description: User's email address
 *           example: 'abhinav@millionnare.com'
 *         password:
 *           type: string
 *           description: User's password (min 8 characters, 1 uppercase, 1 special character)
 *           example: 'Test123@'
 *         location:
 *           type: string
 *           description: User's location (city or country)
 *           example: 'Bulandshahr'
 *       example:
 *         id: 'SLjaffkfnv1sd4sd45ds1215'
 *         name: 'Abhinav'
 *         lastName: 'Rajput'
 *         email: 'test@123.com'
 *         password: 'Test123@'
 *         location: 'Bulandshahr'
 */

// Register route
/**
 * @swagger
 * /jobs/registerUser:
 *   post:
 *     summary: Register a new user
 *     description: Allows a user to register with email, password, name, and location.
 *     operationId: registerUser
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User successfully registered
 *         content:
 *           application/json:
 *             example:
 *               message: 'User created successfully'
 *               userId: 'SLjaffkfnv1sd4sd45ds1215'
 *       400:
 *         description: Bad request, validation error
 *       500:
 *         description: Internal server error
 */
authRouter.post("/registerUser", limiter, registerUser);

// Login route
/**
 * @swagger
 * /jobs/login:
 *   post:
 *     summary: Login a user
 *     description: Logs in a user and returns a token on successful authentication.
 *     operationId: loginUser
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            $ref: "#/components/schemas/User"
 *     responses:
 *       200:
 *         description: Login successful, returns a JWT token
 *         content:
 *           application/json:
 *             example:
 *               token: 'Example - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzQ4MzkwNGU3Mjk5NzY0N2QwMWE5MDEiLCJpYXQiOjE3MzUzMTQ5NzYsImV4cCI6MTczNTf1DPHJoEHQEs3uZeqmKK8x0yjPDkVLWNMlU'
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 */
authRouter.post("/login", limiter, loginController);

export default authRouter;

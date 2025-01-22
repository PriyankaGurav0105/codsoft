import express from "express";
import { getAllQuizzes, getQuizById, createQuiz } from "../controllers/quizController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllQuizzes);
router.get("/:id", getQuizById);
router.post("/", authMiddleware, createQuiz); // Auth required for creating quiz

export default router;

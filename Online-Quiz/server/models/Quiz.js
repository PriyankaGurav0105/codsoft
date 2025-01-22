import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctAnswer: Number,
});

const quizSchema = new mongoose.Schema({
  title: String,
  questions: [questionSchema],
});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;

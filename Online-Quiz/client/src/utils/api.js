import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Replace with your backend URL

export const fetchQuizzes = async () => {
  const response = await axios.get(`${API_URL}/quizzes`);
  return response.data;
};

export const fetchQuiz = async (id) => {
  const response = await axios.get(`${API_URL}/quizzes/${id}`);
  return response.data;
};

export const createQuiz = async (quizData) => {
  const response = await axios.post(`${API_URL}/quizzes`, quizData);
  return response.data;
};

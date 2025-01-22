import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Replace with your backend URL

export const login = async ({ email, password }) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  localStorage.setItem("token", response.data.token);
};

export const register = async ({ username, email, password }) => {
  const response = await axios.post(`${API_URL}/auth/register`, { username, email, password });
  return response.data;
};

export const getToken = () => {
  return localStorage.getItem("token");
};

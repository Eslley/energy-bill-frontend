import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:5000/api";

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API request error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosClient;

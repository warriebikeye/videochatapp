import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development"
  ? "http://localhost:5001/api"
  : "https://videochatapp-backend-rrn1.onrender.com/api";

//const BASE_URL = import.meta.env.MODE === "development" ? "https://videochatapp-backend-rrn1.onrender.com"  : "/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  headers: { "Content-Type": "application/json" },
});

export default api;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bulma/css/bulma.css";
import axios from "axios";

// Buat instance axios dengan konfigurasi default
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000", // Tambahkan fallback
  timeout: import.meta.env.VITE_API_TIMEOUT
    ? parseInt(import.meta.env.VITE_API_TIMEOUT, 10)
    : 5000, // Fallback timeout ke 5000ms jika tidak ada
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

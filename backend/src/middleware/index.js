import express from "express";
import cors from "cors";
import router from "../routes/index.js";

const appMiddleware = express();

// CORS setup — sebaiknya whitelist origin di produksi
appMiddleware.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173", // Gunakan env untuk fleksibilitas
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  })
);

// Body parser
appMiddleware.use(express.json());
appMiddleware.use(express.urlencoded({ extended: true }));

// API Routes
appMiddleware.use("/api", router);

// Optional: 404 handler
appMiddleware.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

// Optional: Error handler
appMiddleware.use((err, req, res, next) => {
  console.error("API Error:", err);
  res.status(500).json({ message: "Internal Server Error" });
});

export default appMiddleware;

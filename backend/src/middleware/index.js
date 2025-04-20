import express from "express";
import cors from "cors";
import router from "../routes/index.js";

const appMiddleware = express();

// CORS setup (recommended to whitelist origin in production)
appMiddleware.use(
  cors({
    origin: true, // bisa diganti jadi specific origin misalnya "http://localhost:5173"
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);

// Preflight request handler
appMiddleware.options("*", cors());

// Body parser
appMiddleware.use(express.json());
appMiddleware.use(express.urlencoded({ extended: true }));

// Main API routes
appMiddleware.use("/api", router);

export default appMiddleware;

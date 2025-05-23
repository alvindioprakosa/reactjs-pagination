import { Router } from "express";
import personalRoute from "./personal.route.js";

const router = Router();

// Semua endpoint diawali dengan /api di appMiddleware, jadi cukup /personals di sini
router.use("/personals", personalRoute);

export default router;

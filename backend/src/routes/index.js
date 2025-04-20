import { Router } from "express";
import personalRoute from "./personal.route.js";

const router = Router();

// Gunakan prefix langsung di appMiddleware, jadi cukup /personals di sini
router.use("/personals", personalRoute);

export default router;

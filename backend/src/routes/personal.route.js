import { Router } from "express";
import { getPersonaldata } from "../controllers/personal.controller.js";

const personalRoute = Router();

personalRoute.get("/", getPersonaldata);

export default personalRoute;

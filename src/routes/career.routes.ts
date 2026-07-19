import express from "express";
import { getCareers } from "../controllers/career.controller";

const router = express.Router();

router.get("/", getCareers);

export default router;
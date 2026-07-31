import express from "express";
import {
  
  applyCareer,
  getMyApplications,
} from "../controllers/application.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();
 router.post("/", verifyToken, applyCareer);
 router.get("/", verifyToken, getMyApplications);

export default router;
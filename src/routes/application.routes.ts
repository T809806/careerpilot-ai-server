import express from "express";
import {
  
  applyCareer,
  getMyApplications,
} from "../controllers/application.controller";
import { verifyToken } from "../middleware/verifyToken";

const router = express.Router();
 router.post("/", verifyToken, applyCareer);
 router.get("/", verifyToken, getMyApplications);

export default router;
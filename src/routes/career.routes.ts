import express from "express";

import {
  getCareers,
  getSingleCareer,
  addCareer,
  getMyCareers,
  deleteCareer,
} from "../controllers/career.controller.js";

import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", getCareers);

router.get("/manage", verifyToken, getMyCareers);

router.get("/:id", getSingleCareer);

router.post("/", verifyToken, addCareer);

router.delete("/:id", verifyToken, deleteCareer);

export default router;
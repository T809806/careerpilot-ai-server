import express from "express";
import {
  getCareers,
  getSingleCareer,
} from "../controllers/career.controller";

const router = express.Router();

router.get("/", getCareers);
router.get("/:id", getSingleCareer);

export default router;
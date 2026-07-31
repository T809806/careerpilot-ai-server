import express from "express";
import {
  
  getCareerRecommendation,
  generateCoverLetter,
} from "../controllers/ai.controller.js";

const router = express.Router();

router.get("/test", (req, res) => {
  console.log("AI Route Working");
  res.send("AI Route OK");
});

router.post("/recommend", getCareerRecommendation);
router.post("/cover-letter", generateCoverLetter);

export default router;
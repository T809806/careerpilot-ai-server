import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import careerRoutes from "./routes/career.routes";
import userRoutes from "./routes/user.routes";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/careers", careerRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("CareerPilot AI Server Running...");
});

export default app;
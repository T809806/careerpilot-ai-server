import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import careerRoutes from "./routes/career.routes";
import userRoutes from "./routes/user.routes";
import jwtRoutes from "./routes/jwt.routes";
import applicationRoutes from "./routes/application.routes";
import aiRoutes from "./routes/ai.routes";

  dotenv.config();

  const app = express();

app.use(
  cors({
    origin: [
     "http://localhost:5173",
     "https://careerpilot-ai-client-five.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/careers", careerRoutes);
app.use("/api/users", userRoutes);
app.use("/api/applications", applicationRoutes);

app.use("/jwt", jwtRoutes);
app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("CareerPilot AI Server Running...");
});

export default app;
import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/", (req, res) => {
  const user = req.body;

  const token = jwt.sign(
    user,
    process.env.JWT_SECRET as string,
    {
      expiresIn: "1d",
    }
  );

  const isProduction = process.env.NODE_ENV === "production";

  res
    .cookie("token", token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
    })
    .send({
      success: true,
      token,
    });
});

router.post("/logout", (req, res) => {
  const isProduction = process.env.NODE_ENV === "production";

  res
    .clearCookie("token", {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
    })
    .send({
      success: true,
      message: "Logged out successfully",
    });
});

export default router;
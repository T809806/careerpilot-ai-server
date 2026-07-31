import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/", async (req, res) => {
  
  const user = req.body;

  const token = jwt.sign(
    user,
    process.env.JWT_SECRET as string,
    {
      expiresIn: "1d",
    }
  );

  res
    .cookie("token", token, {
      httpOnly: true,
      secure: false, 
      sameSite: "lax",
    })
    .send({
      success: true,
      token,
    });
});

router.post("/logout", (req, res) => {
  res
    .clearCookie("token", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    })
    .send({
      success: true,
      message: "Logged out successfully",
    });
});

export default router;
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const createJWT = (
  req: Request,
  res: Response
) => {
  const user = req.body;

  const token = jwt.sign(
    {
      email: user.email,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "7d",
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
      message: "JWT Created",
    });
};
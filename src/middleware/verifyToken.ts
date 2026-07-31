import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  console.log("========== VERIFY TOKEN ==========");
  console.log("Cookies:", req.cookies);

  const token = req.cookies?.token;

  console.log("Token:", token);

  if (!token) {
    console.log("❌ Token Missing");

    return res.status(401).send({
      success: false,
      message: "Unauthorized access",
    });
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET as string,
    (err: any, decoded: any) => {

      if (err) {
        console.log("❌ Invalid Token");

        return res.status(401).send({
          success: false,
          message: "Invalid Token",
        });
      }

      console.log("✅ Decoded:", decoded);

      req.user = decoded;

      next();
    }
  );
};
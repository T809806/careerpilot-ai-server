import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

    const token = req.cookies?.token;


  console.log("=== VERIFY TOKEN ===");
  console.log("Cookies:", req.cookies);
  console.log("Token:", token);

  if (!token) {
    return res.status(401).send({
      success: false,
      message: "Unauthorized access",
    });
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET as string,
    (error: any, decoded: any) => {

      if (error) {
        return res.status(401).send({
          success: false,
          message: "Invalid token",
        });
      }
 req.user = decoded;

      next();
    }
  );
};
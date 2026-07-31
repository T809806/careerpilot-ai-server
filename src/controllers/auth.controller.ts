import { Request, Response } from "express";

export const loginUser = async (
  
  req: Request,
  res: Response
) => {

  const { email } = req.body;


  res.send({
    success: true,
    message: "Login route working",
    email,
  });

};
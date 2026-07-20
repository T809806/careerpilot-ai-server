import { Request, Response } from "express";
import client from "../config/db";

export const registerUser = async (
  req: Request,
  res: Response
) => {
  try {
    const user = req.body;

    const collection = client
      .db("careerpilot")
      .collection("users");

    const existingUser = await collection.findOne({
      email: user.email,
    });

    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "User already exists",
      });
    }

    const result = await collection.insertOne(user);

    res.send({
      success: true,
      result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Registration failed",
    });
  }
};
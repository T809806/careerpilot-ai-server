import { Request, Response } from "express";
import client from "../config/db";

export const getCareers = async (
  req: Request,
  res: Response
) => {
  const collection = client
    .db("careerpilot")
    .collection("careers");

  const result = await collection.find().toArray();

  res.send(result);
};
import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import client from "../config/db";

// GET All Careers
export const getCareers = async (
  req: Request,
  res: Response
) => {
  try {
    const collection = client
      .db("careerpilot")
      .collection("careers");

    const result = await collection.find().toArray();

    res.send(result);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to fetch careers",
    });
  }
};

// GET Single Career
export const getSingleCareer = async (
  req: Request,
  res: Response
) => {
  try {
    const id = String(req.params.id);

    const collection = client
      .db("careerpilot")
      .collection("careers");

    const result = await collection.findOne({
      _id: new ObjectId(id),
    });

    if (!result) {
      return res.status(404).send({
        success: false,
        message: "Career not found",
      });
    }

    res.send(result);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to fetch career",
    });
  }
};
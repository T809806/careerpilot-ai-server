import { Request, Response } from "express";
import client from "../config/db";

export const applyCareer = async (
  req: Request,
  res: Response
) => {
  try {
    const application = req.body;

    const collection = client
      .db("careerpilot")
      .collection("applications");

  
    const existingApplication = await collection.findOne({
      careerId: application.careerId,
      email: application.email,
    });

    if (existingApplication) {
      return res.status(400).send({
        success: false,
        message: "You have already applied for this job.",
      });
    }

   const result = await collection.insertOne(application);

    res.send({
      success: true,
      message: "Application submitted successfully.",
      result,
    });

  } catch (error) {
    console.error(error);

    res.status(500).send({
      success: false,
      message: "Failed to submit application.",
    });
  }
};


export const getMyApplications = async (
  req: Request,
  res: Response
) => {
  try {
    const email = (req.user as any).email;

    const collection = client
      .db("careerpilot")
      .collection("applications");

    const result = await collection
      .find({ email })
      .toArray();

    res.send(result);

  } catch (error) {
    console.error(error);

    res.status(500).send({
      success: false,
      message: "Failed to fetch applications",
    });
  }
};
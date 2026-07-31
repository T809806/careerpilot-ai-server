import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import client from "../config/db";

export const getCareers = async (
  req: Request,
  res: Response
) => {
  try {
    const collection = client
      .db("careerpilot")
      .collection("careers");

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 6;
    const skip = (page - 1) * limit;

    const search = (req.query.search as string) || "";
    const location = (req.query.location as string) || "";
    const sort = (req.query.sort as string) || "";

    const query: any = {};

    if (search) {
      query.title = {
        $regex: search,
        $options: "i",
      };
    }

    if (location) {
      query.location = location;
    }

    let sortOption: any = {};

    if (sort === "salary-low") {
      sortOption.salary = 1;
    }

    if (sort === "salary-high") {
      sortOption.salary = -1;
    }

    const total = await collection.countDocuments(query);

    const careers = await collection
      .find(query)
      .sort(sortOption)
      .skip(skip)
      .limit(limit)
      .toArray();

    res.send({
      careers,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });

  } catch (error) {
    console.error(error);

    res.status(500).send({
      success: false,
      message: "Failed to fetch careers.",
    });
  }
};


export const addCareer = async (
  req: Request,
  res: Response
) => {
  try {
    const career = {
  ...req.body,
  createdBy: req.user?.email,
};

    const collection = client
      .db("careerpilot")
      .collection("careers");

    const result = await collection.insertOne(career);

    res.send({
      success: true,
      message: "Career added successfully.",
      result,
    });

  } catch (error) {
    console.error(error);

    res.status(500).send({
      success: false,
      message: "Failed to add career.",
    });
  }
};


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
    console.error(error);

    res.status(500).send({
      success: false,
      message: "Failed to fetch career.",
    });
  }
};


export const getMyCareers = async (
  req: Request,
  res: Response
) => {
  try {
    const email = req.user?.email;

    const collection = client
      .db("careerpilot")
      .collection("careers");

    const result = await collection.find({
      createdBy: email,
    }).toArray();

    res.send(result);

  } catch (error) {
    console.error(error);

    res.status(500).send({
      success: false,
      message: "Failed to fetch careers.",
    });
  }
};


export const deleteCareer = async (
  req: Request,
  res: Response
) => {
  try {
    const id = String(req.params.id);

    const collection = client
      .db("careerpilot")
      .collection("careers");

    const result = await collection.deleteOne({
      _id: new ObjectId(id),
    });

    res.send({
      success: true,
      message: "Career deleted successfully.",
      result,
    });

  } catch (error) {
    console.error(error);

    res.status(500).send({
      success: false,
      message: "Failed to delete career.",
    });
  }
};
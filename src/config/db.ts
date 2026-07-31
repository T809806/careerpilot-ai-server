import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const client = new MongoClient(process.env.MONGODB_URI!);

export const connectDB = async () => {

  try {
    await client.connect();
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

export default client;
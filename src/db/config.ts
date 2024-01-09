import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/next-auth");
    console.log("Database Connect");
  } catch (err) {
    console.log(err, "Detected");
  }
};

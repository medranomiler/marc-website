import mongoose from "mongoose";

const connectMongo = () => { 
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable is not defined.");
  }
  mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB.");
};

export default connectMongo;

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            dbName: "data",
        });
        console.log("MongoDB connected with Mongoose");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

export default connectDB;

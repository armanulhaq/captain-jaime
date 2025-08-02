import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import connectDB from "./configs/db.js";

await connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
    })
);

app.get("/", (req, res) => {
    res.json("I am okay");
});
app.use("/api/auth", authRoute);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

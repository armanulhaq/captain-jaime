import mongoose from "mongoose";
import chatSessionSchema from "./chat.model.js";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        gender: {
            type: String,
            enum: ["boy", "girl", "other"],
            default: null,
        },
        age: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        chats: [chatSessionSchema],
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;

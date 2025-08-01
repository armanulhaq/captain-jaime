import mongoose from "mongoose";
import messageSchema from "./message.model.js";

const chatSessionSchema = new mongoose.Schema(
    {
        sentiment: {
            type: String, // Emoji like 😊 😢 😡 etc.
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        messages: [messageSchema],
    },
    { _id: true } // keeps an _id for identifying chats
);

export default chatSessionSchema;

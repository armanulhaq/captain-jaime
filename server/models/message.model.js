import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        role: {
            type: String,
            enum: ["user", "bot"],
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { _id: false }
);

export default messageSchema;

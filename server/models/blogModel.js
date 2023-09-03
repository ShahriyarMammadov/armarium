import { Schema, model } from "mongoose";

const blogSchema = new Schema(
  {
    name: { type: String, unique: true, required: true },
    description: { type: String, required: true },
    coverImage: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now() },
  },
  { versionKey: false, timestamps: true }
);

export const blogModel = model("blog", blogSchema);

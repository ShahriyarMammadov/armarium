import { Schema, model } from "mongoose";

const newsSchema = new Schema(
  {
    coverImage: { type: String, required: true },
    name: { type: String, unique: true, required: true },
    date: { type: Date, required: true, default: Date.now() },
    description: { type: String, required: true },
    allDescription: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

export const newsModel = model("news", newsSchema);

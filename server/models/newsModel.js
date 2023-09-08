import { Schema, model } from "mongoose";

const newsSchema = new Schema(
  {
    coverImage: { type: String, required: true },
    name: { type: String, required: true },
    date: { type: Date, default: Date.now() },
    cardDescription: { type: String, required: true },
    description: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

export const newsModel = model("news", newsSchema);

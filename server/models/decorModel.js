import mongoose, { Schema, model } from "mongoose";

// card Description elave et
const decorSchema = new Schema(
  {
    name: { type: String,  required: true },
    description: { type: String, required: true },
    images: { type: Array, required: true },
    coverImage: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

export const decorModel = model("decor", decorSchema);

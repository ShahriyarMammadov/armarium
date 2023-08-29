import mongoose, { Schema, model } from "mongoose";

const decorSchema = new Schema(
  {
    name: { type: String, unique: true, required: true },
    description: { type: String, required: true },
    images: { type: Array, required: true },
    coverImage: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

export const decorModel = model("decor", decorSchema);

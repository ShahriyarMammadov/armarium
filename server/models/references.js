import { Schema, model } from "mongoose";

const referencesSchema = new Schema(
  {
    images: { type: Array, required: true },
    coverImage: { type: String, required: true },
    name: { type: String, unique: true, required: true },
    date: { type: Date, default: Date.now() },
  },
  { versionKey: false, timestamps: true }
);

export const referencesModel = model("reference", referencesSchema);

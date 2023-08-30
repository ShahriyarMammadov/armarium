import mongoose, { Schema, model } from "mongoose";

const selectedDecorSchema = new Schema(
  {
    names: [String],
  },
  { versionKey: false, timestamps: true }
);

export const selectedDecorModel = model("selectedModel", selectedDecorSchema);

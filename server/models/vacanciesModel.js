import { Schema, model } from "mongoose";

const vacanciesSchema = new Schema(
  {
    name: { type: String, required: true },
    coverImage: { type: String },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);

export const vacanciesModel = model("vacancies", vacanciesSchema);

import { Schema, model } from "mongoose";

const writeToUsSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String },
    text: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

export const writeToUsModel = model("writeToUs", writeToUsSchema);

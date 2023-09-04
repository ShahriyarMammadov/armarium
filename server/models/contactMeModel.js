import { Schema, model } from "mongoose";

const contactMeSchema = new Schema(
  {
    phoneNumber: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

export const contactMeModal = model("contactMe", contactMeSchema);

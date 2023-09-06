import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    personalEmail: { type: String },
    profilePhoto: { type: String },
    role: { type: String, default: "user" },
  },
  { versionKey: false, timestamps: true }
);

// Compare provided password with the password from the database
userSchema.methods.comparePassword = async function (providedPassword) {
  try {
    return await bcrypt.compare(providedPassword, this.password);
  } catch (error) {
    throw new Error("Password comparison failed.");
  }
};

export const userModel = model("user", userSchema);

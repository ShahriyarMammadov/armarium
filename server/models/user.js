import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "admin" },
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

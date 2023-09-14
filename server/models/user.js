import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    personalEmail: { type: String },
    profilePhoto: { type: String },
    referenceCount: { type: Number, default: 0 },
    blogCount: { type: Number, default: 0 },
    decorCount: { type: Number, default: 0 },
    vacanciesCount: { type: Number, default: 0 },
    newsCount: { type: Number, default: 0 },
    role: { type: String, default: "user" },
  },
  { versionKey: false, timestamps: true }
);

// Compare provided password with the password from the database
userSchema.methods.comparePassword = async function (providedPassword) {
  try {
    return await bcrypt.compare(providedPassword, this.password);
  } catch (error) {
    return res.status(200).json({ message: "Password comparison failed." });
  }
};

export const userModel = model("user", userSchema);

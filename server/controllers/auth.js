import { userModel } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// Create Token
// export const maxAge = 10 * 60;
export const maxAge = 3 * 24 * 60 * 60;

export const createToken = (id, role) => {
  return jwt.sign({ id, role }, "4473");
};
// -----------------------------------------------------

// Email and Password error
const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.message === "User not found") errors.email = "Email Yanlışdır";

  if (err.message === "Incorrect password")
    errors.password = "Password Yanlışdır";

  if (err.message.includes("Users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};
// -----------------------------------------------------

// Sign IN Login
export const signIn = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(200).json({ message: "User not found" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(200).json({ message: "Incorrect password" });
    }
    const token = createToken(user._id, user.role);

    res.cookie("jwt", token, {
      withCredentials: true,
      maxAge: maxAge * 1000,
    });

    res.status(200).send({
      data: user,
      created: true,
      message: "Xoş Gəldiniz 😀, Gününüz Xoş Keçsin",
    });
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    res.json({ errors, created: false });
  }
};

// Register
export const signUp = async (req, res) => {
  try {
    const { email, password, personalEmail, name, surname } = req.body;

    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(409).send({
        success: false,
        message: "Email İlə Artıq Qeydiyyatdan Keçilib",
      });
    }

    let profilePhoto;

    if (req.files.profilePhoto) {
      profilePhoto = req.files.profilePhoto[0].filename;
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await userModel.create({
      email: email,
      password: hashedPassword,
      surname: surname,
      name: name,
      personalEmail: personalEmail,
      profilePhoto: profilePhoto,
    });

    return res.status(200).send({
      success: true,
      message: "Uğurla Qeydiyyatdan Keçildi",
      newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Server Error",
    });
  }
};
// -----------------------------------------------------

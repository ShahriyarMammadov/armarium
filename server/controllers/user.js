import { userModel } from "../models/user.js";
import fs from "fs";
const uploadDir = "images/";

export const userById = async (req, res) => {
  try {
    const id = req.admin;
    const user = await userModel.findById(id);

    if (!user) {
      return res
        .status(404)
        .json({ message: "Istifadəçi Tapılmadı", data: user });
    }

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const userWithSpecialData = async (req, res) => {
  try {
    const id = req.body.id;
    const blogs = await blogModel.find(
      { _id: id },
      "name description coverImage"
    );
    res.json(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const id = req.body.id;

    const deletedUser = await newsModel.findOneAndDelete({
      _id: id,
    });

    if (!deletedUser) {
      return res.status(404).json({ message: "Istifadəçi Tapılmadı" });
    }

    const coverImagePath = uploadDir + deletedUser.profilePhoto;
    fs.unlink(coverImagePath, (err) => {
      if (err) {
        console.error(`Error: ${deletedUser.profilePhoto}`);
      } else {
        console.log(`Cover image Silindi: ${deletedUser.profilePhoto}`);
      }
    });

    res.json({
      message: `${deletedUser} Adlı İstifadəçi Silindi`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

export const editUserDataById = async (req, res) => {
  try {
    const { name } = req.params;
    const { description, coverImage } = req.body;

    const user = await userModel.findByIdAndUpdate(id, req.body);

    res.json(updatedBlog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

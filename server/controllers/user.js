import { blogModel } from "../models/blogModel.js";
import { decorModel } from "../models/decorModel.js";
import { newsModel } from "../models/newsModel.js";
import { userModel } from "../models/user.js";
import fs from "fs";
import { vacanciesModel } from "../models/vacanciesModel.js";
import { referencesModel } from "../models/references.js";
const uploadDir = "images/";

export const userById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const user = await userModel.findById(id);

    if (!user) {
      return res
        .status(404)
        .json({ message: "Istifadəçi Tapılmadı", data: user });
    }

    const currentDate = new Date();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    const blogCount = await blogModel.countDocuments({
      date: { $gte: oneMonthAgo, $lte: currentDate },
    });

    const newsCount = await newsModel.countDocuments({
      date: { $gte: oneMonthAgo, $lte: currentDate },
    });

    const decorCount = await decorModel.countDocuments({
      date: { $gte: oneMonthAgo, $lte: currentDate },
    });
    const vacanciesCount = await vacanciesModel.countDocuments({
      date: { $gte: oneMonthAgo, $lte: currentDate },
    });
    const referanceCount = await referencesModel.countDocuments({
      date: { $gte: oneMonthAgo, $lte: currentDate },
    });

    res.status(200).json({
      user: user,
      data: {
        blogCount,
        newsCount,
        decorCount,
        vacanciesCount,
        referanceCount,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const userWithSpecialData = async (req, res) => {
  try {
    const id = req.body.id;
    const blogs = await blogModel.find({ _id: id }, "name email coverImage");
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
    const id = req.params.id;
    const { name, surname, personalEmail } = req.body;

    if (req.files && req.files.profilePhoto) {
      const profilePhotoPath = req.files.profilePhoto[0].path;
      req.body.profilePhoto = profilePhotoPath.toString();
    }

    console.log("req", req.body);
    const user = await userModel.findByIdAndUpdate(id, req.body);

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

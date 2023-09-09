import { newsModel } from "../models/newsModel.js";
import fs from "fs";
import { userModel } from "../models/user.js";
const uploadDir = "images/";

// ----------------------- ADD NEWS ----------------------

export const addNews = async (req, res) => {
  try {
    const { name, description, cardDescription, date } = req.body;

    if (!req.files.coverImage) {
      return res.status(415).json({
        error: "Zəhmət Olmasa Örtük Şəkli Seçin",
      });
    }

    const coverImage = req.files.coverImage[0].filename;

    const newNews = new newsModel({
      name,
      description,
      cardDescription,
      date,
      coverImage,
    });

    await newNews.save();

    let userId = req.params.id;

    const user = await userModel.findById(userId);
    if (user) {
      const totalNewsCount = await newsModel.countDocuments();
      user.newsCount = totalNewsCount;
      await user.save();
    } else {
      return res.status(404).json({ error: "Istifadəçi Tapılmadı" });
    }

    res
      .status(201)
      .json({ message: "Yeni Xəbər Uğurla Yaradıldı", newNews: newNews });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ----------------------- ALL NEWS ----------------------
// Bütün Xəbərlər-ların göndərilməsi

export const allNews = async (req, res) => {
  try {
    const news = await newsModel.find();
    res.json(news.reverse());
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ------------------- NEWS BY NAME ----------------------
// Adına görə xəbərlər-in göndərilməsi

export const newsByName = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await newsModel.find({ _id: id });

    if (!news) {
      return res.status(404).json({ message: "Xəbər Tapılmadı", data: news });
    }

    res.json(news);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ----------- DECOR WITH SPECIAL DATA -------------------

export const newsWithSpecialData = async (req, res) => {
  try {
    const news = await newsModel.find(
      {},
      "name description coverImage date _id"
    );
    res.json(news);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ------------- EDİT NEWS WITH NEWS NAME ----------------

export const editNewsByName = async (req, res) => {
  try {
    const { name } = req.params;
    const { description, coverImage, allDescription } = req.body;

    const updatedNews = await newsModel.findOneAndUpdate(
      { name },
      { description, coverImage, allDescription },
      { new: true }
    );

    res.json(updatedNews);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ------------- DELETE NEWS BY NEWS NAME ----------------

export const deleteNewsByName = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedNews = await newsModel.findOneAndDelete({
      _id: id,
    });

    if (!deletedNews) {
      return res.status(404).json({ message: "Xəbər Tapılmadı" });
    }

    const coverImagePath = uploadDir + deletedNews.coverImage;
    fs.unlink(coverImagePath, (err) => {
      if (err) {
        console.error(`Error: ${deletedNews.coverImage}`);
      } else {
        console.log(`Cover image Silindi: ${deletedNews.coverImage}`);
      }
    });

    let userId = req.params.userId;

    const user = await userModel.findById(userId);
    if (user) {
      const totalNewsCount = await newsModel.countDocuments();
      user.newsCount = totalNewsCount;
      await user.save();
    } else {
      return res.status(404).json({ error: "Istifadəçi Tapılmadı" });
    }

    res.json({
      message: `${id} ID-li Xəbər Silindi`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

import { newsModel } from "../models/newsModel.js";

// ----------------------- ADD NEWS ----------------------

export const addNews = async (req, res) => {
  try {
    const { name, description, allDescription, date } = req.body;

    if (!req.files.coverImage) {
      return res.status(415).json({
        error: "Zəhmət Olmasa Örtük Şəkli Seçin",
      });
    }

    const coverImage = req.files.coverImage[0].filename;

    const newNews = new newsModel({
      name,
      description,
      allDescription,
      date,
      coverImage,
    });

    await newNews.save();

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
    res.json(news);
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
    const { newsName } = req.params;
    const news = await newsModel.find({ name: newsName });

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
    const news = await newsModel.find({}, "name description coverImage date");
    res.json(news);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ----------- --EDİT NEWS WITH NEWS NAME ----------------

export const editNewsByName = async (req, res) => {
  try {
    const { name } = req.params;
    const { description, coverImage, allDescription } = req.body;

    const updatedNews = await decorModel.findOneAndUpdate(
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

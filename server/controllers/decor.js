import { decorModel } from "../models/decorModel.js";
import fs from "fs";
import { userModel } from "../models/user.js";
const uploadDir = "images/";

// ---------------------- ADD DECOR ----------------------
// yeni decor-un yaradılması, 15 dənə şəkil, 1 dənə örtük şəkli yükləmək mümkündür, digərlərində validation yoxdur

export const addDecor = async (req, res) => {
  try {
    const { name, description } = req.body;

    const existingDecor = await decorModel.findOne({ name });

    if (existingDecor) {
      return res.status(200).json({ message: "Bu Ad-da bir dekor zatən var." });
    }

    if (!req.files.images) {
      return res.status(200).json({
        error: "Heç Bir Şəkil Əlavə Edilməyib, Zəhmət Olmasa Şəkil Seçin!",
      });
    }

    if (!req.files.coverImage) {
      return res.status(200).json({
        error: "Zəhmət Olmasa Örtük Şəkli Seçin",
      });
    }

    const images = req.files.images.map((image) => image.filename);
    const coverImage = req.files.coverImage[0].filename;

    const newDecor = new decorModel({
      name,
      description,
      images,
      coverImage,
    });

    await newDecor.save();

    let userId = req.params.id;

    const user = await userModel.findById(userId);
    if (user) {
      const totalDecorCount = await decorModel.countDocuments();
      user.decorCount = totalDecorCount;
      await user.save();
    } else {
      return res.status(404).json({ error: "Istifadəçi Tapılmadı" });
    }

    res
      .status(201)
      .json({ message: "Yeni Dekor Uğurla Yaradıldı", newDecor: newDecor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ---------------------- ALL DECOR ----------------------
// Bütün decor-ların göndərilməsi

export const allDecor = async (req, res) => {
  try {
    const decors = await decorModel.find();
    res.json(decors.reverse());
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ------------------ DECOR BY NAME ----------------------
// Adına görə decor-un göndərilməsi

export const decorByName = async (req, res) => {
  try {
    const { decorName } = req.params;
    console.log(decorName);
    const decors = await decorModel.find({ name: decorName });

    if (!decors) {
      return res.status(200).json({ message: "Dekor Tapılmadı", data: decors });
    }

    res.json(decors);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ----------- DECOR WITH SPECIAL DATA -------------------
// Decor-un adına görə `adını, description və örtük şəklinin göndərilməsi

export const decorWithSpecialData = async (req, res) => {
  try {
    const decors = await decorModel.find({}, "name description coverImage");
    res.json(decors);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ----------- EDİT DECOR WITH DECOR NAME ----------------
// Decor-un adına görə məlumatlarının redaktə edilməsi

export const editDecorByName = async (req, res) => {
  try {
    const { name } = req.params;
    const { description, coverImage } = req.body;

    const updatedDecor = await decorModel.findOneAndUpdate(
      { name },
      { description, coverImage },
      { new: true }
    );

    res.json(updatedDecor);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ----------- DELETE DECOR WITH DECOR NAME --------------
// Decor-un adına görə məlumatlarının silinməsi

export const deleteDecorByName = async (req, res) => {
  try {
    const decorNameToDelete = req.params.id;
    console.log(decorNameToDelete);

    const deletedDecor = await decorModel.findOneAndDelete({
      _id: decorNameToDelete,
    });

    if (!deletedDecor) {
      return res
        .status(200)
        .json({ message: `${decorNameToDelete} Adında Dekor Tapılmadı` });
    }

    deletedDecor.images.forEach((imageFileName) => {
      const imagePath = uploadDir + imageFileName;

      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error(`Error: ${imageFileName}`);
        } else {
          console.log(`Şəkillər Silindi: ${imageFileName}`);
        }
      });
    });

    const coverImagePath = uploadDir + deletedDecor.coverImage;
    fs.unlink(coverImagePath, (err) => {
      if (err) {
        console.error(`Error: ${deletedDecor.coverImage}`);
      } else {
        console.log(`Örtük Şəkli Sİlindi: ${deletedDecor.coverImage}`);
      }
    });

    let userId = req.params.userId;

    const user = await userModel.findById(userId);
    if (user) {
      const totalDecorCount = await decorModel.countDocuments();
      user.decorCount = totalDecorCount;
      await user.save();
    } else {
      return res.status(200).json({ error: "Istifadəçi Tapılmadı" });
    }

    res.json({
      message: `${decorNameToDelete} Adlı Dekor Uğurla Silindi.`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

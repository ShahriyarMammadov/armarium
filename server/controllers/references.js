import { referencesModel } from "../models/references.js";
const uploadDir = "images/";
import fs from "fs";
import { userModel } from "../models/user.js";

// ---------------------- ADD REFERENCES ----------------------
// yeni decor-un yaradılması, 15 dənə şəkil, 1 dənə örtük şəkli yükləmək mümkündür, digərlərində validation yoxdur

export const addReference = async (req, res) => {
  try {
    const { name } = req.body;

    const existingRef = await referencesModel.findOne({ name });

    if (existingRef) {
      return res
        .status(200)
        .json({ message: "Bu Ad-da bir Referans zatən var." });
    }

    if (!req.files.images) {
      return res.status(415).json({
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

    const newReference = new referencesModel({
      name,
      images,
      coverImage,
    });

    await newReference.save();

    let userId = req.params.id;

    const user = await userModel.findById(userId);
    if (user) {
      const totalReferenceCount = await referencesModel.countDocuments();
      user.referenceCount = totalReferenceCount;
      await user.save();
    } else {
      return res.status(404).json({ error: "Istifadəçi Tapılmadı" });
    }

    res.status(201).json({
      message: "Yeni Referans Uğurla Yaradıldı",
      newReference: newReference,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ---------------------- ALL DECOR ----------------------
// Bütün decor-ların göndərilməsi

export const allReference = async (req, res) => {
  try {
    const references = await referencesModel.find();
    res.json(references.reverse());
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ------------------ DECOR BY NAME ----------------------
// Adına görə decor-un göndərilməsi

export const referenceByName = async (req, res) => {
  try {
    const referenceName = req.params.referenceName;
    const reference = await referencesModel.find({ name: referenceName });

    if (!reference) {
      return res
        .status(404)
        .json({ message: "Referans Tapılmadı", data: reference });
    }

    res.json(reference);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ----------- DECOR WITH SPECIAL DATA -------------------
// Decor-un adına görə `adını, description və örtük şəklinin göndərilməsi

export const referenceWithSpecialData = async (req, res) => {
  try {
    const reference = await referencesModel.find({}, "name coverImage");
    res.json(reference);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ----------- EDİT DECOR WITH DECOR NAME ----------------
// Decor-un adına görə məlumatlarının redaktə edilməsi

export const editReferenceByName = async (req, res) => {
  try {
    const { name } = req.params;
    const { coverImage } = req.body;

    const updatedReference = await referencesModel.findOneAndUpdate(
      { name },
      { coverImage },
      { new: true }
    );

    res.json(updatedReference);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ----------- DELETE DECOR WITH DECOR NAME --------------
// Decor-un adına görə məlumatlarının silinməsi

export const deleteReferenceByName = async (req, res) => {
  try {
    const referenceName = req.params.id;
    console.log(referenceName);

    const deletedReference = await referencesModel.findOneAndDelete({
      _id: referenceName,
    });

    if (!deletedReference) {
      return res
        .status(404)
        .json({ message: `${referenceName} Adında Referans Tapılmadı` });
    }

    deletedReference.images.forEach((imageFileName) => {
      const imagePath = uploadDir + imageFileName;

      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error(`Error: ${imageFileName}`);
        } else {
          console.log(`Şəkillər Silindi: ${imageFileName}`);
        }
      });
    });

    const coverImagePath = uploadDir + deletedReference.coverImage;
    fs.unlink(coverImagePath, (err) => {
      if (err) {
        console.error(`Error: ${deletedReference.coverImage}`);
      } else {
        console.log(`Örtük Şəkli Sİlindi: ${deletedReference.coverImage}`);
      }
    });

    let userId = req.params.userId;

    const user = await userModel.findById(userId);
    if (user) {
      const totalReferencesCount = await referencesModel.countDocuments();
      user.referenceCount = totalReferencesCount;
      await user.save();
    } else {
      return res.status(404).json({ error: "Istifadəçi Tapılmadı" });
    }

    res.json({
      message: `${deletedReference} Adlı Dekor Uğurla Silindi.`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

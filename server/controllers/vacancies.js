const uploadDir = "images/";
import fs from "fs";
import { vacanciesModel } from "../models/vacanciesModel.js";
import { userModel } from "../models/user.js";

// ---------------------- ADD VACANCY ----------------------
// yeni decor-un yaradılması, 15 dənə şəkil, 1 dənə örtük şəkli yükləmək mümkündür, digərlərində validation yoxdur

export const addVacancy = async (req, res) => {
  try {
    const { name, description } = req.body;

    // if (!req.files.coverImage) {
    //   return res.status(415).json({
    //     error: "Zəhmət Olmasa Şəkil Seçin",
    //   });
    // }

    if (req?.files?.coverImage) {
      var coverImage = req?.files?.coverImage[0]?.filename;
    }

    const newVacancy = new vacanciesModel({
      name: name,
      description: description,
      coverImage: coverImage ? coverImage : "",
    });

    await newVacancy.save();

    let userId = req.params.id;

    const user = await userModel.findById(userId);
    if (user) {
      const totalVacanciesModel = await vacanciesModel.countDocuments();
      user.vacanciesCount = totalVacanciesModel;
      await user.save();
    } else {
      return res.status(404).json({ error: "Istifadəçi Tapılmadı" });
    }

    res.status(201).json({
      message: "Yeni Vakansiya Uğurla Yaradıldı",
      newReference: newVacancy,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// -------------------- ALL VACANCY ----------------------
// Bütün vakansiya-ların göndərilməsi

export const allVacancy = async (req, res) => {
  try {
    const vacancies = await vacanciesModel.find();
    res.json(vacancies.reverse());
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ----------------- VACANCY BY NAME ---------------------
// Adına görə vakansiyanin göndərilməsi

export const vacancyByName = async (req, res) => {
  try {
    const vacancyName = req.params.vacancyName;
    const vacancy = await vacanciesModel.find({ name: vacancyName });

    if (!vacancy) {
      return res
        .status(404)
        .json({ message: "Vakansiya Tapılmadı", data: vacancy });
    }

    res.json(vacancy);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ----------- DECOR WITH SPECIAL DATA -------------------
// Decor-un adına görə `adını, description və örtük şəklinin göndərilməsi

export const vacancyWithSpecialData = async (req, res) => {
  try {
    const vacancies = await vacanciesModel.find({}, "name coverImage");
    res.json(vacancies);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ----------- EDİT DECOR WITH DECOR NAME ----------------
// Decor-un adına görə məlumatlarının redaktə edilməsi

export const editVacancyByName = async (req, res) => {
  try {
    const { name } = req.params;

    if (!req.files.coverImage) {
      return res.status(415).json({
        error: "Zəhmət Olmasa Şəkil Seçin",
      });
    }

    const coverImage = req.files.coverImage[0].filename;

    const updatedReference = await vacanciesModel.findOneAndUpdate(
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

export const deleteVacancyByName = async (req, res) => {
  try {
    const vacancyName = req.params.vacancyName;
    console.log(vacancyName);

    const deletedVacancy = await vacanciesModel.findOneAndDelete({
      name: vacancyName,
    });

    if (!deletedVacancy) {
      return res
        .status(404)
        .json({ message: `${vacancyName} Adında Vakansiya Tapılmadı` });
    }

    // deletedReference.images.forEach((imageFileName) => {
    //   const imagePath = uploadDir + imageFileName;

    //   fs.unlink(imagePath, (err) => {
    //     if (err) {
    //       console.error(`Error: ${imageFileName}`);
    //     } else {
    //       console.log(`Şəkillər Silindi: ${imageFileName}`);
    //     }
    //   });
    // });

    const coverImagePath = uploadDir + deletedVacancy.coverImage;
    fs.unlink(coverImagePath, (err) => {
      if (err) {
        console.error(`Error: ${deletedVacancy.coverImage}`);
      } else {
        console.log(`Örtük Şəkli Sİlindi: ${deletedVacancy.coverImage}`);
      }
    });

    let userId = req.params.userId;

    const user = await userModel.findById(userId);
    if (user) {
      const totalVacanciesCount = await vacanciesModel.countDocuments();
      user.vacanciesCount = totalVacanciesCount;
      await user.save();
    } else {
      return res.status(404).json({ error: "Istifadəçi Tapılmadı" });
    }

    res.json({
      message: `${deletedVacancy} Adlı Dekor Uğurla Silindi.`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

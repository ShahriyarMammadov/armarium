import { decorModel } from "../models/decorModel.js";
import { selectedDecorModel } from "../models/selectedModels.js";

// ------------------ SELECT DECORS ----------------------
// HomePage-də Modellər hissəsinin decor-un adına görə seçilməsi

export const selectDecors = async (req, res) => {
  try {
    const selectedNames = req.body.selectedNames;

    const savedSelectedNames = await selectedDecorModel.create({
      names: selectedNames,
    });
    res.json(savedSelectedNames);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ---------------- GET SELECT DECORS --------------------
// Seçilmiş Decor-ların göndərilməsi

export const getSelectedDecors = async (req, res) => {
  try {
    const selectedNamesDocument = await selectedDecorModel.findOne();
    const selectedNames = selectedNamesDocument
      ? selectedNamesDocument.names
      : [];

    const selectedDecors = await decorModel.find(
      { name: { $in: selectedNames } },
      { coverImage: 1, name: 1, description: 1, _id: 0 }
    );

    res.json({ data: selectedDecors.reverse(), name: selectedNamesDocument });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ---------------- REMOVE SELECTED DECOR ----------------
// Decor-un adına görə decor-un seçilmişlər siyahısından silinməsi

// Remove Name From Selected Decor
export const removeNameFromSelectedDecor = async (req, res) => {
  try {
    const { name } = req.query;
    const selectedDecorId = "64fc9119db08d97bb86ac4b9";

    const result = await selectedDecorModel.updateOne(
      { _id: selectedDecorId },
      { $pull: { names: name } }
    );

    if (result.nModified === 0) {
      return res
        .status(404)
        .json({ message: "Seçilmiş Dekorlarda Bele Bir Dekor Yoxdur." });
    }

    res.status(200).json({ message: "Seçilmiş Dekorlardan Silindi" });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// Add Name To Selected Decor
export const addNameToSelectedDecor = async (req, res) => {
  try {
    const selectedDecorId = "64fc9119db08d97bb86ac4b9";
    const { selectedNames } = req.body;

    const existingSelectedDecor = await selectedDecorModel.findOne({
      _id: selectedDecorId,
      names: { $in: selectedNames },
    });

    if (existingSelectedDecor) {
      return res.status(200).json({ message: "Bu Dekor Zatən Əlavə Edilib." });
    }

    const result = await selectedDecorModel.findOneAndUpdate(
      { _id: selectedDecorId },
      { $addToSet: { names: selectedNames } },
      { upsert: true, new: true }
    );

    res.status(200).json({ message: "Dekor Əlavə Edildi." });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// -------------------------------------------------------

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

    res.json(selectedDecors);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ---------------- REMOVE SELECTED DECOR ----------------
// Decor-un adına görə decor-un seçilmişlər siyahısından silinməsi

export const removeNameFromSelectedDecor = async (nameToRemove) => {
  try {
    await selectedDecorModel.updateOne({}, { $pull: { names: nameToRemove } });
    console.log(`${nameToRemove} removed from selected decor names.`);
  } catch (error) {
    console.error("Error:", error.message);
  }
};
// -------------------------------------------------------

// ------------- ADD NAME TO SELECTED DECORS -------------
// Yeni decor-un adının əlavə edilməsi

export const addNameToSelectedDecor = async (newName) => {
  try {
    await selectedDecorModel.updateOne({}, { $addToSet: { names: newName } });
    console.log(`${newName} added to selected decor names.`);
  } catch (error) {
    console.error("Error:", error.message);
  }
};
// -------------------------------------------------------

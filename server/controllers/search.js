import { decorModel } from "../models/decorModel.js";
import { referencesModel } from "../models/references.js";
import { blogModel } from "../models/blogModel.js";
import { vacanciesModel } from "../models/vacanciesModel.js";
import { newsModel } from "../models/newsModel.js";

export const searchByName = async (req, res) => {
  try {
    const models = [
      { model: referencesModel, category: "Referanslar" },
      { model: decorModel, category: "Dekor" },
      { model: blogModel, category: "Bloq" },
      { model: vacanciesModel, category: "Vakansiya" },
      { model: newsModel, category: "Xəbərlər" },
    ];

    const searchValue = req.params.value;

    const searchResults = await Promise.all(
      models.map(async (item) => {
        const results = await item.model.find({
          name: { $regex: new RegExp(searchValue, "i") },
        });
        return { category: item.category, results };
      })
    );

    const combinedResults = searchResults.reduce((accumulator, result) => {
      if (result.results.length > 0) {
        accumulator.push(result);
      }
      return accumulator;
    }, []);

    if (combinedResults.length === 0) {
      return res.status(200).json(combinedResults);
    }

    res.status(200).json(combinedResults);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

import { decorModel } from "../models/decorModel.js";

export const addDecor = async (req, res) => {
  try {
    const { name, description } = req.body;
    const images = req.files.images.map((image) => image.filename);
    const coverImage = req.files.coverImage[0].filename;

    const newDecor = new decorModel({
      name,
      description,
      images,
      coverImage,
    });

    await newDecor.save();

    res.status(201).json(newDecor);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// export const addDecor = async (req, res) => {
//   try {
//     const { name, description } = req.body;
//     const coverImage = req.file.filename;

//     const images = req.files.map((file) => file.filename);

//     const newDecor = new decorModel({
//       name,
//       description,
//       images,
//       coverImage,
//     });

//     await newDecor.save();

//     res.status(201).json({ message: "Decor added successfully" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "An error occurred" });
//   }
// };

// export const getAllDecors = async (req, res) => {
//   try {
//     const decors = await decorModel.find();
//     res.status(200).json(decors);
//   } catch (error) {
//     console.log(error);
//     res
//       .status(500)
//       .json({ error: "Dekor verileri alınırken bir hata oluştu." });
//   }
// };

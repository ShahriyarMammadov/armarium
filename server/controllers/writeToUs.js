import { writeToUsModel } from "../models/writeToUsModel";

// -------------------- ADD WriteToUs ---------------------

export const addWriteToUs = async (req, res) => {
  try {
    const { fullName, email, text } = req.body;

    if (!fullName || !email || !text) {
      return res.status(400).json({ message: "Xanaları Doldurun!" });
    }

    const newWriteToUs = new writeToUsModel({
      fullName,
      email,
      text,
    });

    await newWriteToUs.save();

    res.status(201).json({
      message: "Təşəkkür Edirik, Qısa Zamanda Sizinlə Əlaqə Saxlayacıq.",
      writeToUs: newWriteToUs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

export const allWriteToUs = async (req, res) => {
  try {
    const writeToUs = await writeToUsModel.find();
    res.json(writeToUs.reverse());
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

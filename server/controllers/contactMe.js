import { contactMeModal } from "../models/contactMeModel.js";

// -------------------- ADD CONTACT ME ---------------------

export const addContactMe = async (req, res) => {
  try {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
      return res.status(400).json({ message: "Əlaqə Nömrəsi Qeyd Edin!" });
    }

    const newContactMe = new contactMeModal({
      phoneNumber,
    });

    await newContactMe.save();

    res.status(201).json({
      message: "Təşəkkür Edirik, Qısa Zamanda Sizinlə Əlaqə Saxlayacıq.",
      contactme: newContactMe,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

export const allContactMe = async (req, res) => {
  try {
    const contactMe = await contactMeModal.find();
    res.json(contactMe.reverse());
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

import { contactMeModal } from "../models/contactMeModel.js";
import nodemailer from "nodemailer";

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

    const transporter = nodemailer.createTransport({
      service: "GMAIL",
      auth: {
        user: "shahriyarmammadov16@gmail.com",
        pass: "ipteqypnfwfqhcuu",
      },
    });

    const mailOptions = {
      from: "shahriyarmammadov16@gmail.com",
      to: "tu1d1f9a@code.edu.az",
      subject: "Armarium | Yeni Telefon Nömrəsi Əlavə Edildi",
      text: `${phoneNumber} nömrəsi əlavə edildi`,
    };

    await transporter.sendMail(mailOptions);

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

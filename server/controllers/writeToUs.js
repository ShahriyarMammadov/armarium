import { writeToUsModel } from "../models/writeToUsModel.js";
import nodemailer from "nodemailer";

// -------------------- ADD WriteToUs ---------------------

export const addWriteToUs = async (req, res) => {
  try {
    const { fullName, email, text, phoneNumber } = req.body;

    if (!fullName || !email || !text) {
      return res.status(400).json({ message: "Xanaları Doldurun!" });
    }

    const newWriteToUs = new writeToUsModel({
      fullName,
      email,
      text,
      phoneNumber,
    });

    await newWriteToUs.save();

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
      subject: "Sayt Üzərindən Yeni Bir Məktub Var",
      text: "Yeni bir Məktub Əlave Edildi.",
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      message: "Təşəkkür Edirik, Qısa Zamanda Sizinlə Əlaqə Saxlayacıq.",
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

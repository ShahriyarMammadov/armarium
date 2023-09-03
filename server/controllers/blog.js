import { blogModel } from "../models/blogModel.js";
import { newsModel } from "../models/newsModel.js";
import fs from "fs";
const uploadDir = "images/";

// blogun name-nin sonuna noqte sual ve s. qoymaq olmaz

// ----------------------- ADD BLOG ----------------------

export const addBlog = async (req, res) => {
  try {
    const { name, description, date } = req.body;

    if (!req.files.coverImage) {
      return res.status(415).json({
        error: "Zəhmət Olmasa Örtük Şəkli Seçin",
      });
    }

    const coverImage = req.files.coverImage[0].filename;

    const newBlog = new blogModel({
      name,
      description,
      coverImage,
      date,
    });

    await newBlog.save();

    res
      .status(201)
      .json({ message: "Yeni Bloq Uğurla Yaradıldı", newBlog: newBlog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ----------------------- ALL BLOG ----------------------
// Bütün Bloq-ların göndərilməsi

export const allBlogs = async (req, res) => {
  try {
    const blog = await blogModel.find();
    res.json(blog.reverse());
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ------------------- BLOG BY NAME ----------------------
// Adına görə bloq-n göndərilməsi

export const blogByName = async (req, res) => {
  try {
    const { blogName } = req.params;
    const blog = await blogModel.find({ name: blogName });

    if (!blog) {
      return res.status(404).json({ message: "Bloq Tapılmadı", data: blog });
    }

    res.json(blog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ------------ BLOG WITH SPECIAL DATA -------------------

export const blogWithSpecialData = async (req, res) => {
  try {
    const blogs = await blogModel.find({}, "name description coverImage");
    res.json(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ------------- EDİT NEWS WITH NEWS NAME ----------------

export const editBlogByName = async (req, res) => {
  try {
    const { name } = req.params;
    const { description, coverImage } = req.body;

    const updatedBlog = await blogModel.findOneAndUpdate(
      { name },
      { description, coverImage },
      { new: true }
    );

    res.json(updatedBlog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

// ------------- DELETE BLOG BY BLOG NAME ----------------

export const deleteBLogByName = async (req, res) => {
  try {
    const newsNameToDelete = req.params.newsName;

    const deletedNews = await newsModel.findOneAndDelete({
      name: newsNameToDelete,
    });

    if (!deletedNews) {
      return res.status(404).json({ message: "Xəbər Tapılmadı" });
    }

    const coverImagePath = uploadDir + deletedNews.coverImage;
    fs.unlink(coverImagePath, (err) => {
      if (err) {
        console.error(`Error: ${deletedNews.coverImage}`);
      } else {
        console.log(`Cover image Silindi: ${deletedNews.coverImage}`);
      }
    });

    res.json({
      message: `${newsNameToDelete} Adlı Xəbər Silindi`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

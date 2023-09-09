import { blogModel } from "../models/blogModel.js";
import { newsModel } from "../models/newsModel.js";
import fs from "fs";
import { userModel } from "../models/user.js";
const uploadDir = "images/";

// blogun name-nin sonuna noqte sual ve s. qoymaq olmaz

// ----------------------- ADD BLOG ----------------------

export const addBlog = async (req, res) => {
  try {
    const { name, description } = req.body;

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
      // date,
    });

    await newBlog.save();

    let userId = req.params.id;

    const user = await userModel.findById(userId);
    if (user) {
      const totalBlogCount = await blogModel.countDocuments();
      user.blogCount = totalBlogCount;
      await user.save();
    } else {
      return res.status(404).json({ error: "Istifadəçi Tapılmadı" });
    }

    res
      .status(201)
      .json({ message: "Yeni Bloq Uğurla Yaradıldı", newBlog: newBlog });
  } catch (error) {
    console.log("blog", error);
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
    const blogNameToDelete = req.params.id;

    console.log(blogNameToDelete);

    const deletedBlog = await blogModel.findOneAndDelete({
      name: blogNameToDelete,
    });

    if (!deletedBlog) {
      return res.status(404).json({ message: "Bloq Tapılmadı" });
    }

    const coverImagePath = uploadDir + deletedBlog.coverImage;
    fs.unlink(coverImagePath, (err) => {
      if (err) {
        console.error(`Error: ${deletedBlog.coverImage}`);
      } else {
        console.log(`Cover image Silindi: ${deletedBlog.coverImage}`);
      }
    });

    let userId = req.params.userId;

    const user = await userModel.findById(userId);
    if (user) {
      const totalBlogCount = await blogModel.countDocuments();
      user.blogCount = totalBlogCount;
      await user.save();
    } else {
      return res.status(404).json({ error: "Istifadəçi Tapılmadı" });
    }

    res.json({
      message: `${blogNameToDelete} Adlı Xəbər Silindi`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// -------------------------------------------------------

import { Router } from "express";
import {
  addBlog,
  allBlogs,
  blogByName,
  blogWithSpecialData,
  deleteBLogByName,
  editBlogByName,
} from "../controllers/blog.js";
import upload from "../config/multer.js";
const blogRouter = Router();

// ADD BLOG
blogRouter.post(
  "/addBlog/:id",
  upload.fields([{ name: "coverImage", maxCount: 1 }]),
  addBlog
);

// ALL BLOG
blogRouter.get("/getAllBlog", allBlogs);

// GET BLOG BY NAME
blogRouter.get("/blogByName/:blogName", blogByName);

// GET BLOG BY NAME WITH SPECIAL DATA
blogRouter.get("/blogByNameWithSpecialData", blogWithSpecialData);

// EDIT BLOG BY NAME
blogRouter.patch("/editBlogByName", editBlogByName);

// DELETE BLOG BY NAME
blogRouter.delete("/deleteBLogByName/:id/:userId", deleteBLogByName);

export default blogRouter;

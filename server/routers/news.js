import { Router } from "express";
import upload from "../config/multer.js";
import {
  addNews,
  allNews,
  deleteNewsByName,
  editNewsByName,
  newsByName,
  newsWithSpecialData,
} from "../controllers/news.js";
const newsRouter = Router();

// ----------------------- ADD NEWS ----------------------
newsRouter.post(
  "/addNews/:id",
  upload.fields([{ name: "coverImage", maxCount: 1 }]),
  addNews
);

// ---------------------- ALL NEWS ----------------------
newsRouter.get("/allNews", allNews);

// ------------------ GET NEWS BY NAME-------------------
newsRouter.get("/newsByName/:id", newsByName);

// ------------------- GET NEWS BY ID--------------------
newsRouter.get("/newsWithSpecialData", newsWithSpecialData);

// ----------------- EDIT NEWS BY NAME-------------------
newsRouter.patch("/editNewsByName", editNewsByName);

// ----------------- EDIT NEWS BY NAME-------------------
newsRouter.delete("/deleteNewsByName/:id/:userId", deleteNewsByName);

export default newsRouter;

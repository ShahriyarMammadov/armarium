import { Router } from "express";
import {
  addDecor,
  allDecor,
  decorByName,
  decorWithSpecialData,
  deleteDecorByName,
  editDecorByName,
} from "../controllers/decor.js";
import upload from "../config/multer.js";
const decorRouter = Router();

// ---------------------- ADD DECOR ----------------------
decorRouter.post(
  "/addDecor/:id",
  upload.fields([
    { name: "images", maxCount: 15 },
    { name: "coverImage", maxCount: 1 },
  ]),
  addDecor
);

// ---------------------- ALL DECOR ----------------------
decorRouter.get("/allDecor", allDecor);

// ------------------ GET DECOR BY NAME-------------------
decorRouter.get("/decorByName/:decorName", decorByName);

// -------------- GET DECOR WITH SPECIAL DATA-------------
decorRouter.get("/decorWithSpecialData", decorWithSpecialData);

// ----------------- EDIT DECOR BY NAME-------------------
decorRouter.patch("/editDecorByName", editDecorByName);

// ---------------- DELETE DECOR BY NAME------------------
decorRouter.delete("/deleteDecorByName/:id/:userId", deleteDecorByName);

export default decorRouter;

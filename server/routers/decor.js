import { Router } from "express";
import { addDecor } from "../controllers/decor.js";
import upload from "../config/multer.js";
const decorRouter = Router();

// add Decor

decorRouter.post(
  "/addDecor",
  upload.fields([
    { name: "images", maxCount: 10 },
    { name: "coverImage", maxCount: 1 },
  ]),
  addDecor
);

export default decorRouter;

import { Router } from "express";
import upload from "../config/multer.js";
import {
  addReference,
  allReference,
  deleteReferenceByName,
  editReferenceByName,
  referenceByName,
  referenceWithSpecialData,
} from "../controllers/references.js";
const referenceRouter = Router();

// ---------------------- ADD DECOR ----------------------
referenceRouter.post(
  "/addReference/:id",
  upload.fields([
    { name: "images", maxCount: 15 },
    { name: "coverImage", maxCount: 1 },
  ]),
  addReference
);

// ---------------------- ALL DECOR ----------------------
referenceRouter.get("/allReferences", allReference);

referenceRouter.get("/referencesWithSpecialData", referenceWithSpecialData);

referenceRouter.get("/referenceByName/:referenceName", referenceByName);

referenceRouter.delete(
  "/deleteReferanceByName/:id/:userId",
  deleteReferenceByName
);

referenceRouter.patch("/editReferanceByName/:name", editReferenceByName);

export default referenceRouter;

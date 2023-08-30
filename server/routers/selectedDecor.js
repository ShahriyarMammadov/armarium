import { Router } from "express";
import {
  addNameToSelectedDecor,
  getSelectedDecors,
  removeNameFromSelectedDecor,
  selectDecors,
} from "../controllers/selectDecors.js";
const selectedDecorRouter = Router();

// SELECT DECORS
selectedDecorRouter.post("/addSelectDecor", selectDecors);

// GET SELECT DECORS
selectedDecorRouter.get("/getSelectedDecors", getSelectedDecors);

// DELETE SELECT DECORS
selectedDecorRouter.delete(
  "/removeNameFromSelectedDecor",
  removeNameFromSelectedDecor
);

// ADD SELECT DECORS
selectedDecorRouter.post("/addNameToSelectedDecor", addNameToSelectedDecor);

export default selectedDecorRouter;

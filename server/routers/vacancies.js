import { Router } from "express";
import upload from "../config/multer.js";
import {
  addVacancy,
  allVacancy,
  deleteVacancyByName,
  editVacancyByName,
  vacancyByName,
  vacancyWithSpecialData,
} from "../controllers/vacancies.js";
const vacancyRouter = Router();

// ---------------------- ADD DECOR ----------------------
vacancyRouter.post(
  "/addVacancy/:id",
  upload.fields([{ name: "coverImage", maxCount: 1 }]),
  addVacancy
);

// ---------------------- ALL DECOR ----------------------
vacancyRouter.get("/allVacancy", allVacancy);

vacancyRouter.get("/vacancyWithSpecialData", vacancyWithSpecialData);

vacancyRouter.get("/vacancyByName/:vacancyName", vacancyByName);

vacancyRouter.delete("/deleteVacancyByName/:vacancyName/:userId", deleteVacancyByName);

vacancyRouter.patch("/editVacancyByName/:name", editVacancyByName);

export default vacancyRouter;

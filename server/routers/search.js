import { Router } from "express";
import { searchByName } from "../controllers/search.js";

const searchRouter = Router();

// SEARCH
searchRouter.post("/searchByName/:value", searchByName);

export default searchRouter;

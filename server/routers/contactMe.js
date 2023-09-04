import { Router } from "express";
import { addContactMe } from "../controllers/contactMe.js";
const contactMe = Router();

// ADD BLOG
contactMe.post("/addContactMe", addContactMe);

export default contactMe;

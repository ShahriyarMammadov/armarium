import { Router } from "express";
import { addContactMe, allContactMe } from "../controllers/contactMe.js";
const contactMe = Router();

// ADD BLOG
contactMe.post("/addContactMe", addContactMe);

contactMe.get("/getContactMe", allContactMe);

export default contactMe;

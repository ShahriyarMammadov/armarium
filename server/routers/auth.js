import { Router } from "express";
const authRouter = Router();
import { signIn, signUp } from "../controllers/auth.js";
import upload from "../config/multer.js";

// user sign-up
authRouter.post("/signIn", signIn);
authRouter.post(
  "/signUp",
  upload.fields([{ name: "profilePhoto", maxCount: 1 }]),
  signUp
);

export default authRouter;

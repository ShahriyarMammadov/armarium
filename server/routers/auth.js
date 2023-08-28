import { Router } from "express";
const authRouter = Router();
import { signIn, signUp } from "../controllers/auth.js";

// user sign-up
authRouter.post("/signIn", signIn);
authRouter.post("/signUp", signUp);

export default authRouter;

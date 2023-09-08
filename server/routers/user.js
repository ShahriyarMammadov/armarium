import { Router } from "express";
import upload from "../config/multer.js";
import {
  deleteUserById,
  editUserDataById,
  userById,
  userWithSpecialData,
} from "../controllers/user.js";
import { checkAdmin } from "../middleware/checkAdmin.js";
const userRouter = Router();

userRouter.get("/userDataById/:id", userById);

userRouter.patch(
  "/editUserData/:id",
  upload.fields([{ name: "profilePhoto", maxCount: 1 }]),
  editUserDataById
);

userRouter.get("/userWithSpecialData/:id", userWithSpecialData);

userRouter.delete("/userDelete/:id", deleteUserById);

// userRouter.patch("/editReferanceByName/:name", editReferenceByName);

export default userRouter;

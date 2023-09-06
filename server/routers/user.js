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

userRouter.get("/userDataById/:id", checkAdmin, userById);

userRouter.get("/editUserData/:id", checkAdmin, editUserDataById);

userRouter.get("/userWithSpecialData/:id", checkAdmin, userWithSpecialData);

userRouter.delete("/userDelete/:id", checkAdmin, deleteUserById);

// userRouter.patch("/editReferanceByName/:name", editReferenceByName);

export default userRouter;

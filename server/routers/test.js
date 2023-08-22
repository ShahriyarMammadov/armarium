import { Router } from "express";
import {
  addAddress,
  allAddress,
  deleteAccount,
  deleteAddress,
  editAddress,
  updateUserAccount,
} from "../controllers/account.js";
import { checkUser } from "../middleware/checkUser.js";

const accountRouter = Router();

accountRouter.patch("/updateAccount", checkUser, updateUserAccount);
accountRouter.delete("/deleteAccount", checkUser, deleteAccount);

// Address Routers
accountRouter.post("/addAddress", checkUser, addAddress);
accountRouter.get("/allAddress", checkUser, allAddress);
accountRouter.patch("/editAddress/:addressId", checkUser, editAddress);
accountRouter.delete("/deleteAddress/:addressId", checkUser, deleteAddress);

export default accountRouter;

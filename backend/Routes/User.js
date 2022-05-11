import express from "express";
import {
  contact,
  getUser,
  login,
  logout,
  myProfile,
  updateUser,
} from "../Controler/User.js";
import { isAuthenicated } from "../middleware/auth.js";
export const userRouter = express.Router();

userRouter.route("/login").post(login);
userRouter.route("/logout").get(logout);
userRouter.route("/user").get(getUser);
userRouter.route("/me").get(isAuthenicated, myProfile);
userRouter.route("/admin/update").put(isAuthenicated, updateUser);
userRouter.route("/contact").post(contact);

import express from "express";
import {
  addProject,
  addTimeLine,
  contact,
  deleteProject,
  deleteTimeline,
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

userRouter.route("/admin/timeline/add").post(isAuthenicated, addTimeLine);
userRouter.route("/admin/project/add").post(isAuthenicated, addProject);


userRouter.route("/admin/timeline/:id").delete(isAuthenicated, deleteTimeline);
userRouter.route("/admin/project/:id").delete(isAuthenicated, deleteProject);

userRouter.route("/contact").post(contact);

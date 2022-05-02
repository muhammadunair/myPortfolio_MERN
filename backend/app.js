import express from "express";
export const app = express();
import { userRouter } from "./Routes/User.js";
app.use("/api/v1", userRouter)

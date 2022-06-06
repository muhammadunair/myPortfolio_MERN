import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors"
export const app = express();

app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended:true,limit:"50mb"}));
app.use(cookieParser());
app.use(cors());


import { userRouter } from "./Routes/User.js";
app.use("/api/v1", userRouter)

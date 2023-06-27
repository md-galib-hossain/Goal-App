import express from "express";
import User from "./routers/UserRouter.js"
export const app = express();

app.use("/api/v1",User)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



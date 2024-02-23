import express from "express";

import morgan from "morgan";

import mongoose from "mongoose";

import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

import todoRoute from "./Routes/todoRoute.js";

const app = express();
const PORT = process.env.PORT || 6000;
const URI = process.env.MONGO_URI;

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({origin: "http://localhost:5173"}));

// route middleware
app.use("/api/todos", todoRoute);

// connecting to the database
mongoose.connect(URI).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});

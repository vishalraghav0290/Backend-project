// 1. Change this to just 'dotenv'
import dotenv from 'dotenv'; 
import connectDB from "./db/index.js";
import express from "express";

// 2. Now this works correctly
dotenv.config({
    path: './.env'
});

connectDB();

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
});
import express from "express";
import bodyParser from "body-parser";
const { json } = bodyParser;
import mongoose from "mongoose";
const { connect, connection } = mongoose;
import { config } from "dotenv";
import productRoutes from "./routes/productRoutes.js";

config();
const app = express();
const PORT = process.env.PORT || 3000;

connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB database");
});


app.use(json());


app.use((req, res, next) => {
    res.jsonFormatted = (data) => {
        res.setHeader("Content-Type", "application/json");
        res.json(data);
    };
    next();
});


app.use("/", productRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

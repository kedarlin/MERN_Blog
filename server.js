import express from "express";
import { json } from "body-parser";
import { connect, connection } from "mongoose";
import { config } from "dotenv";
import productRoutes from "./routes/productRoutes";

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

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Database connection will be created here
mongoose.connect("mongodb://127.0.0.1:27017/intern");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB database");
});

// Product model
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

productSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const Product = mongoose.model("Product", productSchema);

// Middleware
app.use(bodyParser.json());

// Format JSON response middleware
app.use((req, res, next) => {
    res.jsonFormatted = (data) => {
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(data, null, 2));
    };
    next();
});

// CRUD operations
app.post("/products", async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.jsonFormatted(product);
    } catch (error) {
        console.error(error);
        res.status(500).jsonFormatted({ message: "Server Error" });
    }
});

app.get("/products", async (req, res) => {
    try {
        const products = await Product.find(req.query);
        res.jsonFormatted(products);
    } catch (error) {
        console.error(error);
        res.status(500).jsonFormatted({ message: "Server Error" });
    }
});

app.get("/products/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).jsonFormatted({ message: "Product not found" });
        }
        res.jsonFormatted(product);
    } catch (error) {
        console.error(error);
        res.status(500).jsonFormatted({ message: "Server Error" });
    }
});

app.put("/products/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!product) {
            return res.status(404).jsonFormatted({ message: "Product not found" });
        }
        res.jsonFormatted(product);
    } catch (error) {
        console.error(error);
        res.status(500).jsonFormatted({ message: "Server Error" });
    }
});

app.delete("/products/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).jsonFormatted({ message: "Product not found" });
        }
        res.jsonFormatted({ message: "Product deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).jsonFormatted({ message: "Server Error" });
    }
});

app.delete("/products", async (req, res) => {
    try {
        const result = await Product.deleteMany();
        res.jsonFormatted({ message: `${result.deletedCount} products deleted successfully` });
    } catch (error) {
        console.error(error);
        res.status(500).jsonFormatted({ message: "Server Error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

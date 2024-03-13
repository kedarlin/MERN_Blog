import Product from "../models/productModel.js";

export async function createProduct(req, res) {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

export async function getProducts(req, res) {
    console.log("calling methosds");
    try {
        const products = await Product.find(req.query);
        res.status(200).json(products);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

export async function getProductById(req, res) {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

export async function updateProduct(req, res) {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

export async function deleteProduct(req, res) {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

export async function deleteAllProducts(req, res) {
    try {
        const result = await Product.deleteMany();
        res.status(200).json({ message: `${result.deletedCount} products deleted successfully` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

export async function findProductsByCondition(req, res) {
    try {
        const products = await Product.find(req.body);
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}
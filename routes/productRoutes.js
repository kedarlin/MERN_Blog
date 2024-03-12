import { Router } from "express";
const router = Router();
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct, deleteAllProducts, findProductsByCondition } from "../controllers/productController.js";

// We are Creating a new product
router.post("/products", createProduct);

// here we Retrieve all products
router.get("/products", getProducts);

// only Retrieve a single product
router.get("/products/:id", getProductById);

// Updating a product
router.put("/products/:id", updateProduct);

// Deleting a single product
router.delete("/products/:id", deleteProduct);

// Deleting all products
router.delete("/products", deleteAllProducts);

// Find products by filters
router.post("/products/search", findProductsByCondition);

export default router;

// Router/productRouter.js
import express from "express";
import {
  PostProducts,
  getProducts,
  getIdProducts,
  putProducts,
  deleteProduct,
} from "../controller/productController.js";

const router = express.Router();

// Seed dummyjson.com products ⇢ /products/import
router.post("/import", PostProducts);

// Get all products ⇢ /products
router.get("/", getProducts);

// Get single product ⇢ /products/:id
router.get("/:id", getIdProducts);

// Update product by ID ⇢ /products/:id
router.put("/:id", putProducts);

// Delete product by ID ⇢ /products/:id
router.delete("/:id", deleteProduct);

export default router;

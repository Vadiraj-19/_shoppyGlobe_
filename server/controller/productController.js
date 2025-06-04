// controller/productController.js
import ProductDetail from "../model/productModel.js";
import axios from "axios";

// (1) Import products from dummyjson.com into our MongoDB
export const PostProducts = async (req, res) => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    const data = response.data.products;

    const products = data.map((item) => ({
      title: item.title,
      img: item.thumbnail,
      rating: item.rating,
      price: item.price,
      shipinfo: item.shipping?.information || "Ships soon",
      discount: item.discountPercentage,
    }));

    // InsertMany expects plain objects, not Mongoose documents
    await ProductDetail.insertMany(products);
    res.status(201).json({ message: "Products imported successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Import failed", details: err.message });
  }
};

// (2) Get all products
export const getProducts = async (req, res) => {
  try {
    const getresults = await ProductDetail.find({});
    res.status(200).json(getresults);
  } catch (err) {
    res.status(500).json({ error: "Get failed", details: err.message });
  }
};

// (3) Get a single product by ID
export const getIdProducts = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await ProductDetail.findById(id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: "Get by ID failed", details: err.message });
  }
};

// (4) Update a product by ID
export const putProducts = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const updatedProduct = await ProductDetail.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    if (!updatedProduct) return res.status(404).json({ error: "Product not found to Update" });
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ error: "Put by ID failed", details: err.message });
  }
};

// (5) Delete a product by ID
export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await ProductDetail.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Product not found to delete" });
    res.status(200).json({ message: "Product deleted", deleted });
  } catch (err) {
    res.status(500).json({ error: "Delete by ID failed", details: err.message });
  }
};

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./Router/user.js";
import productRoutes from "./Router/productRouter.js";
import cartRoutes from "./Router/cartRouter.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/Details")
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(8080, () => {
      console.log("🚀 Server running at http://localhost:8080");
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

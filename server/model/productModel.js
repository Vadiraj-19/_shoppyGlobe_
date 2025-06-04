// model/productModel.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  rating: { type: Number, required: true },
  price: { type: Number, required: true },
  shipinfo: { type: String, required: true },
  discount: { type: Number, required: true },
});

const ProductDetail = mongoose.model("ProductDetail", productSchema);
export default ProductDetail;

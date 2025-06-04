// model/cartModel.js
import mongoose from "mongoose";
import "./productModel.js"; // Ensures "ProductDetail" is registered

const cartSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductDetail",
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;

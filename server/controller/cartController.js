// controller/cartController.js
import Cart from "../model/cartModel.js";
import "../model/productModel.js";

// (1) Add to Cart (or update quantity if already exists)
export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    let cartItem = await Cart.findOne({ productId });
    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
      return res.status(200).json({ message: "Cart updated", cart: cartItem });
    } else {
      const newItem = new Cart({ productId, quantity });
      await newItem.save();
      return res.status(201).json({ message: "Item added", cart: newItem });
    }
  } catch (err) {
    res.status(500).json({ error: "Add failed", details: err.message });
  }
};

// (2) Get entire cart (with populated product details)
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.find().populate("productId");
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ error: "Get failed", details: err.message });
  }
};

// (3) Delete a single item from cart
export const deleteCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Cart.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Item not found" });
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed", details: err.message });
  }
};

// (4) Update quantity of a single cart item
// controller/cartController.js
export const updateCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const updated = await Cart.findByIdAndUpdate(id, { quantity }, { new: true }).populate('productId');
    
    if (!updated) return res.status(404).json({ error: "Item not found" });
    res.status(200).json(updated);  // Make sure the full updated object is returned
  } catch (err) {
    res.status(500).json({ error: "Update failed", details: err.message });
  }
};

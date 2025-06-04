// src/components/CartItem.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { productId, quantity, _id } = item;
  const priceInINR = (productId.price * 83).toFixed(2);

  const handleRemove = () => {
    dispatch(removeCartItem(_id));
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    if (newQuantity > 0) {
      dispatch(updateCartItem({ id: _id, quantity: newQuantity }));
    }
  };

  const handleDecrease = () => {
    const newQuantity = quantity - 1;
    if (newQuantity > 0) {
      dispatch(updateCartItem({ id: _id, quantity: newQuantity }));
    }
  };

  return (
    <div className="flex items-center justify-between border p-4 rounded-md shadow-sm bg-white">
      <div className="flex items-center gap-4">
        <img
          src={productId.img}
          alt={productId.title}
          className="w-24 h-24 object-contain"
        />
        <div>
          <h2 className="text-lg font-semibold">{productId.title}</h2>
          <p className="text-sm text-gray-600">Quantity: {quantity}</p>
          <p className="text-sm text-gray-800">Price: ₹{priceInINR}</p>
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={handleDecrease}
              className="bg-gray-300 px-2 rounded"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={handleIncrease}
              className="bg-gray-300 px-2 rounded"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={handleRemove}
        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;

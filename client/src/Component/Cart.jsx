// src/components/Cart.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems, selectCartItems } from "../redux/cartSlice";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  const getTotalAmount = () => {
    return cartItems
      .reduce((total, item) => {
        // item.productId.price is from populated product
        const priceInINR = item.productId.price * 83; 
        return total + priceInINR * item.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
          </div>
          <div className="text-right text-xl font-semibold mt-4">
            Total: ₹{getTotalAmount()}
          </div>
          <Link to="/checkout">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4">
              Proceed to Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;

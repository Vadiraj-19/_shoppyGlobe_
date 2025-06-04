// src/components/Checkout.jsx
import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const getTotal = () =>
    cartItems
      .reduce((total, item) => total + item.productId.price * 83 * item.quantity, 0)
      .toFixed(2);

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    navigate("/");
  };

  return (
    <div className="p-6 md:flex gap-8">
      {/* Shipping Info */}
      <div className="md:w-2/3 bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Full Name" className="border p-3 rounded" required />
          <input type="email" placeholder="Email Address" className="border p-3 rounded" required />
          <input type="text" placeholder="Address" className="border p-3 rounded col-span-2" required />
          <input type="text" placeholder="City" className="border p-3 rounded" required />
          <input type="text" placeholder="Postal Code" className="border p-3 rounded" required />
          <input type="text" placeholder="Phone Number" className="border p-3 rounded col-span-2" required />
        </form>
      </div>

      {/* Order Summary */}
      <div className="md:w-1/3 bg-white shadow-md p-6 rounded-lg mt-6 md:mt-0">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        {cartItems.map((item) => (
          <div key={item._id} className="flex justify-between mb-2">
            <p className="text-gray-700">
              {item.productId.title.slice(0, 25)} x {item.quantity}
            </p>
            <p className="font-medium">₹{(item.productId.price * 83 * item.quantity).toFixed(2)}</p>
          </div>
        ))}

        <hr className="my-4" />

        <div className="flex justify-between text-lg font-bold mb-4">
          <p>Total</p>
          <p>₹{getTotal()}</p>
        </div>

        <button
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;

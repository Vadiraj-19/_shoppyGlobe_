import React from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ title, img, _id, rating, price, shipinfo, discount }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const priceInINR = (parseFloat(price) * 83).toFixed(2);
  const discountPer = Math.floor(discount);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return "⭐".repeat(fullStars) + "☆".repeat(emptyStars);
  };

  // When user clicks “Add to Cart”, dispatch with payload { productId, quantity: 1 }
  const handleAddToCart = () => {
    dispatch(addCartItem({ productId: _id, quantity: 1 }))
      .then(() => {
        // Navigate to the Cart page after adding the item
        navigate("/cart");
      })
      .catch((error) => {
        console.error("Failed to add to cart:", error);
      });
  };

  const originalPrice = () => {
    return (priceInINR / (1 - discount / 100)).toFixed(2);
  };

  return (
    <div
      id={_id}
      className="w-72 border rounded-lg shadow-lg flex flex-col p-4 bg-white"
      style={{ minHeight: "460px" }}
    >
      <div className="flex-shrink-0 mb-3 h-48 flex justify-center items-center">
        <img src={img} alt={title} className="object-contain max-h-full max-w-full" loading="lazy" />
      </div>

      <h1 className="text-lg font-semibold mb-1 line-clamp-2" style={{ minHeight: "3rem" }}>
        {title}
      </h1>

      <div className="text-yellow-400 mb-2">{renderStars(rating)}</div>

      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-2xl font-bold text-gray-900">₹{priceInINR}</span>
        <span className="text-sm text-gray-500 line-through">₹{originalPrice()}</span>
      </div>

      <h2 className="text-green-600 font-medium mb-2">
        You save <span className="font-bold">{discountPer}%</span>
      </h2>

      <p
        className="text-center text-sm text-gray-600 mb-6 flex-grow"
        style={{ minHeight: "2.5rem" }}
      >
        {shipinfo}
      </p>

      <button
        className="bg-red-600 text-white w-full py-2 rounded-lg hover:bg-red-700 transition"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;

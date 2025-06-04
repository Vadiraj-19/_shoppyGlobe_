import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartItem } from "../redux/cartSlice"; // Assuming this is the action for adding to cart
import { useNavigate } from "react-router-dom"; // To navigate to the Cart page

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:8080/products/${id}`);
      if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
      const data = await res.json();
      setProduct(data);
      setError(null);
    } catch (err) {
      setError(err.message || "Something went wrong");
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchProduct();
  }, [id]);

  // Handle adding product to cart
  const handleAddToCart = () => {
    dispatch(addCartItem({ productId: id, quantity: 1 }))
      .then(() => {
        // Navigate to the Cart page after adding the item
        navigate("/cart");
      })
      .catch((error) => {
        console.error("Failed to add to cart:", error);
      });
  };

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;
  if (!product) return <p>No product found.</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 font-sans text-gray-800">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-80 object-contain rounded-xl shadow-md"
          />
        </div>

        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-green-700">
              ₹{(product.price * 83.2).toFixed(2)}{" "}
              <span className="text-sm text-gray-500 ml-1">(incl. taxes)</span>
            </p>
            <p className="text-sm text-gray-500">
              Original:{" "}
              <span className="line-through">
                ₹{((product.price * 83.2) / (1 - product.discount / 100)).toFixed(2)}
              </span>{" "}
              | Discount: {product.discount}% off
            </p>
            <p className="text-yellow-600 font-medium">⭐ {product.rating} rating</p>
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <p>
              <span className="font-medium text-gray-800">Shipping:</span> {product.shipinfo}
            </p>
          </div>
          {/* Add to Cart Button */}
          <button
            className="bg-red-600 text-white w-full py-2 rounded-lg hover:bg-red-700 transition"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

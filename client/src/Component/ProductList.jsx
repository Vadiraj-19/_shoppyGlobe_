// src/components/ProductList.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setProduct, setSearch } from "../redux/productSlice";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const searchText = useSelector((state) => state.products.searchText);

  // Custom hook to fetch products from /products
  const { data, loading, error } = useFetchProducts("http://localhost:8080/products");

  useEffect(() => {
    if (data) {
      dispatch(setProduct(data)); // data is an array of products
    }
  }, [data, dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading products...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 text-lg">Error: {error.message || "Failed to load"}</p>
      </div>
    );
  }

  // Filter after loading
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="font-poppins px-4 py-6">
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchText}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="border border-gray-300 rounded px-4 py-2 w-72"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-h-[75vh] overflow-y-auto">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link to={`/product/${product._id}`} key={product._id}>
              <ProductItem
                title={product.title}
                img={product.img}
                _id={product._id}
                rating={product.rating}
                price={product.price}
                shipinfo={product.shipinfo}
                discount={product.discount}
              />
            </Link>
          ))
        ) : (
          <p className="text-gray-600 text-lg mt-10">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;

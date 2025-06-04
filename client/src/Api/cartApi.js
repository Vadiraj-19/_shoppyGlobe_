// src/api/cartAPI.js
import axios from "axios";

const BASE_URL = "http://localhost:8080"; // ← your Express server

export const fetchCart = async () => {
  const res = await axios.get(`${BASE_URL}/cart`);
  return res.data; // array of cart items
};

export const addToCartAPI = async ({ productId, quantity }) => {
  const res = await axios.post(`${BASE_URL}/cart`, { productId, quantity });
  return res.data.cart; // returns the single cart item object
};

export const deleteCartAPI = async (id) => {
  await axios.delete(`${BASE_URL}/cart/${id}`);
  return id; // return id so Redux can filter it out
};

export const updateCartAPI = async ({ id, quantity }) => {
  const res = await axios.put(`${BASE_URL}/cart/${id}`, { quantity });
  return res.data; // returns the updated cart item object
};

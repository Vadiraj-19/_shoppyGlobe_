// src/redux/cartSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchCart,
  addToCartAPI,
  deleteCartAPI,
  updateCartAPI,
} from "../Api/cartApi";

// (Async thunk) Fetch entire cart
export const getCartItems = createAsyncThunk("cart/get", async () => {
  return await fetchCart();
});

// (Async thunk) Add a product to cart with quantity=1
export const addCartItem = createAsyncThunk(
  "cart/add",
  async ({ productId, quantity = 1 }) => {
    return await addToCartAPI({ productId, quantity });
  }
);

// (Async thunk) Remove a cart item by cartItemId
export const removeCartItem = createAsyncThunk("cart/remove", async (id) => {
  return await deleteCartAPI(id);
});

// (Async thunk) Update quantity
export const updateCartItem = createAsyncThunk(
  "cart/update",
  async ({ id, quantity }) => {
    return await updateCartAPI({ id, quantity });
  }
);

const initialState = {
  items: [], // each item is { _id, productId: {...}, quantity }
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET Cart
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      // ADD to Cart
      .addCase(addCartItem.fulfilled, (state, action) => {
        const newItem = action.payload; // this is a single cart item
        const existing = state.items.find(
          (i) => i.productId._id === newItem.productId._id
        );
        if (existing) {
          existing.quantity = newItem.quantity;
        } else {
          state.items.push(newItem);
        }
      })
      // REMOVE from Cart
      .addCase(removeCartItem.fulfilled, (state, action) => {
        const removedId = action.payload;
        state.items = state.items.filter((i) => i._id !== removedId);
      })
      // UPDATE quantity
      // src/redux/cartSlice.js
      .addCase(updateCartItem.fulfilled, (state, action) => {
        const updatedItem = action.payload; // The updated item received from API
        const idx = state.items.findIndex((i) => i._id === updatedItem._id);
        if (idx !== -1) {
          state.items[idx] = updatedItem; // Update the item in state with the new quantity
        }
      });
  },
});

export const selectCartItems = (state) => state.cart.items;
export default cartSlice.reducer;

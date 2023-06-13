import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );

      if (findProduct) {
        findProduct.quantity++;
        findProduct.price += action.payload.price;
      } else {
        const product = { ...action.payload, quantity: 1 };
        state.push(product);
      }
    },
    deleteProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
    clearAll: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, deleteProduct, clearAll } = cartSlice.actions;

export default cartSlice.reducer;

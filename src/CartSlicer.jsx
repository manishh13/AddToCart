import { createSlice } from "@reduxjs/toolkit";

const cartSlicer = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeToCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export default cartSlicer.reducer;
export const { addToCart, removeToCart } = cartSlicer.actions;

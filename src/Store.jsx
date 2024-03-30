import { configureStore } from "@reduxjs/toolkit";
import cartSlicer from "./CartSlicer";
const store = configureStore({
  reducer: {
    storeReducer: cartSlicer,
  },
});
export default store;

import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      const currentItemId = action.payload;
      const index = state.cart.findIndex((item) => item.id === currentItemId);
      if (index === -1) {
        state.cart.push({ ...currentItemId, quantity: 1 });
      } else {
        state.cart[index].quantity = state.cart[index].quantity + 1;
      }
    },
    deleteFromCart: (state, action) => {
      console.log(action.payload);
      const currentItemId = action.payload;
      const index = state.cart.findIndex((item) => item.id === currentItemId);
      if (index === -1) {
        return;
      } else if (state.cart[index].quantity === 1) {
        state.cart.splice(index, 1);
      } else {
        state.cart[index].quantity = state.cart[index].quantity - 1;
      }
    },
    removeItem: (state, action) => {},
  },
});
export default cartSlice.reducer;
export const { addToCart, deleteFromCart, removeItem } = cartSlice.actions;

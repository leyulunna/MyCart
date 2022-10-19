import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { quantity: 0, items: [], change: false };

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    fetchCart(state, action) {
      state.quantity = action.payload.quantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      state.change = true;
      const newItem = action.payload;
      const existItem = state.items.find(item => item.id === newItem.id);
      state.quantity++;
      if (!existItem) {
        state.items = [...state.items, {
          id: newItem.id,
          name: newItem.title,
          quantity: 1,
          totalPrice: newItem.price,
          price: newItem.price
        }];
      } else {
        existItem.quantity++;
        existItem.totalPrice = existItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      state.change = true;
      const id = action.payload;
      const existItem = state.items.find(item => item.id === id);
      state.quantity--;
      if (existItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existItem.quantity--;
        existItem.totalPrice = existItem.totalPrice - existItem.price;
      }
    }
  }
});

export const cartAction = cartSlice.actions;

export default cartSlice;
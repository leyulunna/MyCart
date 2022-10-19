import { createSlice } from "@reduxjs/toolkit";

const initialUIState = { showCart: false, notification: null };

const uiSlice = createSlice({
  name: 'cart',
  initialState: initialUIState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      }
    }
  }
});

export const uiAction = uiSlice.actions;

export default uiSlice;
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.name == action.payload.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({...action.payload, amount: parseFloat(action.payload.cost.replace(/\D/, '')), quantity: 1});
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload.name)
    },
    updateQuantity: (state, action) => {
      const existingItem = state.items.find(item => item.name == action.payload.name);
      if (existingItem) {
        if (action.payload.quantity <= 0) {
          state.items = state.items.filter(item => item.name !== action.payload.name)
        } else {
          existingItem.quantity = action.payload.quantity;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

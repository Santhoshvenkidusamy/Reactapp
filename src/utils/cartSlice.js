import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalItemsCount: 0,
    },
    reducers:{
        addItem: (state, action) => {
            const existingItem = state.items.find(
              (item) => item.id === action.payload.id
            );
            if (existingItem) {
              existingItem.quantity++;
              state.totalItemsCount = state.totalItemsCount + 1;
            } else {
              state.items.push({ ...action.payload, quantity: 1 });
              state.totalItemsCount = state.totalItemsCount + 1;
            }
          },
        removeItem: (state,action)=>{
          const existingItem = state.items.find(
            (item) => item.id === action.payload
          );
          if (existingItem) {
            if (existingItem.quantity === 1) {
              state.items = state.items.filter(
                (item) => item.id !== action.payload
              );
              state.totalItemsCount = 0;
            } else {
              existingItem.quantity--;
              state.totalItemsCount = state.totalItemsCount - 1;
            }
          }
        },
        clearCart: (state,action)=>{
            state.items=[];
        }

    }
});
export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
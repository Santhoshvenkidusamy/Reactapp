import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
      addItem: (state, action) => {
        
          state.items.push(action.payload);
       
      },
      removeItem: (state) => {
        state.items.pop();
      },
      clearCart: (state) => {
        state.items.length = 0;
      },
      increaseQuantity: (state, action) => {
        const item = state.items.find(
          (element) => element.card.info.id === action.payload
        );
        item.inStock = item.inStock + 1;
      },
      decreaseQuantity: (state, action) => {
        const item = state.items.find(
          (element) => element.card.info.id === action.payload
        );
        item.inStock = item.inStock - 1;
        if (item.inStock === 0) {
          const index = state.items.findIndex((el) => el.inStock === 0);
          state.items.splice(index, 1);
        }
      },
    },
});
export const {addItem, removeItem, clearCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;
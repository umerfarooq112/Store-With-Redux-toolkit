import { createSlice } from "@reduxjs/toolkit";
import { Items } from "../constants/Items";

const initialCart = {
  items: Items,
  totalItems: [],
  selectedItems: [],
  CartItemsQuantity: 0,
};

const cartsItems = createSlice({
  name: "cart",
  initialState: initialCart,

  reducers: {
    addToCart(state, action) {
      const a_item = action.payload;
      const existingItem = state.selectedItems.find((el) => el.id == a_item.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice +  a_item.price;
      } else {
        state.selectedItems.push({
          ...a_item,
          totalPrice: a_item.price,
          quantity: 1,
        });
        state.CartItemsQuantity++
      }
    },
    removeFromCart(state,action)
    {
      const a_item = action.payload
      const existingItem = state.selectedItems.find((el) => el.id == a_item.id);
      if(existingItem.quantity > 1)
      {
        existingItem.quantity--;
        existingItem.totalPrice -= a_item.price
      }
      else 
      {
        state.selectedItems = state.selectedItems.filter(el=>el.id!==a_item.id)
        state.CartItemsQuantity--
      }
    }
  },
});

export default cartsItems.reducer;

export const cartActions = cartsItems.actions;

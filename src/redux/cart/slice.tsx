import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from 'react';
import { RootState } from '../store';
import { Icart } from './types';

const initialState: Icart = {
  itemsCart: [],
  totalPrice: 0,
  quantityTovars: 0,
};
export const totalQuantity = (items: any) =>
  items.reduce((acc: number, card: any) => {
    return acc + card.count;
  }, 0);

export const calcTotalPrice = (items: any) => {
  if (items.length > 0) {
    return items.reduce((acc: number, obj: any) => {
      return obj.price * obj.count + acc;
    }, 0);
  }
  return 0;
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setTotalPrice: (state) => {
      // state.itemsCart = action.payload;
      if (state.itemsCart) {
        state.totalPrice = calcTotalPrice(state.itemsCart);
      }
    },
    setquantityTovars: (state) => {
      // state.itemsCart = action.payload;
      if (state.itemsCart) {
        state.quantityTovars = totalQuantity(state.itemsCart);
      }
    },
    addTovarToCart: (state, action) => {
      const foundItem = state.itemsCart.find((item) => item.id === action.payload.id);
      if (foundItem) {
        foundItem.count++;
      } else {
        state.itemsCart.push(action.payload);
      }
    },
    minusTovarToCart: (state, action) => {
      const foundItem = state.itemsCart.find((item) => item.id === action.payload);
      if (foundItem) {
        if (foundItem.count > 1) {
          foundItem.count--;
        } else {
          state.itemsCart = state.itemsCart.filter((item) => item.id !== action.payload);
        }
      }
    },
    removeTovarToCart: (state, action) => {
      state.itemsCart = state.itemsCart.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.itemsCart.length = 0;
      state.totalPrice = 0;
      state.quantityTovars = 0;
    },
  },
});

export const {
  setTotalPrice,
  addTovarToCart,
  minusTovarToCart,
  removeTovarToCart,
  setquantityTovars,
  clearCart,
} = CartSlice.actions;

export default CartSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from 'react';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getFromLS } from '../../utils/getFromLS';
import { totalQuantity } from '../../utils/totalQuantity';
import { RootState } from '../store';
import { Icart } from './types';

const [itemsCart, totalPrice, quantityTovars] = getFromLS('cart');

const initialState: Icart = {
  itemsCart,
  totalPrice,
  quantityTovars,
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setTovarsFromLS: (state, action) => {
      state.itemsCart = action.payload;
    },
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
  setTovarsFromLS,
  setTotalPrice,
  addTovarToCart,
  minusTovarToCart,
  removeTovarToCart,
  setquantityTovars,
  clearCart,
} = CartSlice.actions;

export default CartSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { remove } from 'lodash';
import React from 'react';
import { getFromLS } from '../../utils/getFromLS';
import { RootState } from '../store';

const [itemsFavor, totalPrice] = getFromLS('favorites');
const initialState: any = {
  itemsFavor,
  totalPrice,
};
export const totalQuantity = (items: any) =>
  items.reduce((acc: number, card: any) => {
    return acc + card.count;
  }, 0);

export const FavoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addTovarToFavor: (state, action) => {
      const foundItem = state.itemsFavor.find((item: any) => item.id === action.payload.id);
      if (foundItem) {
        return;
      } else {
        state.itemsFavor.push(action.payload);
      }
    },
    removeFavor: (state, action) => {
      state.itemsFavor = state.itemsFavor.filter((item: any) => item.id !== action.payload);
    },
  },
});

export const { addTovarToFavor, removeFavor } = FavoritesSlice.actions;

export default FavoritesSlice.reducer;

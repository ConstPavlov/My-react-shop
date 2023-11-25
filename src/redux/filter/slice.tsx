import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from 'react';
import { RootState } from '../store';
import { brandNamesType, IcategorySlice, IsetAllFilters, sortNamesType } from './types';

const initialState: IcategorySlice = {
  category: 'Все',
  checkedCurrent: false,
  filterStock: [],
  activeSort: { name: 'Популярные(ASC)', sort: 'rating' },
  query: '',
};

export const filterSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setCheckedCurrent: (state, action: PayloadAction<boolean>) => {
      state.checkedCurrent = action.payload;
    },
    setFilterStock: (state, action: PayloadAction<brandNamesType[]>) => {
      state.filterStock = action.payload;
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload.toString();
    },
    setActiveSort: (state, action: PayloadAction<sortNamesType>) => {
      state.activeSort = action.payload;
    },
    setAllFilters: (state, action: PayloadAction<IsetAllFilters>) => {
      state.activeSort = action.payload.activeSort;
      state.query = action.payload.query;
      state.category = action.payload.category;
    },
  },
});

export const {
  setCategory,
  setCheckedCurrent,
  setFilterStock,
  setQuery,
  setActiveSort,
  setAllFilters,
} = filterSlice.actions;

export default filterSlice.reducer;

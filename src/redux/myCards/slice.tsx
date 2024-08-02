import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from 'react';
import { RootState } from '../store';
import { fetchMyCards } from './asyncAction';
import { IMyCard, Status } from './types';

const initialState: IMyCard = {
  cards: [],
  status: Status.LOADING,
};

export const MyCardsSlice = createSlice({
  name: 'myCards',
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchMyCards.fulfilled, (state, action) => {
      state.cards = action.payload;
      state.status = Status.SUCCESS;
      console.log(action, 'SUCCESS');
    });
    builder.addCase(fetchMyCards.pending, (state, action) => {
      state.cards = [];
      state.status = Status.LOADING;
      console.log(action, 'LOADING');
    });
    builder.addCase(fetchMyCards.rejected, (state, action) => {
      state.cards = [];
      state.status = Status.ERROR;
    });
  },
});

export const { setCards } = MyCardsSlice.actions;

export default MyCardsSlice.reducer;

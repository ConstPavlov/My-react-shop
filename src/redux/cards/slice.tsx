import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from 'react';
import { RootState } from '../store';
import { fetchData } from './asyncAction';
import { Icard, Status } from './types';

const initialState: Icard = {
  cards: [],
  status: Status.LOADING,
};

export const Tovarsslice = createSlice({
  name: 'tovars',
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.cards = action.payload
      state.status = Status.SUCCESS
      console.log(action, 'SUCCESS')
    })
    builder.addCase(fetchData.pending, (state, action) => {
      state.cards = []
      state.status = Status.LOADING
      console.log(action, 'LOADING')
    })
    builder.addCase(fetchData.rejected, (state, action) => {
      state.cards = []
      state.status = Status.ERROR

    })
  }
});

export const {setCards} = Tovarsslice.actions;

export default Tovarsslice.reducer;

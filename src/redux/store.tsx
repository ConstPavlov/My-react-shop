import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import filter from './filter/slice';
import cards from './cards/slice';
import myCards from './myCards/slice';
import cart from './cart/slice';
import auth from './auth/slice';
import favorites from './favorites/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter,
    cards,
    cart,
    favorites,
    auth,
    myCards,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

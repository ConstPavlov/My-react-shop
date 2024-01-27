import { createSlice } from '@reduxjs/toolkit';
import React from 'react';
import { Status } from '../cards/types';
import { fetchAuthLogin } from './asyncAction';
import { IAuth } from './types';

const initialState: IAuth = {
  user: null,
  status: Status.LOADING,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAuthLogin.pending, (state, acton) => {
      state.user = null;
      state.status = Status.LOADING;
    });
    builder.addCase(fetchAuthLogin.fulfilled, (state, acton) => {
      state.user = acton.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchAuthLogin.rejected, (state, acton) => {
      state.user = null;
      state.status = Status.ERROR;
    });
  },
});

export default AuthSlice.reducer;

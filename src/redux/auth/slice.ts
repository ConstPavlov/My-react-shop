import { createSlice } from '@reduxjs/toolkit';
import React from 'react';
import { Status } from '../cards/types';
import { fetchAuthLogin, fetchAuthCheck } from './asyncAction';
import { IAuth } from './types';

const initialState: IAuth = {
  user: null,
  userInfo: null,
  status: Status.LOADING,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserInfo(state, acton) {
      state.userInfo = acton.payload;
    },
    logOut(state) {
      state.user = null;
    },
  },
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

    builder.addCase(fetchAuthCheck.pending, (state, acton) => {
      state.user = null;
      state.status = Status.LOADING;
    });
    builder.addCase(fetchAuthCheck.fulfilled, (state, acton) => {
      state.user = acton.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchAuthCheck.rejected, (state, acton) => {
      state.user = null;
      state.status = Status.ERROR;
    });
  },
});

export const { setUserInfo, logOut } = AuthSlice.actions;

export default AuthSlice.reducer;

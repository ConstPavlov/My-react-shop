import { AsyncThunkAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios/axios';
import { IFormInputs } from './types';

export const fetchAuthLogin = createAsyncThunk<any, IFormInputs>(
  'auth/fetchAuthLogin',
  async (params: any) => {
    const { data } = await axios.post('/user/login', params);
    return data;
  },
);

export const fetchAuthCheck = createAsyncThunk('auth/fetchAuthCheck', async () => {
  const { data } = await axios.get('/user/auth');
  return data;
});

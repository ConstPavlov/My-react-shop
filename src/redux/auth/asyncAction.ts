import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Iregister } from './types';

export const fetchAuthLogin = createAsyncThunk<Iregister>('auth/fetchAuthLogin', async (params) => {
  const { data } = await axios.post('http://localhost:5000/api/user/login', params);
  return data;
});

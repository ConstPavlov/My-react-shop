import { jwtDecode } from 'jwt-decode';
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
export const fetchAuthRegistration = createAsyncThunk<any, IFormInputs>(
  'auth/fetchAuthRegistration',
  async (params: any) => {
    const { data } = await axios.post('/user/registration', params);
    return data;
  },
);

export const fetchAuthCheck = createAsyncThunk(
  'auth/fetchAuthCheck',
  async () => {
    const { data } = await axios.get('/user/auth');
    return data;
  },
);

// export const userDataAsync = createAsyncThunk(
//   'auth/fetchAuthCheck',
//   async () => {
//     const { data } = await axios.get('/user/auth');
//     const decode = jwtDecode(data);
//     console.log(decode);
//     return decode;
//   },
// );

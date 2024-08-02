import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios/axios';
import { IMyParams, TypeMyCard, TypeTypes } from './types';

export const fetchMyCards = createAsyncThunk<TypeMyCard[], IMyParams>(
  'myCards/fetchMyCards',
  async parametrs => {
    const { mainSection } = parametrs;
    const response = await axios.get('/device');
    console.log(response);
    const result = response.data.rows.filter(
      (obj: TypeMyCard) => obj.subsection === mainSection.sub,
    );

    return result;
  },
);
// export const getTypes = createAsyncThunk<void, TypeTypes>(
//   'myCards/getTypes',
//   async () => {
//     const { data } = axios.get('/types');
//     return data;
//   },
// );

export const getTypes = async () => {
  const response = await axios.get('/type');
  return response.data;
};
export const getBrands = async () => {
  const response = await axios.get('/brand');
  return response.data;
};

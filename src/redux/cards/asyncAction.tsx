import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IAllParamCard, IfetchDataParametrs } from './types';

export const fetchData = createAsyncThunk<IAllParamCard[], IfetchDataParametrs>(
  'cards/fetchData',
  async parametrs => {
    const { sortByForLnk, orderForLink, brand, mainSection } = parametrs;
    const response = await axios.get(
      `https://64bcef922320b36433c74332.mockapi.io/items?sortBy=${sortByForLnk}&order=${orderForLink}${brand}`,
    );
    const result = response.data.filter(
      (obj: any) => obj.subsection === mainSection.sub,
    );
    console.log(result);

    return result;
  },
);

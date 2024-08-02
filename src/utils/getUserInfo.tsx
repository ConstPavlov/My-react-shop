import { jwtDecode, JwtPayload } from 'jwt-decode';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from '../axios/axios';
import { RootState, useAppDispatch } from '../redux/store';
import { TypeUser } from './types';

export const getUserInfo = (): TypeUser => {
  const [info, setInfo] = useState<any>('');
  const { user } = useSelector((state: RootState) => state.auth);
  console.log(info);

  React.useEffect(() => {
    if (user) {
      const decode = jwtDecode(user);
      setInfo(decode);
    } else {
      setInfo('');
    }
  }, [user]);

  return info;
};

import { jwtDecode } from 'jwt-decode';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MenuMain from '../../features/menu-main/MenuMain';
import { fetchMyCards } from '../../redux/myCards/asyncAction';
import { RootState, useAppDispatch } from '../../redux/store';
import { getUserInfo } from '../../utils/getUserInfo';

const Home: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const info = getUserInfo();

  const BASE_URL = process.env.REACT_APP_API_URL;
  console.log(BASE_URL);
  return (
    <div className="container">
      <div className="home">
        <h1>Home Page</h1>
        <div className="home__container">{<MenuMain />}</div>
      </div>
    </div>
  );
};

export default Home;

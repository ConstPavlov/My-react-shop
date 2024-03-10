import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';

import NavigateLinks from '../NavigateLinks';
import CustomInput from '../UI/inputs/CustomInput';
import Menu from '../UI/menu/Menu';
import Skeleton from './Skeleton';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Header: React.FC = () => {
  const { status } = useSelector((state: RootState) => state.auth);
  return (
    <div className="header__container">
      <Menu />
      <Link to="/">
        <div className="header__logo">
          <img className="header__img" src={logo} alt="logo" />
        </div>
      </Link>
      <CustomInput placeholder="поиск..." />
      {status === 'loading' ? <Skeleton /> : <NavigateLinks />}
    </div>
  );
};

export default Header;

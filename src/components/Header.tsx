import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';

import HeaderLinks from './NavigateLinks';
import CustomInput from './UI/inputs/CustomInput';
import Menu from './UI/menu/Menu';

const Header: React.FC = () => {
  return (
    <div className="header__container">
      <Menu />
      <Link to="/">
        <div className="header__logo">
          <img className="header__img" src={logo} alt="logo" />
        </div>
      </Link>
      <CustomInput placeholder="поиск..." />
      <HeaderLinks />
    </div>
  );
};

export default Header;

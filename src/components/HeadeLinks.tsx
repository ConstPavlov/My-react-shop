import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import CustomInput from './UI/inputs/CustomInput';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const HeaderLinks = () => {
  const { quantityTovars } = useSelector((state: RootState) => state.cart);
  const location = useLocation();
  React.useEffect(() => {}, [location]);
  return (
    <>
      <Link to="/">
        <div className="header__logo">
          <img className="header__img" src={logo} alt="logo" />
        </div>
      </Link>
      <CustomInput placeholder="поиск..." />
      <div className="fitches">
        {location.pathname !== '/login' ? (
          <Link to="/login">
            <div className="header__login header__icon-wrap">
              <AccountCircleIcon className="login-ico__pic" />
            </div>
          </Link>
        ) : (
          ''
        )}
        {location.pathname !== '/favorites' && (
          <Link to="/favorites">
            <div className="header__favourites header__icon-wrap">
              <FavoriteBorderIcon />
            </div>
          </Link>
        )}
        {location.pathname !== '/cart' && (
          <Link to="/cart">
            <div className="header__cart header__icon-wrap">
              <ShoppingCartIcon />
              {quantityTovars !== 0 && <div className="header__cartQuant">{quantityTovars}</div>}
            </div>
          </Link>
        )}
      </div>
    </>
  );
};

export default HeaderLinks;

import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import CustomInput from './UI/inputs/CustomInput';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { CART_ROUTE, FAVORITES_ROUTE, LOGIN_ROUTE } from '../utils/consts';

const HeaderLinks = () => {
  const isAuth = false;
  const navigate = useNavigate();
  const { quantityTovars } = useSelector((state: RootState) => state.cart);
  const location = useLocation();
  const cartValidation = () => {
    if (isAuth) {
      return navigate(`${CART_ROUTE}`);
    }
    return navigate(`${LOGIN_ROUTE}`);
  };
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
        {location.pathname !== LOGIN_ROUTE ? (
          <Link to={`${LOGIN_ROUTE}`}>
            <div className="header__login header__icon-wrap">
              <AccountCircleIcon className="login-ico__pic" />
            </div>
          </Link>
        ) : (
          ''
        )}
        {location.pathname !== FAVORITES_ROUTE && (
          <Link to={`${FAVORITES_ROUTE}`}>
            <div className="header__favourites header__icon-wrap">
              <FavoriteBorderIcon />
            </div>
          </Link>
        )}
        {location.pathname !== CART_ROUTE && (
          <div onClick={cartValidation}>
            <div className="header__cart header__icon-wrap">
              <ShoppingCartIcon />
              {quantityTovars !== 0 && <div className="header__cartQuant">{quantityTovars}</div>}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HeaderLinks;

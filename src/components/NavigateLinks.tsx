import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import CustomInput from './UI/inputs/CustomInput';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux/store';
import { isAuth } from '../redux/auth/select';
import { CART_ROUTE, FAVORITES_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { logOut } from '../redux/auth/slice';

const HeaderLinks = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { quantityTovars } = useSelector((state: RootState) => state.cart);
  const location = useLocation();

  const isSignUp = useSelector(isAuth);
  console.log(isSignUp);
  const cartValidation = () => {
    if (isSignUp) {
      return navigate(`${CART_ROUTE}`);
    }
    return navigate(`${LOGIN_ROUTE}`);
  };
  const handlerLogOut = () => {
    dispatch(logOut());
    window.localStorage.removeItem('token');
  };
  React.useEffect(() => {}, [location]);
  return (
    <div className="fitches">
      {isSignUp ? (
        <div onClick={handlerLogOut} className="header__login header__icon-wrap login-ico__logout">
          <LogoutIcon className="login-ico__pic " />
        </div>
      ) : location.pathname !== LOGIN_ROUTE && location.pathname !== REGISTRATION_ROUTE ? (
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
  );
};

export default HeaderLinks;
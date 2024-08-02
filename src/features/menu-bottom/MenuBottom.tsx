import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { isAuth } from '../../redux/auth/select';
import {
  CART_ROUTE,
  FAVORITES_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from '../../utils/consts';
import { logOut } from '../../redux/auth/slice';

const MenuBottom: React.FC = () => {
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
    <div className="menu-bottom__container">
      {isSignUp ? (
        <div
          onClick={handlerLogOut}
          className="menu-bottom__icon-wrap menu-bottom__logout"
        >
          <LogoutIcon className="login-ico__pic " />
        </div>
      ) : (
        <Link to={`${LOGIN_ROUTE}`}>
          <div className="menu-bottom__login menu-bottom__icon-wrap">
            <AccountCircleIcon className="login-ico__pic" />
          </div>
        </Link>
      )}
      {
        <Link to={`${FAVORITES_ROUTE}`}>
          <div className="menu-bottom__favourites menu-bottom__icon-wrap">
            <FavoriteBorderIcon />
          </div>
        </Link>
      }
      {
        <div onClick={cartValidation}>
          <div className="menu-bottom__cart menu-bottom__icon-wrap">
            <ShoppingCartIcon />
            {quantityTovars !== 0 && (
              <div className="menu-bottom__cartQuant">{quantityTovars}</div>
            )}
          </div>
        </div>
      }
    </div>
  );
};

export default MenuBottom;

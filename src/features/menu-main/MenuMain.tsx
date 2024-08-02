import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { isAuth } from '../../redux/auth/select';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import {
  CART_ROUTE,
  HOME_ROUTE,
  PROFILE_ROUTE,
  ADMIN_ROUTE,
} from '../../utils/consts';
import { logOut } from '../../redux/auth/slice';
import { useAppDispatch } from '../../redux/store';

export default function MenuMain() {
  const isSignUp = useSelector(isAuth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handlerLogOut = () => {
    if (confirm('Вы уверены что хотите выйти из системы?')) {
      dispatch(logOut());
      window.localStorage.removeItem('token');
      navigate(`${HOME_ROUTE}`);
    }
  };
  if (!isSignUp) {
    return <div className="menu-main"></div>;
  }
  return (
    <div className="menu-main">
      <Box
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          borderRadius: '8px',
        }}
      >
        <nav aria-label="main mailbox folders">
          <List>
            {true ? (
              <Link to={ADMIN_ROUTE}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AdminPanelSettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Admin" />
                  </ListItemButton>
                </ListItem>
              </Link>
            ) : (
              ''
            )}
            <Link to={PROFILE_ROUTE}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AccountBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>
            </Link>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MenuIcon />
                </ListItemIcon>
                <ListItemText primary="Menu" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Link to={CART_ROUTE}>
                    <ShoppingCartIcon />
                  </Link>
                </ListItemIcon>
                <ListItemText primary="Cart" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FavoriteBorderIcon />
                </ListItemIcon>
                <ListItemText primary="Favotites" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={handlerLogOut}>
              <ListItemButton>
                <ListItemIcon>
                  <div className="header__login header__icon-wrap login-ico__logout">
                    <LogoutIcon className="login-ico__pic " />
                  </div>
                </ListItemIcon>
                <ListItemText primary="Log out" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
      </Box>
    </div>
  );
}

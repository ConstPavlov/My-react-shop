import Admin from './pages/basic-pages/Admin';
import React from 'react';
import {
  ADMIN_ROUTE,
  CART_ROUTE,
  DEVICE_ROTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  FAVORITES_ROUTE,
} from './utils/consts';
import Cart from './pages/basic-pages/cart/Cart';
import Home from './pages/basic-pages/Home';
import Registraton from './pages/basic-pages/Registraton';
import Login from './pages/basic-pages/Login';
import Favorites from './pages/basic-pages/favorites/Favorites';

export type IRoutes = {
  path: string;
  Component: React.ElementType;
};

export const authRoutes: IRoutes[] = [
  { path: ADMIN_ROUTE, Component: Admin },
  { path: CART_ROUTE, Component: Cart },
];
export const publicRoutes: IRoutes[] = [
  { path: HOME_ROUTE, Component: Home },
  { path: REGISTRATION_ROUTE, Component: Registraton },
  { path: FAVORITES_ROUTE, Component: Favorites },
  { path: LOGIN_ROUTE, Component: Login },

  { path: DEVICE_ROTE + '/:id', Component: Home },
];

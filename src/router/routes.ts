import Admin from '../pages/basic-pages/Admin';
import React from 'react';
import {
  ADMIN_ROUTE,
  CART_ROUTE,
  DEVICE_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  FAVORITES_ROUTE,
  PROFILE_ROUTE,
  TELEFONESALL_ROUTE,
  TELEVIZORY_ROUTE,
  KOMPYUTERY_ROUTE,
  SMARTFONY_ROUTE,
  SAMSUNG_ROUTE,
  HONOR_ROUTE,
  GADGETS_ROUTE,
  LAPTOPLINKS_ROUTE,
  LAPTOPSALL_ROUTE,
  LAPTOPSTRANSFORMERY_ROUTE,
  LAPTOPSIMONITORSLLNKS_ROUTE,
  SISBLOKS_ROUTE,
  TELEVIZORYALL_ROUTE,
  TELEICTV_ROUTE,
} from '../utils/consts';
import Cart from '../pages/basic-pages/cart/Cart';
import Home from '../pages/basic-pages/Home';
import Registration from '../pages/basic-pages/Registration';
import LoginPage from '../pages/basic-pages/LoginPage';
import Favorites from '../pages/basic-pages/favorites/Favorites';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../Layouts/Layout';
import Kompyutery from '../pages/kompyutery-pages/Kompyutery';
import Smartfony from '../pages/Smartfony';
import TelefonesAll from '../pages/phone-pages/TelefonesAll';
//@ts-ignore
import Televizory from '../pages/Televizory';
import '../scss/app.scss';
import Samsung from '../pages/phone-pages/phone-secondary/Samsung';
import Honor from '../pages/phone-pages/phone-secondary/Honor';
import Gadgets from '../pages/phone-pages/phone-secondary/Gadgets';
import TovarsLayout from '../Layouts/TovarsLayout';
import { ChangeEvent } from 'react';
import ChangeContext from '../context/ChangeContext';
import Laptops from '../pages/kompyutery-pages/kompyutery-secondry/laptops/linksCarousel/LaptopLinks';
import LaptopsAll from '../pages/kompyutery-pages/kompyutery-secondry/laptops/pages/LaptopsAll';
import LaptopLinks from '../pages/kompyutery-pages/kompyutery-secondry/laptops/linksCarousel/LaptopLinks';
import LaptopsTransformery from '../pages/kompyutery-pages/kompyutery-secondry/laptops/pages/LaptopsTransformery';
import LaptopsMonitorsLinks from '../pages/kompyutery-pages/kompyutery-secondry/blocks-monitors/linksCarousel/LaptopsMonitorsLinks';
import SisBlocks from '../pages/kompyutery-pages/kompyutery-secondry/blocks-monitors/pages/SisBlocks';
import TelevizoryICifTv from '../pages/televizory-pages/televizory-secondary/televizori-i-cif-tv/linksCarousel/TelevizoryICifTv';
import TelevizoryAll from '../pages/televizory-pages/televizory-secondary/televizori-i-cif-tv/pages/TelevizoryAll';
import Televizory4k from '../pages/televizory-pages/televizory-secondary/televizori-i-cif-tv/pages/Televizory4k';
import Profile from '../pages/basic-pages/profile/Profile';

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
  { path: REGISTRATION_ROUTE, Component: Registration },
  { path: FAVORITES_ROUTE, Component: Favorites },
  { path: LOGIN_ROUTE, Component: LoginPage },
  { path: PROFILE_ROUTE, Component: Profile },

  // { path: KOMPYUTERY_ROUTE, Component: Kompyutery },
  // { path: TELEVIZORY_ROUTE, Component: Televizory },
  // { path: TELEFONESALL_ROUTE, Component: TelefonesAll },
  // { path: SMARTFONY_ROUTE, Component: Smartfony },
  // { path: SAMSUNG_ROUTE, Component: Samsung },
  // { path: HONOR_ROUTE, Component: Honor },
  // { path: GADGETS_ROUTE, Component: Gadgets },
  // { path: LAPTOPLINKS_ROUTE, Component: LaptopLinks },
  // { path: LAPTOPSALL_ROUTE, Component: LaptopsAll },
  // { path: LAPTOPSTRANSFORMERY_ROUTE, Component: LaptopsTransformery },
  // { path: LAPTOPSIMONITORSLLNKS_ROUTE, Component: LaptopsMonitorsLinks },
  // { path: SISBLOKS_ROUTE, Component: SisBlocks },
  // { path: TELEICTV_ROUTE, Component: TelevizoryICifTv },
  // { path: TELEVIZORYALL_ROUTE, Component: TelevizoryAll },
  // { path: LOGIN_ROUTE, Component: Televizory4k },
  // { path: DEVICE_ROUTE + '/:id', Component: Home },
];

// export const KOMPYUTERY_ROTE = '/noutbuki-planshety-i-kompyutery';
// export const TELEVIZORY_ROTE = '/televizory-i-video';
// export const TELEFONESALL_ROTE = '/telefones';
// export const SMARTFONY_ROTE = '/smartfony-i-svyaz';
// export const SAMSUNG_ROTE = '/samsung';
// export const HONOR_ROTE = '/honor';
// export const GADGETS_ROTE = '/gadgets';
// export const LAPTOPLINKS_ROTE = '/noutbuki-planshety-komputery-links';
// export const LAPTOPSALL_ROTE = '/laptops';
// export const LAPTOPSTRANSFORMERY_ROTE = '/noutbuki-transformery';
// export const LAPTOPSIMONITORSLLNKS_ROTE = '/laptops-i-monitors';
// export const SISBLOKS_ROTE = '/sistemnye-bloki';
// export const TELEICTV_ROTE = '/televizory-i-cifrovoe-tv';
// export const TELEVIZORYALL_ROTE = '/televizory-all';
// export const TELE4K_ROTE = '/televizory-4k';

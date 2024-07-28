import React, { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layouts/Layout';
import LayoutCardsPage from '../Layouts/LayoutCardsPage';
import Samsung from '../pages/phone-pages/phone-secondary/Samsung';
import TelefonesAll from '../pages/phone-pages/TelefonesAll';
import Smartfony from '../pages/Smartfony';
import Kompyutery from '../pages/kompyutery-pages/Kompyutery';
import { isAuth } from '../redux/auth/select';
import { authRoutes, IRoutes, publicRoutes } from './routes';
import Televizory from '../pages/Televizory';
import Honor from '../pages/phone-pages/phone-secondary/Honor';
import Gadgets from '../pages/phone-pages/phone-secondary/Gadgets';
import LaptopLinks from '../pages/kompyutery-pages/kompyutery-secondry/laptops/linksCarousel/LaptopLinks';
import LaptopsAll from '../pages/kompyutery-pages/kompyutery-secondry/laptops/pages/LaptopsAll';
import LaptopsTransformery from '../pages/kompyutery-pages/kompyutery-secondry/laptops/pages/LaptopsTransformery';
import LaptopsMonitorsLinks from '../pages/kompyutery-pages/kompyutery-secondry/blocks-monitors/linksCarousel/LaptopsMonitorsLinks';
import SisBlocks from '../pages/kompyutery-pages/kompyutery-secondry/blocks-monitors/pages/SisBlocks';
import TelevizoryICifTv from '../pages/televizory-pages/televizory-secondary/televizori-i-cif-tv/linksCarousel/TelevizoryICifTv';
import TelevizoryAll from '../pages/televizory-pages/televizory-secondary/televizori-i-cif-tv/pages/TelevizoryAll';
import Televizory4k from '../pages/televizory-pages/televizory-secondary/televizori-i-cif-tv/pages/Televizory4k';
import TovarsLayout from '../Layouts/TovarsLayout';

const AppRouter: React.FC = () => {
  const isSignUp = useSelector(isAuth);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {isSignUp &&
          authRoutes.map(({ path, Component }: IRoutes) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        {publicRoutes.map(({ path, Component }: IRoutes) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Route>
      // @ts-ignore
      <Route path="/" element={<TovarsLayout />}>
        <Route
          path="noutbuki-planshety-i-kompyutery"
          element={<Kompyutery />}
        />
        <Route path="televizory-i-video" element={<Televizory />} />
        <Route path="telefones" element={<TelefonesAll />} />
        <Route path="smartfony-i-svyaz" element={<Smartfony />} />
        <Route path="samsung" element={<Samsung />} />
        <Route path="honor" element={<Honor />} />
        <Route path="gadgets" element={<Gadgets />} />
        <Route
          path="noutbuki-planshety-komputery-links"
          element={<LaptopLinks />}
        />
        <Route path="laptops" element={<LaptopsAll />} />
        <Route path="noutbuki-transformery" element={<LaptopsTransformery />} />
        <Route path="laptops-i-monitors" element={<LaptopsMonitorsLinks />} />
        <Route path="sistemnye-bloki" element={<SisBlocks />} />
        // Телеки
        <Route path="televizory-i-cifrovoe-tv" element={<TelevizoryICifTv />} />
        <Route path="televizory-all" element={<TelevizoryAll />} />
        <Route path="televizory-4k" element={<Televizory4k />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

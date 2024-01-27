import React, { FC, ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layouts/Layout';
import { authRoutes, IRoutes, publicRoutes } from '../routes';

const AppRouter: React.FC = () => {
  const isAuth = false;
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {isAuth &&
          authRoutes.map(({ path, Component }: IRoutes) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        {publicRoutes.map(({ path, Component }: IRoutes) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;

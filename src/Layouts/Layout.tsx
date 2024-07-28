import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import MenuBottom from '../components/UI/menu-bottom/MenuBottom';

const Layout: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <Header />
      </div>
      <div className="content-wrapper">
        <div className="content">
          <Outlet />
        </div>
      </div>
      <div className="menu-bottom">
        <MenuBottom></MenuBottom>
      </div>
    </div>
  );
};

export default Layout;

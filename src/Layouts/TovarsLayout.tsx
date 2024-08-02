import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Categories from '../features/Categories';
import Header from '../widgets/Header/Header';
import MenuBottom from '../features/menu-bottom/MenuBottom';
import ChangeContext from '../context/ChangeContext';

const TovarsLayout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {}, [location]);
  return (
    <div className="wrapper">
      <div className="header">{location.pathname !== '/' && <Header />}</div>

      <div className="content-wrapper">
        {/* <ChangeContext.Provider value={handleChange}> */}
        <Outlet />
        {/* </ChangeContext.Provider> */}
      </div>
      <div className="menu-bottom">
        <MenuBottom></MenuBottom>
      </div>
    </div>
  );
};

export default TovarsLayout;

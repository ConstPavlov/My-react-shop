import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Categories from '../components/Categories';
import Header from '../components/Header';
import ChangeContext from '../context/ChangeContext';

const TovarsLayout: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <Header />
      </div>

      <div className="content-wrapper">
        {/* <ChangeContext.Provider value={handleChange}> */}
        <Outlet />
        {/* </ChangeContext.Provider> */}
      </div>
    </div>
  );
};

export default TovarsLayout;

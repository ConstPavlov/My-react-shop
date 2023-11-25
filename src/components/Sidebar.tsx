import React, { FunctionComponent, ReactNode } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

interface SideBarProps {
  children?: ReactNode
}

const Sidebar: React.FC<SideBarProps> = ({children}) => {
  const location = useLocation();

  const condition: boolean =
    location.pathname !== '/' &&
    location.pathname !== '/login' &&
    location.pathname !== '/favorites' &&
    location.pathname !== '/cart';
  React.useEffect(() => {}, [location]);
  return (
    <>
      {condition && (
        <div className="sidebar">
          <h1>Sidebar</h1>
          {children}
        </div>
      )}
    </>
  );
};

export default Sidebar;

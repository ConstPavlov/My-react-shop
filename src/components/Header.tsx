import React from 'react';

import HeaderLinks from './HeadeLinks';
import Menu from './Menu';

const Header: React.FC = () => {
  return (
    <div className="header__container">
      <Menu />
      <HeaderLinks />
    </div>
  );
};

export default Header;

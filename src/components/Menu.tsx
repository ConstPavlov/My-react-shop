import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import ClearIcon from '@mui/icons-material/Clear';
import CustonModal from './UI/modal/CustonModal';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [buttonMenuFlag, setButtonMenuFlag] = React.useState(false);
  const [modal, setModal] = React.useState(false);

  const changeIconMenu = () => {
    setButtonMenuFlag(!buttonMenuFlag);
  };
  const clickButtonMenu = () => {
    changeIconMenu();
    setModal(!modal);
  };
  const closeModal = () => {
    changeIconMenu();
    setModal(false);
  };

  const menuButtonIcon = !buttonMenuFlag ? (
    <MenuIcon className="header__menu-button" />
  ) : (
    <ClearIcon className="header__menu-button" />
  );
  return (
    <>
      <div className="header__menu" onClick={clickButtonMenu}>
        {menuButtonIcon}
        <h3>Каталог</h3>
      </div>
      <CustonModal modal={modal} setModal={setModal}>
        <div className="header__menu-items">
          <Link className="header__menu-link" to="/telefones" onClick={clickButtonMenu}>
            Смартфоны и гаджеты
          </Link>
          <Link
            className="header__menu-link"
            to="/noutbuki-planshety-i-kompyutery"
            onClick={clickButtonMenu}>
            Ноутбуки и компьютеры
          </Link>
          <Link className="header__menu-link" to="/televizory-i-video" onClick={clickButtonMenu}>
            Телевизоры и цифровое ТВ
          </Link>
          <div onClick={closeModal} className="header__menu-close">
            Закрыть
          </div>
        </div>
      </CustonModal>
    </>
  );
};

export default Menu;

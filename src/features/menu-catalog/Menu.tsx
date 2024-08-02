import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import ClearIcon from '@mui/icons-material/Clear';
import CustomModal from '../../components/UI/modal/CustomModal';
import { Link } from 'react-router-dom';
import { useOutside } from '../../hooks/useOutside';

const Menu: React.FC<any> = () => {
  const [buttonMenuFlag, setButtonMenuFlag] = React.useState(false);
  const { ref, ref2El, isShow, setIsShow } = useOutside(false);

  const changeIconMenu = () => {
    setButtonMenuFlag(!buttonMenuFlag);
  };
  const clickButtonMenu = () => {
    changeIconMenu();
    setIsShow(!isShow);
  };

  return (
    <>
      <div ref={ref} onClick={clickButtonMenu}>
        <div className="header__menu">
          {isShow ? (
            <ClearIcon className="header__menu-button" />
          ) : (
            <MenuIcon className="header__menu-button" />
          )}
          <h3>Каталог</h3>
        </div>
      </div>
      <CustomModal modal={isShow} setModal={setIsShow} ref2El={ref2El}>
        <div className="header__menu-items">
          <Link
            className="header__menu-link"
            to="/telefones"
            // onClick={clickButtonMenu}
          >
            Смартфоны и гаджеты
          </Link>
          <Link
            className="header__menu-link"
            to="/noutbuki-planshety-i-kompyutery"
            // onClick={clickButtonMenu}
          >
            Ноутбуки и компьютеры
          </Link>
          <Link
            className="header__menu-link"
            to="/televizory-i-video"
            // onClick={clickButtonMenu}
          >
            Телевизоры и цифровое ТВ
          </Link>
          <div onClick={clickButtonMenu} className="header__menu-close">
            Закрыть
          </div>
        </div>
      </CustomModal>
    </>
  );
};

export default Menu;

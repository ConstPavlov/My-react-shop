import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import cartBackground from '../../../assets/img/logo.svg';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

import FavorBlock from '../../../components/FavorBlock';
import GoBackBtn from '../../../components/UI/GoBackBtn/GoBackBtn';

const Favorites: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const prevLoc = location.state?.from;
  const { itemsFavor } = useSelector((state: RootState) => state.favorites);
  const { totalPrice, itemsCart, quantityTovars } = useSelector((state: RootState) => state.cart);

  if (itemsFavor.length === 0) {
    return (
      <div
        className="favorites"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <GoBackBtn />
        <h1 style={{ marginTop: '32px' }}>Избранное</h1>
        <img className="cart__defaultBackground" src={cartBackground} alt="default-cart" />
      </div>
    );
  }
  return (
    <div className="favorites">
      <GoBackBtn />
      <h1 style={{ marginBottom: '10px' }}>Избранное</h1>
      <div className="favorites__tovars">
        {itemsFavor.map((item: any) => (
          <FavorBlock {...item} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;

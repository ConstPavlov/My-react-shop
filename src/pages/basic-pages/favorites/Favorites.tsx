import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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

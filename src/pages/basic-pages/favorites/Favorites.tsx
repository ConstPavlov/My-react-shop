import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

import FavorBlock from '../../../components/FavorBlock';

const Favorites: React.FC = () => {
  const { itemsFavor } = useSelector((state: RootState) => state.favorites);
  const { totalPrice, itemsCart, quantityTovars } = useSelector((state: RootState) => state.cart);

  return (
    <div className="favorites">
      <span>Назад к предыдущей странице</span>
      <h1 style={{ marginBottom: '10px' }}>Избранное</h1>
      <div className="favorites__tovars">
        {itemsFavor.map((item: any) => (
          <FavorBlock {...item}/>
        ))}
      </div>
    </div>
  );
};

export default Favorites;

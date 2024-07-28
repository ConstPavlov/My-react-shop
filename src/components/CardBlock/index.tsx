import React from 'react';
import MyMiniButton from '../UI/buttons/mini-buttons/MyMiniButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IAllParamCard } from '../../redux/cards/types';
import StarsIcon from '@mui/icons-material/Stars';
import {
  addTovarToCart,
  minusTovarToCart,
  setquantityTovars,
  setTotalPrice,
} from '../../redux/cart/slice';

import { addTovarToFavor, removeFavor } from '../../redux/favorites/slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const CardBlock: React.FC<any> = ({ id, name, imageUrl, price }) => {
  const { itemsFavor } = useSelector((state: RootState) => state.favorites);

  const foundItem = itemsFavor.find((item: any) => item.id === id);
  console.log(foundItem);
  const dispatch = useDispatch();
  const addTovar = () => {
    //
    dispatch(addTovarToCart({ id, name, imageUrl, price, count: 1 }));
    dispatch(setTotalPrice());
    dispatch(setquantityTovars());
  };

  const minusTovar = () => {
    dispatch(minusTovarToCart(id));
    dispatch(setTotalPrice());
    dispatch(setquantityTovars());
  };

  const changeFavorColor = foundItem
    ? ['card__favColor', 'inFavor'].join(' ')
    : 'card__favColor';

  const HandleAddToFavor = () => {
    if (foundItem) {
      dispatch(removeFavor(id));
    } else {
      dispatch(
        addTovarToFavor({
          id,
          name,
          imageUrl,
          price,
        }),
      );
    }
  };

  return (
    <div className="card" key={id}>
      <h1 className="card__title">{name}</h1>

      <div className="card__imgWrap">
        <StarsIcon onClick={HandleAddToFavor} className={changeFavorColor} />
        <img
          className="card__img"
          src={process.env.REACT_APP_API_BASEURL + imageUrl}
          alt=""
        />
      </div>

      <div className="card__price">
        <span>{price}₽</span>
      </div>
      <div className="card__buttons">
        <MyMiniButton onClick={addTovar}>Добавить</MyMiniButton>
        <div>
          <RemoveIcon onClick={minusTovar} className="card__but" />
          <AddIcon onClick={addTovar} className="card__but" />
        </div>
      </div>
    </div>
  );
};

export default CardBlock;

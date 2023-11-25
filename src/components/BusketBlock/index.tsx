import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import {
  addTovarToCart,
  minusTovarToCart,
  setquantityTovars,
  setTotalPrice,
  removeTovarToCart,
} from '../../redux/cart/slice';
import { addTovarToFavor } from '../../redux/favorites/slice';

const BusketBlock = ({ ...item }) => {
  const dispatch = useDispatch();
  const { totalPrice, itemsCart, quantityTovars } = useSelector((state: RootState) => state.cart);
  const addTovar = () => {
    //
    dispatch(
      addTovarToCart({
        id: item.id,
        title: item.title,
        imageUrl: item.imageUrl,
        price: item.price,
        count: 1,
      }),
    );
    dispatch(setTotalPrice());
    dispatch(setquantityTovars());
  };
  const minusTovar = () => {
    dispatch(minusTovarToCart(item.id));
    dispatch(setTotalPrice());
    dispatch(setquantityTovars());
  };

  const removeTovar = () => {
    dispatch(removeTovarToCart(item.id));
    dispatch(setTotalPrice());
    dispatch(setquantityTovars());
  };

  const addFavorites = () => {
    dispatch(
      addTovarToFavor({
        id: item.id,
        title: item.title,
        imageUrl: item.imageUrl,
        price: item.price,
      }),
    );
  };

  // const { cards } = useSelector((state: RootState) => state.cards);
  // const currentItem = itemsCart.find((card) => {
  //   card.id === item.id;
  // });
  return (
    <>
      <div className="tovar" id={item.id} key={item.id}>
        <img className="tovar__img" src={item.imageUrl} alt="" />
        <h3 className="tovar__title">{item.title}</h3>
        <div className="cart__buts">
          <RemoveIcon onClick={minusTovar} className="card__but" />
          <span>{item.count}</span>
          <AddIcon onClick={addTovar} className="card__but" />
        </div>
        <div className="cart__2buts">
          <div onClick={removeTovar} className="cart__2but">
            Удалить
          </div>
          <div onClick={addFavorites} className="cart__2but">
            В избранное
          </div>
        </div>
        <div className="tovar__price">{item.price * item.count}₽</div>
      </div>
    </>
  );
};

export default BusketBlock;

import React, { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavor, addTovarToFavor } from '../../redux/favorites/slice';
import { RootState } from '../../redux/store';
import { addTovarToCart, setquantityTovars, setTotalPrice } from '../../redux/cart/slice';

const FavorBlock = ({ ...item }) => {
  const { itemsCart } = useSelector((state: RootState) => state.cart);
  const foundItem = itemsCart.find((cartItem: any) => cartItem.id === item.id);

  const [closeToolTip, setCloseToolTip] = useState<boolean>(false);

  const dispatch = useDispatch();

  const deleteFromFavorites = () => {
    dispatch(removeFavor(item.id));
  };
  const HandleAddToCartFromFavor = () => {
    if (foundItem) {
      setCloseToolTip(true);
      console.log(closeToolTip);
    } else {
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
    }
  };
  return (
    <div className="favorites__tovar" id={item.id} key={item.id}>
      <img className="favorites__img" src={item.imageUrl} alt="" />
      <div className="favorites__info">
        <h3 className="favorites__title">{item.title}</h3>
        <div onClick={deleteFromFavorites} className="favorites__buts">
          <DeleteOutlineIcon className="favorites__but" />
          <span className="favorites__but-text">Удалить</span>
        </div>
      </div>
      <div className="favorites__price">{item.price}₽</div>
      <div className="favorites__addToCart">
        {closeToolTip && (
          <div className="tooltip-isTovarInCart-wrap">
            <p className="tooltip-isTovarInCart">Товар добавлен в корзину</p>
            <CloseIcon onClick={() => setCloseToolTip(false)} className="closeIco" />
          </div>
        )}

        <div onClick={HandleAddToCartFromFavor} className="cartButton">
          <ShoppingCartIcon className="cartIcon" />

          <span>В корзину</span>
        </div>
      </div>
    </div>
  );
};

export default FavorBlock;

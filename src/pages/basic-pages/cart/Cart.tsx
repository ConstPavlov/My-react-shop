import React, { useEffect } from 'react';
import MyMiniButton from '../../../components/UI/buttons/mini-buttons/MyMiniButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { setTotalPrice, clearCart } from '../../../redux/cart/slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import BusketBlock from '../../../components/BusketBlock';

const Cart = () => {
  const dispatch = useDispatch();
  const { totalPrice, itemsCart, quantityTovars } = useSelector((state: RootState) => state.cart);
  const onClickClear = () => {
    dispatch(clearCart());
  };

  if (itemsCart.length === 0) {
    return <h1 style={{ marginBottom: '10px' }}>Это корзина и она пуста</h1>;
  }

  return (
    <div className="cart">
      <h1 style={{ marginBottom: '10px' }}>Корзина</h1>
      <div className="cart__head">
        <MyMiniButton onClick={onClickClear}>Очистить все</MyMiniButton>
        <div className="totalPrice">
          <h3 className="totalPrice__title">Итоговая стоимость :</h3>
          <span className="totalPrice__price">{totalPrice}₽</span>
        </div>
      </div>
      <div className="cart__tovars">
        {itemsCart.map((item) => (
          <BusketBlock {...item} key={item.id} />
        ))}
      </div>
      <div className="cart__bottom">
        <div className="totalQuantity totalBottom">
          <h3 className="totalQuantity__title">Количество товаров :</h3>
          <span className="totalQuantity__qua">{quantityTovars}</span>
        </div>
        <div className="totalPriceBottom totalBottom">
          <h3 className="totalPriceBottom__title">Итоговая стоимость :</h3>
          <span className="totalPrice__price">{totalPrice}₽</span>
        </div>
        <div className="createOrder">
          <h3 className="createOrder__title">Перейти к оформлению заказа</h3>
          <button className="createOrder__btn">Продолжить</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

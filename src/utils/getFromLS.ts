import { useSelector } from 'react-redux';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { TItemCart } from '../redux/cart/types';
import { RootState } from '../redux/store';
import { calcTotalPrice } from './calcTotalPrice';
import { totalQuantity } from './totalQuantity';

export const getFromLS = (key: string) => {
  const dataCartLC = localStorage.getItem(key);

  const items: TItemCart[] = dataCartLC ? JSON.parse(dataCartLC) : [];

  const price = calcTotalPrice(items);

  const quantity = items ? totalQuantity(items) : 0;

  return [items, price, quantity];
};

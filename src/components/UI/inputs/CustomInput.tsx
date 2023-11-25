import React, { ChangeEvent, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChangeContext from '../../../context/ChangeContext';
import { setCards } from '../../../redux/cards/slice';
import { setQuery } from '../../../redux/filter/slice';
import { RootState } from '../../../redux/store';
import classes from './CustomInput.module.scss';

type changeType = ChangeEvent<HTMLInputElement>;
type searchTypeEvent = (e: changeType) => void;

const CustomInput = ({ ...props }) => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state: RootState) => state.cards);
  const { query } = useSelector((state: RootState) => state.filter);

  // const searchQueryFun: any = React.useCallback(
  //   (query: string) => {
  //     // if (!Array.isArray(cards)) {
  //     //   console.error('dataCards is not an array');
  //     //   return [];
  //     // }
  //     if (cards.length > 0) {
  //       const searchData = cards.filter((card: any) =>
  //         card.brand.toLowerCase().includes(query.toLowerCase()),
  //       );
  //       console.log(searchData);
  //       console.log(cards, 1);
  //       dispatch(setCards(searchData));
  //       console.log(cards, 2);
  //     }
  //   },
  //   [cards],
  // );

  // const temp = [{ brand: 'Apple' }, { brand: 'Samsung' }];

  console.log(query);

  const changeSearch: searchTypeEvent = (e: changeType) => {
    let query = e.target.value;
    dispatch(setQuery(query));
  };
  return <input value={query} onChange={changeSearch} {...props} className={classes.CustomInput} />;
};

export default CustomInput;

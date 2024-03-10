import React, { useCallback, useContext, useRef } from 'react';
import axios from 'axios';
import qs, { ParsedQs } from 'qs';
import Categories from '../components/Categories';
import Sidebar from '../components/Sidebar';
import ChangeContext, { TypeChangeContext } from '../context/ChangeContext';
import CardBlock from '../components/CardBlock';
import Sort, { sortNames, sortNamesType } from '../components/Sort';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setActiveSort,
  setAllFilters,
  setCategory,
  setCheckedCurrent,
  setFilterStock,
  setQuery,
} from '../redux/filter/slice';
import { RootState, useAppDispatch } from '../redux/store';
import { brandNamesType } from '../redux/filter/types';
import { IAllParamCard } from '../redux/cards/types';
import { fetchData } from '../redux/cards/asyncAction';
import { setCards } from '../redux/cards/slice';
import { sortBy } from 'lodash';
import { useLocalStorage } from '../hooks/useLocalStorage';

// https://64bcef922320b36433c74332.mockapi.io/items

export type IfilterNames = {
  filterNames: { name: string; disabledChx: boolean }[];
};

interface ILayoutCardsPage {
  filterNames: brandNamesType[];
  mainSection: { sub: string; title: string };
}

const LayoutCardsPage: React.FC<ILayoutCardsPage> = ({
  filterNames,
  mainSection,
}) => {
  const dispatch = useAppDispatch();
  const { category, checkedCurrent, filterStock, query, activeSort } =
    useSelector((state: RootState) => state.filter);
  const { cards, status } = useSelector((state: RootState) => state.cards);
  const handleChange = React.useCallback(
    (event: any) => {
      const value = event.target.name;
      const checkedValue = event.target.checked;
      dispatch(setCheckedCurrent(checkedValue));
      dispatch(setCategory(value));
    },
    [category],
  );

  const localFilterNames = [...filterNames];
  const [data, setData] = React.useState<any>([]);

  const cardList = cards
    .filter(
      (card: any) =>
        card.brand.toLowerCase().includes(query.toLowerCase()) ||
        card.title.toLowerCase().includes(query.toLowerCase()),
    )
    .map((item: IAllParamCard) => <CardBlock {...item} key={item.id} />);

  const navigate = useNavigate();
  const location = useLocation();

  const isRender = React.useRef<boolean>(false);
  const isLaunched = React.useRef<boolean>(true);
  const isFirstRender = React.useRef<boolean>(false);

  const isSearch = React.useRef<boolean>(false);

  // const [activeSort, setActiveSort] = React.useState<sortNamesType>({
  //   name: 'Популярные(ASC)',
  //   sort: 'rating',
  // });

  // Подготовка фильтров к ссылке начало
  const currentBrand = checkedCurrent === false ? 'Все' : category;

  const sortByForLnk = activeSort.sort.includes('-')
    ? activeSort.sort.replace('-', '')
    : activeSort.sort;

  const orderForLink = activeSort.sort.includes('-') ? 'desc' : 'asc';

  const queryParam = query ? `&search=${query}` : '';

  // Подготовка фильтров к ссылке конец

  // const filteredStockFun = React.useCallback((dataCards: IAllParamCard[]) => {
  //   if (isLaunched.current) {
  //     const updateFilterCards = dataCards.forEach((card: IAllParamCard) => {
  //       const filteredFilterNames = filterNames.map((filter: IfilterName, i: any) => {
  //         if (card.brand === filter.name) {
  //           filter.disabledChx = false;
  //           console.log(`номер ${i + 1} Есть на складе`);
  //           console.log(filter);
  //         }
  //         return filter;
  //       });
  //       return filteredFilterNames;
  //     });

  //     return updateFilterCards;
  //   }
  //   return filterNames;
  // }, []);

  const resetFilters = React.useCallback(() => {
    dispatch(setCategory('Все'));
    dispatch(setCheckedCurrent(false));
    // dispatch(setCards([]));

    dispatch(setFilterStock([]));
    // dispatch(setQuery(''));
  }, [location.pathname]);

  React.useEffect(() => {
    resetFilters();
  }, [location.pathname]);

  const activateСheckbox = React.useCallback((cardsData: IAllParamCard[]) => {
    if (isLaunched.current) {
      console.log(cardsData);
      console.log(localFilterNames);
      console.log('activateСheckbox был запуск ');
      const updateCheckbox = localFilterNames.map((fil: brandNamesType) => {
        const matchedChbx = cardsData.some(
          (card: IAllParamCard) => card.brand === fil.name,
        );

        if (matchedChbx) {
          fil.disabledChx = false;
        }
        // console.log(filter);
        return fil;
      });
      return updateCheckbox;
    }
    return localFilterNames;
  }, []);

  React.useEffect(() => {
    if (window.location.search) {
      const parseObj: ParsedQs = qs.parse(window.location.search.substring(1));
      console.log(parseObj);

      const mathcedSort = sortNames.find(
        (obj: sortNamesType) => obj.sort === parseObj.sortBy,
      );
      console.log(mathcedSort);

      dispatch(
        setAllFilters({
          activeSort: mathcedSort || {
            name: 'Популярные(ASC)',
            sort: 'rating',
          },
          category: String(parseObj.brand),
          query: String(parseObj.searchQuery) || '',
        }),
      );
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    // if (isFirstRender.current) {
    let brand: string = !isFirstRender.current
      ? ''
      : currentBrand === 'Все'
      ? ''
      : `&brand=${category.toString()}`;

    const fetching = async () => {
      // if (isFirstRender.current === false) {
      //   dispatch(setCards([]));
      // }

      const response = await dispatch(
        fetchData({ sortByForLnk, orderForLink, brand, mainSection }),
      );

      // dispatch(setCards(response.payload));
      isFirstRender.current = true;
      if (fetchData.fulfilled.match(response)) {
        let newFilterNames = activateСheckbox(response.payload);

        dispatch(setFilterStock(newFilterNames));

        isLaunched.current = false;
      }
    };

    fetching();

    // }
  }, [category, checkedCurrent, activeSort, query]);

  React.useEffect(() => {
    if (isFirstRender.current) {
      const paramsSearch = qs.stringify({
        sortBy: activeSort.sort,
        brand: category,
        searchQuery: query,
      });

      navigate(`?${paramsSearch}`);
    }
  }, [query, activeSort.sort, category, isFirstRender.current]);

  // React.useEffect(() => {
  //   if (prevLocation.current !== location.pathname) {
  //     resetFilters();
  //     console.log('изменилась локация');
  //     prevLocation.current = location.pathname;

  //   }
  // }, [location.pathname]);

  return (
    <>
      <Sidebar>
        {!isFirstRender.current ? (
          <p>Секундочку</p>
        ) : (
          <Categories
            handleChange={handleChange}
            // categoryArray={categoryTelefonNames}
            filterNames={filterStock ? filterStock : localFilterNames}
          />
        )}
      </Sidebar>
      <div className="content">
        <Sort
          value={activeSort}
          setValue={(objSort: sortNamesType) =>
            dispatch(setActiveSort(objSort))
          }
        />
        <div className="tovarsContainer">
          <h1 className="tovarsTitle">{mainSection.title}</h1>

          <div className="cards">
            {!isFirstRender.current ? <h1>Идёт загрузка...</h1> : cardList}
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutCardsPage;

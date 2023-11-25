import React, { useCallback, useContext, useRef } from 'react';
import axios from 'axios';

import Categories from '../components/Categories';
import Sidebar from '../components/Sidebar';
import ChangeContext, { TypeChangeContext } from '../context/ChangeContext';
import CardBlock from '../components/CardBlock';
import Sort, { sortNamesType } from '../components/Sort';
import LayoutCardsPage from '../Layouts/LayoutCardsPage';
import { brandNamesType } from '../redux/filter/types';

// https://64bcef922320b36433c74332.mockapi.io/items

const Smartfony = () => {
  const sectionPhone = 'phone';
  const mainObjectSection = { sub: 'phone', title: 'Телефоны' };
  const brandTelefonNames: brandNamesType[] = [
    { name: 'Все', disabledChx: false },
    { name: 'Apple', disabledChx: true },
    { name: 'Samsung', disabledChx: true },
    { name: 'Xiaomi', disabledChx: true },
    { name: 'Itel', disabledChx: true },
  ];
  return (
    <>
      <LayoutCardsPage filterNames={brandTelefonNames} mainSection={mainObjectSection} />{' '}
    </>
  );
};

export default Smartfony;

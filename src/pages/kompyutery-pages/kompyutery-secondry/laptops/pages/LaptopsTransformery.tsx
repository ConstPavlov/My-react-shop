import React, { useCallback, useContext, useRef } from 'react';
import axios from 'axios';

import LayoutCardsPage from '../../../../../Layouts/LayoutCardsPage';

// https://64bcef922320b36433c74332.mockapi.io/items

const LaptopsTransformery = () => {
  const mainObjectSection = { sub: 'laptopTransform', title: 'Ноутбуки-трансформеры' };
  const brandTelefonNames = [
    { name: 'Все', disabledChx: false },
    { name: 'Lenovo', disabledChx: true },
    { name: 'MSI', disabledChx: true },
    { name: 'HUAWEI', disabledChx: true },
    { name: 'ASUS', disabledChx: true },
    { name: 'Adata XPG', disabledChx: true },
    { name: 'Chuwi', disabledChx: true },
    { name: 'Xiaomi', disabledChx: true },
  ];

  return <LayoutCardsPage filterNames={brandTelefonNames} mainSection={mainObjectSection} />;
};

export default LaptopsTransformery;

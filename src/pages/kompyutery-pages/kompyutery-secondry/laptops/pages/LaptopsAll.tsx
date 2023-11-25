import React, { useCallback, useContext, useRef } from 'react';
import axios from 'axios';

import LayoutCardsPage from '../../../../../Layouts/LayoutCardsPage';

// https://64bcef922320b36433c74332.mockapi.io/items

const LaptopsAll = () => {
  const mainObjectSection = { sub: 'laptop', title: 'Компьютеры' };
  const brandTelefonNames = [
    { name: 'Все', disabledChx: false },
    { name: 'Apple', disabledChx: true },
    { name: 'Lenovo', disabledChx: true },
    { name: 'MSI', disabledChx: true },
    { name: 'HUAWEI', disabledChx: true },
    { name: 'Thunderobot', disabledChx: true },
    { name: 'ASUS', disabledChx: true },
    { name: 'HONOR', disabledChx: true },
    { name: 'Xiaomi', disabledChx: true },
  ];

  return <LayoutCardsPage filterNames={brandTelefonNames} mainSection={mainObjectSection} />;
};

export default LaptopsAll;

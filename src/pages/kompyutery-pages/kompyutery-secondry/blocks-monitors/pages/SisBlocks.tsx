import React, { useCallback, useContext, useRef } from 'react';
import axios from 'axios';

import LayoutCardsPage from '../../../../../Layouts/LayoutCardsPage';

// https://64bcef922320b36433c74332.mockapi.io/items

const SisBlocks = () => {
  const mainObjectSection = { sub: 'sisBlock', title: 'Системные блоки' };
  const brandTelefonNames = [
    { name: 'Все', disabledChx: false },
    { name: 'Robocomp', disabledChx: true },
    { name: 'MSI', disabledChx: true },
    { name: 'Raskat', disabledChx: true },
    { name: 'MUST', disabledChx: true },
    { name: 'Acer', disabledChx: true },
  ];

  return <LayoutCardsPage filterNames={brandTelefonNames} mainSection={mainObjectSection} />;
};

export default SisBlocks;

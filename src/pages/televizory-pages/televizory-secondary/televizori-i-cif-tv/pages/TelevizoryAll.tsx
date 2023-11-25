import React from 'react';
import LayoutCardsPage from '../../../../../Layouts/LayoutCardsPage';
import { brandNamesType } from '../../../../../redux/filter/types';

const TelevizoryAll = () => {
  const sectionPhone = 'phone';
  const mainObjectSection = { sub: 'TV', title: 'Телевизоры ' };
  const brandTelefonNames: brandNamesType[] = [
    { name: 'Все', disabledChx: false },
    { name: 'LG', disabledChx: true },
    { name: 'Haier', disabledChx: true },
    { name: 'Samsung', disabledChx: true },
    { name: 'Hisense', disabledChx: true },
    { name: 'Sony', disabledChx: true },
  ];
  return (
    <>
      <LayoutCardsPage filterNames={brandTelefonNames} mainSection={mainObjectSection} />{' '}
    </>
  );
};

export default TelevizoryAll;

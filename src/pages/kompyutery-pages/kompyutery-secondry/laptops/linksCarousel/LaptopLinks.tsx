import React, { useCallback, useContext, useRef } from 'react';
import axios from 'axios';

import LayoutCardsPage from '../../../../../Layouts/LayoutCardsPage';
import Carousel from '../../../../../features/Carousel';
import FakeAds from '../../../../../components/UI/fake-ads/FakeAds';

// https://64bcef922320b36433c74332.mockapi.io/items

const LaptopLinks = () => {
  const mainObjectSection = { sub: 'laptop', title: 'Компьютеры' };
  const brandTelefonNames = [
    { name: 'Apple' },
    { name: 'Lenovo' },
    { name: 'MSI' },
    { name: 'HUAWEI' },
    { name: 'Thunderobot' },
    { name: 'ASUS' },
    { name: 'HONOR' },
    { name: 'Xiaomi' },
  ];

  const ComputerLinksForCarousel = [
    {
      path: '/laptops',
      name: 'Ноутбуки',
      imgUrl:
        '	https://static.mvideo.ru/media/Assets/img/pc/noutbuki-220x220.jpg',
    },
    {
      path: '/noutbuki-transformery',
      name: 'Ноутбуки-трансформеры',
      imgUrl:
        'https://static.mvideo.ru/media/Assets/img/noutbuki-transformery-220x220.jpg',
    },
    {
      path: '/planshety',
      name: 'Планшеты',
      imgUrl: 'https://static.mvideo.ru/media/Assets/img/planshety-220x220.jpg',
    },
    {
      path: '/sistemnye-bloki',
      name: 'Системные блоки',
      imgUrl:
        'https://static.mvideo.ru/media/Assets/img/sistemnye-bloki-220x220.jpg',
    },

    {
      path: '/monitory',
      name: 'Мониторы',
      imgUrl: 'https://static.mvideo.ru/media/Assets/img/monitory-220x220.jpg',
    },
    {
      path: '/monobloki',
      name: 'Моноблоки',
      imgUrl: 'https://static.mvideo.ru/media/Assets/img/monobloki-220x220.jpg',
    },
    {
      path: '/komputernye-komplektuushhie',
      name: 'Компьютерные комплектующие',
      imgUrl:
        'https://static.mvideo.ru/media/Assets/img/kompyuternye-komplektuyushchie-220x220.jpg',
    },
    {
      path: '/aksessuary-dlya-planshetov',
      name: '  Аксессуары для планшетов',
      imgUrl: 'https://img.mvideo.ru/catimg/Dir_148_L.jpg',
    },
  ];
  return (
    <div className="content">
      <h1 className="content__title">Ноутбуки и компьютерная техника</h1>
      <div>
        <Carousel arrProps={ComputerLinksForCarousel} />
        <FakeAds />
      </div>
    </div>
  );
};

export default LaptopLinks;

import React, { useCallback, useContext, useRef } from 'react';
import axios from 'axios';

import LayoutCardsPage from '../../../../../Layouts/LayoutCardsPage';
import Carousel from '../../../../../components/UI/sliders/Carousel';
import BigSlider from '../../../../../components/UI/sliders/BigSlider';

// https://64bcef922320b36433c74332.mockapi.io/items

const LaptopsMonitorsLinks = () => {
  const picLinksCarousel = [
    {
      path: '/sistemnye-bloki',
      name: 'Системные блоки',
      imgUrl: 'https://static.mvideo.ru/media/Assets/img/pc/sistemnye-bloki-220x220.jpg',
    },
    {
      path: '/sistemnye-bloki',
      name: 'Системные блоки игровые',
      imgUrl: 'https://static.mvideo.ru/media/Assets/img/pc/igrovye-sistemnye-bloki-220x220.jpg',
    },
    {
      path: '/monitory',
      name: 'Мониторы',
      imgUrl: 'https://static.mvideo.ru/media/Assets/img/pc/monitory-220x220.jpg',
    },
    {
      path: '/sistemnye-bloki',
      name: 'Системные блоки',
      imgUrl: 'https://static.mvideo.ru/media/Assets/img/pc/sistemnye-bloki-220x220.jpg',
    },
    {
      path: '/sistemnye-bloki',
      name: 'Системные блоки игровые',
      imgUrl: 'https://static.mvideo.ru/media/Assets/img/pc/igrovye-sistemnye-bloki-220x220.jpg',
    },
    {
      path: '/monitory',
      name: 'Мониторы',
      imgUrl: 'https://static.mvideo.ru/media/Assets/img/pc/monitory-220x220.jpg',
    },
  ];
  return (
    <div className="content">
      <h1 className="content__title">Компьютерная техника</h1>
      <div>
        <Carousel arrProps={picLinksCarousel} />
        <BigSlider />
      </div>
    </div>
  );
};

export default LaptopsMonitorsLinks;

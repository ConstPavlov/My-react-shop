import React, { useCallback, useContext, useRef } from 'react';
import axios from 'axios';

import Categories from '../components/Categories';
import Sidebar from '../components/Sidebar';
import ChangeContext, { TypeChangeContext } from '../context/ChangeContext';
import CardBlock from '../components/CardBlock';
import Sort, { sortNamesType } from '../components/Sort';
import LayoutCardsPage from '../Layouts/LayoutCardsPage';
import { brandNamesType } from '../redux/filter/types';
import BigSlider from '../components/UI/sliders/BigSlider';
import Carousel from '../components/UI/sliders/Carousel';

// https://64bcef922320b36433c74332.mockapi.io/items

const Kompyutery: React.FC = () => {
  const ComputerLinksForCarousel = [
    {
      path: '/televizory-i-cifrovoe-tv',
      name: 'Телевизоры',
      imgUrl: '	https://img.mvideo.ru/catimg/Dir_1_L.jpg',
    },
    {
      path: '/laptops-i-monitors',
      name: 'По диагонали',
      imgUrl: 'https://img.mvideo.ru/catimg/menu_diag_220x220.jpg',
    },
    {
      path: '/planshets-i-el-books',
      name: 'Цифровое/спутниковое ТВ',
      imgUrl: 'https://img.mvideo.ru/catimg/Cls_191_L.jpg',
    },
    {
      path: '/komputernye-komplektuushhie',
      name: 'Проекторы и экраны',
      imgUrl:
        'https://static.mvideo.ru/media/Assets/img/catalog/televizory-i-cifrovoe-tv-1/proektori-i-ekrani.png',
    },

    {
      path: '/periferiinye-ustroistva',
      name: 'Периферийные устройства',
      imgUrl:
        'https://static.mvideo.ru/media/Assets/img/catalog/televizory-i-cifrovoe-tv-1/accessuari.png',
    },
    {
      path: '/komputernye-aksessuary',
      name: 'Комплектующие',
      imgUrl:
        'https://static.mvideo.ru/media/Assets/img/catalog/televizory-i-cifrovoe-tv-1/komplektuushie.png',
    },
  ];
  return (
    <div className="content">
      <h1 className="content__title">Телевизоры и цифровое ТВ</h1>
      <div>
        <Carousel arrProps={ComputerLinksForCarousel} />
        <BigSlider />
      </div>
    </div>
  );
};

export default Kompyutery;

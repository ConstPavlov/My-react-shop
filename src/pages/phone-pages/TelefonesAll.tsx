import React, { useRef } from 'react';
import Carousel from '../../components/UI/sliders/Carousel';
import Categories from '../../components/Categories';
import Sidebar from '../../components/Sidebar';
import BigSlider from '../../components/UI/sliders/BigSlider';

const TelefonesAll: React.FC = () => {
  const telLinksForCarousel = [
    {
      path: '/smartfony-i-svyaz',
      name: 'Смартфоны, мобильные телефоны',
      imgUrl: '	https://static.mvideo.ru/media/Assets/menu/SMPh_3.png',
    },
    {
      path: '/samsung',
      name: 'Samsung',
      imgUrl: 'https://static.mvideo.ru/media/Assets/menu/cat/samsung_cat.png',
    },
    {
      path: '/honor',
      name: 'HONOR',
      imgUrl: 'https://static.mvideo.ru/media/Assets/img/catalog/telefony/honor-220x220.jpg',
    },
    {
      path: '/gadgets',
      name: 'Гаджеты',
      imgUrl: 'https://static.mvideo.ru/media/Assets/menu/Dir_165_L.png',
    },
    {
      path: '/aksessuars',
      name: 'Аксессуары для смартфонов',
      imgUrl: 'https://static.mvideo.ru/media/Assets/menu/akses.jpg',
    },
  ];
  return (
    <>
      <div className="content">
        <h1 className="content__title">Телефоны</h1>
        <div className="telefones__category">
          <Carousel arrProps={telLinksForCarousel} />
          <BigSlider />
        </div>
      </div>
    </>
  );
};



export default TelefonesAll;

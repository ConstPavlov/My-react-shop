import React, { useRef } from 'react';
import FakeAds from '../../../../../components/UI/fake-ads/FakeAds';
import Carousel from '../../../../../features/Carousel';

const TelevizoryICifTv: React.FC = () => {
  const telLinksForCarousel = [
    {
      path: '/televizory-all',
      name: '  Все телевизоры',
      imgUrl: '	https://img.mvideo.ru/catimg/Cls_1_L.jpg',
    },
    {
      path: '/televizory-4k',
      name: '4K (UHD) телевизоры',
      imgUrl: 'https://img.mvideo.ru/catimg/Grp_2095_L.jpg',
    },
    {
      path: '/honor',
      name: 'LED 8K телевизоры',
      imgUrl: 'https://img.mvideo.ru/catimg/Grp_2666_L.jpg',
    },
    {
      path: '/gadgets',
      name: 'Смарт-телевизоры ',
      imgUrl: 'https://img.mvideo.ru/catimg/smart-televizory-220x220.jpg',
    },
    {
      path: '/aksessuars',
      name: 'QLED-телевизоры',
      imgUrl: 'https://img.mvideo.ru/catimg/qled-televizory-220x220.jpg',
    },
  ];
  return (
    <>
      <div className="content">
        <h1 className="content__title">Телевизоры </h1>
        <div className="telefones__category">
          <Carousel arrProps={telLinksForCarousel} />
          <FakeAds />
        </div>
      </div>
    </>
  );
};

export default TelevizoryICifTv;

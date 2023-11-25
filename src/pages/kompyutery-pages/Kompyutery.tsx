import React from 'react';
import BigSlider from '../../components/UI/sliders/BigSlider';
import Carousel from '../../components/UI/sliders/Carousel';

const Kompyutery: React.FC = () => {
  const ComputerLinksForCarousel = [
    {
      path: '/noutbuki-planshety-komputery-links',
      name: 'Ноутбуки',
      imgUrl: '	https://static.mvideo.ru/media/Assets/img/pc/noutbuki-220x220.jpg',
    },
    {
      path: '/laptops-i-monitors',
      name: 'Компьютеры и мониторы',
      imgUrl: 'https://static.mvideo.ru/media/Assets/img/pc/kompyutery-i-monitory-220x220.jpg',
    },
    {
      path: '/planshets-i-el-books',
      name: 'Планшеты и электронные книги',
      imgUrl:
        'https://static.mvideo.ru/media/Assets/img/menu/Planshety-i-elektronnye-knigi-220x220.jpg',
    },
    {
      path: '/komputernye-komplektuushhie',
      name: 'Компьютерные комплектующие',
      imgUrl: 'https://static.mvideo.ru/media/Assets/img/pc/komplektuyushchie-220x220.jpg',
    },

    {
      path: '/periferiinye-ustroistva',
      name: 'Периферийные устройства',
      imgUrl: 'https://static.mvideo.ru/media/Assets/img/pc/periferijnye-ustrojstva-220x220.jpg',
    },
    {
      path: '/komputernye-aksessuary',
      name: 'Аксессуары',
      imgUrl: 'https://static.mvideo.ru/media/Assets/img/pc/aksessuary-220x220.jpg',
    },
  ];
  return (
    <div className="content">
      <h1 className="content__title">Компьютеры</h1>
      <div>
        <Carousel arrProps={ComputerLinksForCarousel} />
        <BigSlider />
      </div>
    </div>
  );
};

export default Kompyutery;

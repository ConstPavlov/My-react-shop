import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Carousel: React.FC<any> = ({ arrProps }) => {
  const carouselRef = useRef<HTMLDivElement | any>(null);
  const slide = useRef<HTMLDivElement | any>(null);

  const [dataMobiles, setDataMobiles] = React.useState(arrProps);
  let isDragging: boolean = false,
    startX: number,
    startScrollLeft: number;

  const mobilLinks = dataMobiles.map((mobLink: any) => (
    <Link className="carousel-link" to={mobLink.path} key={mobLink.path} ref={slide}>
      <div className="carousel-picture">
        <img className="carousel-img" src={mobLink.imgUrl} alt={mobLink.path} />
      </div>
      <div className="carousel-name">{mobLink.name}</div>
    </Link>
  ));

  const moveCarouselStart = (e: any) => {
    if (carouselRef.current) {
      isDragging = true;
      carouselRef.current.classList.add('dragging');
      startX = e.pageX;
      console.log(startX);
      startScrollLeft = carouselRef.current.scrollLeft;
      console.log(startScrollLeft);
    }
  };
  const moveCarousel = (e: any) => {
    if (!isDragging) return;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = startScrollLeft + (e.pageX - startX);
    }
  };

  const stopCarousel = () => {
    isDragging = false;
    carouselRef.current.classList.remove('dragging');
    carouselRef.current.classList.add('no-dragging');
  };

  const backSlide = () => {
    if (slide.current && carouselRef.current) {
      console.log(slide.current.offsetWidth);
      carouselRef.current.scrollLeft -= slide.current.offsetWidth;
    }
  };
  const nextSlide = (e: any) => {
    if (slide.current && carouselRef.current) {
      console.log(slide.current.offsetWidth);
      carouselRef.current.scrollLeft += slide.current.offsetWidth;
    }
  };
  return (
    <div className="carousel-wrapper">
      <div onClick={backSlide}>
        <ArrowBackIosNewIcon className="arrow arrowBack" />
      </div>
      <div
        className="carousel"
        ref={carouselRef}
        onMouseMove={moveCarousel}
        onMouseDown={moveCarouselStart}
        onMouseUp={stopCarousel}>
        {mobilLinks}
      </div>
      <div onClick={nextSlide}>
        <ArrowForwardIosIcon className="arrow arrowNext" />
      </div>
    </div>
  );
};

export default Carousel;

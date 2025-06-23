// src/components/carousel/ImageCarousel.tsx
import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './imagecarousel.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const images: string[] = Object.values(
  import.meta.glob('../../assets/img/carrousel/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' })
) as string[];


const ArrowLeft = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow custom-arrow-left`} onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

const ArrowRight = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow custom-arrow-right`} onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};


const ImageCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
     prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((img: string, index: number) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;

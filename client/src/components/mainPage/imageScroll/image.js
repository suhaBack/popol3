import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './imageScroll.css'

const SlideShow = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  // 자동으로 슬라이드 전환을 활성화
    autoplaySpeed: 4000,  // 각 슬라이드 간의 시간 간격 (밀리초 단위)
  };

  return (
    <>
    <div className='mainTitle'>이벤트 보고<span className='ga'>가!</span></div>
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`slide-${index}`} width="100%" height="100%"/>
        </div>
      ))}
    </Slider>
    </>
    
  );
};

export default SlideShow;
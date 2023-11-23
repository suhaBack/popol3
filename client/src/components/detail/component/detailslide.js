import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './detailslide.css'

function Detailsilde(props){
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  

  return (
<>
    <Slider {...settings}>
      {props.images.map((image, index) => (
        <div key={index}>
          <img onClick={()=>{
            props.setSelcetImg(image)
          }} src={image} alt={`slide-${index}`}  style={{ width: '100%', height: '100%' }}/>
        </div>
      ))}
    </Slider>
    </>
  )
}

export default Detailsilde;
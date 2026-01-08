'use client'
import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SliderContainer({ children }) {

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    rtl: false,
    dots: true,
    arrows: false, // ✅ correct prop
    slidesToShow: 3, // ⚠️ important: add this
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {children}
    </Slider>
  )
}

'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import React from 'react'
import TestimonialCards2 from "../Cards/TestimonialCards2";

export default function TestimonialCarousel2({ Testimonials }) {

    const settings = {
        className: "",
        centerMode: false,
        infinite: true,
        arrow: false,
        autoplay: true,
        speed: 500,
        rtl: false,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
        <div
            style={{
                borderRadius: "10px",
                padding: "10px",
                bottom: "0px" // Adjust this value to move them
            }}
        >
            <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
    ),
    };


    return (
        <Slider {...settings}>
            {
                Testimonials.map((testimonial, index) => (
                    <div className="h-full">

                        <TestimonialCards2 key={index} testimonialData={testimonial} />
                    </div>
                ))
            }
        </Slider>
    )
}

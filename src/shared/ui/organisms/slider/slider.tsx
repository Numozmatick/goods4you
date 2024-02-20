import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/dist/react-slick.min";
import './slider.css'

const CustomPaging = ({ images }) => {
    const settings = {
        dots: true,
        dotsClass: 'slick-dots slick-thumb',
        infinite: true,
        speed:  500,
        slidesToShow:  1,
        slidesToScroll:  1,
        customPaging: (i) => (
                <img src={images[i]} style={{ width: '60px', height: '60px' }} />
        ),
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CustomPaging;
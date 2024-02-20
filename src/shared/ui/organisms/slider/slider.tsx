import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/dist/react-slick.min";

interface CustomPagingProps {
    images: string[];
}

const CustomPaging: React.FC<CustomPagingProps> = ({ images }) => {
    const settings = {
        customPaging: function(i) {
            const imageUrl = images[i];
            return (
                <a>
                    <img src={imageUrl} alt={`Image ${i +  1}`} />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed:   500,
        slidesToShow:   1,
        slidesToScroll:   1
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((imageUrl, index) => (
                    <div key={index}>
                        <img src={imageUrl} alt={`Image ${index +  1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CustomPaging;
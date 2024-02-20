import React from 'react';
import './RatingStars.css'; // Импортируйте свой CSS файл

const RatingStars = ({ rating }) => {
    const stars = [];
    for (let i =  0; i <  5; i++) {
        stars.push(<i key={i} className={`star ${i < rating ? 'active' : ''}`} />);
    }

    return (
        <div className="rating">
            {stars}
        </div>
    );
};

export default RatingStars;
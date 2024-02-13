import React from 'react';
import Price from "../../../shared/ui/atoms/price";

interface CardProps {
    title: string;
    price: number;
    image: string;
}

function Card({title, price, image}:CardProps) {
    return (
        <div className={'card'}>
            <img className={'card__img'} src={image} alt={title}/>
            <div className={'card__title'}>{title}</div>
            <Price value={price} currency={" $"}/>
        </div>
    );
}

export default Card;

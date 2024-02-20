import React from 'react';
import Price from "../../../shared/ui/atoms/price/price";
import './card.css'

interface CardProps {
    title: string;
    price: number;
    image: string;
}

function Card({title, price, image}:CardProps) {
    return (
        <div className={'card'}>
            <div className={'card__wrapper'}>
                <img className={'card__img'} src={image} alt={title}/>
            </div>

            <div className={'card__title'}>{title}</div>
            <Price value={price} currency={"USD"}/>
        </div>
    );
}

export default Card;

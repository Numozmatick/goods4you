import React from 'react';

interface CardProps {
    title: string;
    image: string;
}

function CardForm({title, image}:CardProps) {
    return (
        <div className={'card_form'}>
            <img className={'card_form__img'} src={image} alt={title}/>

            <label className={'d-flex'}>
                <input type="checkbox" className='card_form__input' />
                <span className={'card_form__custom_checkbox'}></span>
                <div className={'card_form__title'}>{title}</div>
            </label>
        </div>
    );
}

export default CardForm;

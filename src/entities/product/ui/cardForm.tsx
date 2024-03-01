import React, {useState} from 'react';
import './cardForm.css'
interface CardProps {
    title: string;
    image?: string;
    register?: any;
    checked:boolean | string;
    onCheck: (string) => void
}


function CardForm({ title, register, checked, onCheck }:CardProps) {
    return (
        <div className={'card_form'}>
            <label className={'d-flex'}>
                <input
                    type="checkbox"
                    className='card_form__input'
                    {...register(title)}
                    checked={checked === title}
                    onClick={() => onCheck(title)}
                />
                <span className={'card_form__custom_checkbox'}></span>
                <div className={'card_form__title'}>{title}</div>
            </label>
        </div>
    );
}

export default CardForm
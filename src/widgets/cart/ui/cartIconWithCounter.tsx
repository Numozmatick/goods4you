import React from 'react';
import './cartIconWithCounter.css'

type CartIconWithCounterProps = {
    itemCount: number;
    onClick?: () => void;
};

const CartIconWithCounter: React.FC<CartIconWithCounterProps> = ({ itemCount, onClick }) => {
    return (
        <div className="cart cart__container d-flex align-items-center" onClick={onClick}>
            <span className={'cart__title'}>Cart</span>
            <div className={"cart__icon-wrapper"}>
                <img src="/icons/cart.svg" alt="Cart Icon" />
                <span className="cart__counter">{itemCount}</span>
            </div>

        </div>
    );
};

export default CartIconWithCounter;
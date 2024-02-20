import React from 'react';

const currencies = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    JPY: '¥',
    AUD: 'A$',
    CAD: 'C$',
    CNY: '¥',
    RUB: '₽',
    INR: '₹',
    BRL: 'R$'
};

interface PriceProps {
    value: number;
    currency: string;
}

const Price: React.FC<PriceProps> = ({value, currency}) => {
    return (
        <div className={'price'}>
            <span>{value}</span><span> {currencies[currency || 'USD']}</span>
        </div>

    );
};

export default Price;

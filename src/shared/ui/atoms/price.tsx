import React from 'react';


interface PriceProps {
    value: number;
    currency: string;
}

const Price: React.FC<PriceProps> = ({value, currency}) => {
    return (
        <div className={'price'}>
            <span>{value}</span><span>{currency}</span>
        </div>

    );
};

export default Price;

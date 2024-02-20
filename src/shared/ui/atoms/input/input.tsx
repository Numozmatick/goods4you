import React from 'react';
import './input.css'

type ButtonVariant = 'primary' | 'secondary';

export type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    outline?: boolean | string;
    variant?: ButtonVariant;
    fullWidth?: boolean | string
};

const Input: React.FC<ButtonProps> = ({
}) => {
    return <div className="input-group">
        <input type="text" className="input-group__input" placeholder="Recipient's username"
               aria-label="Recipient's username" aria-describedby="basic-addon2"/>
    </div>
}


export default Input;
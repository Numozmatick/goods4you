import React from 'react';
import './button.css'

type ButtonVariant = 'primary' | 'secondary';

export type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    outline?: boolean | string;
    variant?: ButtonVariant;
    fullWidth?: boolean | string
};

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           onClick,
                                           outline = false,
                                           variant = 'primary',
                                           fullWidth,
                                       }) => {
    const buttonClass = [
        'button',
        variant,
        outline ? 'button--outline' : '',
        fullWidth ? 'w-100': '',
    ].filter(Boolean).join(' ');

    return (
        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
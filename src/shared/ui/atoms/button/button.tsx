import React from 'react';
import './button.css'

type ButtonVariant = 'primary' | 'secondary';

export type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    outline?: boolean | string;
    variant?: ButtonVariant;
    fullWidth?: boolean | string;
    onKeyDown?:(e) => void;
    type?:"button" | "submit" | "reset";
    form?: string;
};

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           onClick,
                                           outline = false,
                                           variant = 'primary',
                                           fullWidth,
                                           onKeyDown,
                                           form,
                                            type
                                       }) => {
    const buttonClass = [
        'button',
        variant,
        outline ? 'button--outline' : '',
        fullWidth ? 'w-100': '',
    ].filter(Boolean).join(' ');

    return (
        <button className={buttonClass} onClick={onClick} onKeyDown={onKeyDown} tabIndex={0} role="button" form={form} type={type}>
            {children}
        </button>
    );
};

export default Button;
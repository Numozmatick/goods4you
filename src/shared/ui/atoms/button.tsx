import React from 'react';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    outline?: boolean;
    variant?: ButtonVariant; // Добавляем новый проп для варианта стиля
    fullWidth?: boolean | string
};

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           onClick,
                                           outline = false,
                                           variant = 'primary',
                                           fullWidth,// Устанавливаем значение по умолчанию для варианта стиля
                                       }) => {
    // Объединяем классы в зависимости от пропсов
    const buttonClass = [
        'button',
        variant, // Добавляем класс для варианта стиля
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
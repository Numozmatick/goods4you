import React from 'react';
import './errorBanner.css'

interface ErrorBannerProps {
    message?: string,
}

const ErrorBanner: React.FC<ErrorBannerProps> = ({message}) => {
    return (
        <div className="error-banner">
            <i className="error-banner__ico">&#9888;</i>
            <span
                className="error-banner__text">{ message || "Произошла неизвестная ошибка."}</span>
        </div>
    );
};

export default ErrorBanner;

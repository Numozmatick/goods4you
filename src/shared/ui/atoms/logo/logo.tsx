import React from 'react';


interface LogoProps {
    src: string;
    alt?: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
    return (
        <img src={src} alt={alt || 'Logo'} className="logo" />
    );
};

export default Logo;

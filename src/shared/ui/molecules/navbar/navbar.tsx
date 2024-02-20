import React from 'react';
import './navbar.css'

interface NavItem {
    url: string;
    text: string;
}

interface NavbarProps {
    positionVertical?: boolean,
    items: NavItem[];
    children?: any;
}

const Navbar: React.FC<NavbarProps> = ({ items, positionVertical = false, children}) => {
    return (
        <nav className={`navbar ${positionVertical ? "vertical-navbar" : "horizontal-navbar"}`}>
            <ul className={'navbar__list'}>
                {items.map((item, index) => (
                    <li className={'navbar__list-item'} key={index}>
                        <a className={'navbar__link'} href={item.url}>{item.text}</a>
                    </li>
                ))}
                {children}
            </ul>
        </nav>
    );
};

export default Navbar;

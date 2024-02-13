import React from 'react';
import './navbar.css'

interface NavItem {
    url: string;
    text: string;
}

interface NavbarProps {
    items: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
    return (
        <nav className="vertical-navbar">
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <a href={item.url}>{item.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;

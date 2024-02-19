import React from 'react';
import Logo from "../atoms/logo";
import Navbar from "../molecules/navbar";
import './footer.css'

const navItems = [
    {"url": "#catalog", "text": "Catalog"},
    {"url": "#about", "text": "About us"},
    {"url": "#product-selection", "text": "Product selection"},
    {"url": "#our-team", "text": "Our team"},
    {"url": "#shipping-payment", "text": "Shipping and payment"},
    {"url": "#contacts", "text": "Contacts"}
];

function Footer() {
    return (
        <footer className="footer footer--paddings">
            <div className={'container'}>
                <div className="row footer__row">
                    <div className="col-2 col-lg-3 col-sm-5 d-flex align-items-center justify-content-center">
                        <Logo src={'/images/logo.svg'} alt={'logo'}/>
                    </div>
                    <div className="col-8 col-lg-10 col-md-12 footer__navbar-col justify-content-end">
                        <Navbar items={navItems}/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

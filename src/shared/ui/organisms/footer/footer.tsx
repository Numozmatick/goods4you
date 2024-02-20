import React from 'react';
import Logo from "../../atoms/logo/logo";
import Navbar from "../../molecules/navbar/navbar";
import './footer.css'
import items from '../../../../app/settings/menu.settings.json';

const handleScrollClick = (targetId) => {
    const element = document.querySelector(`a[href="${targetId}"]`)
    if (element) {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId)
            if (targetElement){
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
};
items.forEach(item => {
    if(item.url.includes('#')){
        handleScrollClick(item.url);
    }
});


function Footer() {
    return (
        <footer className="footer footer--paddings">
            <div className={'container'}>
                <div className="row footer__row">
                    <div className="col-2 col-lg-3 col-sm-5 d-flex align-items-center justify-content-center">
                        <Logo src={'/images/logo.svg'} alt={'logo'}/>
                    </div>
                    <div className="col-8 col-lg-10 col-md-12 footer__navbar-col justify-content-end">
                        <Navbar items={items}/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

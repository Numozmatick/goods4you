import React from 'react';
import Navbar from "../../molecules/navbar/navbar";
import CartIconWithCounter from "../../../../widgets/cart/ui/cartIconWithCounter";
import './mobileMenu.css'

const navItems = [
    {"url": "#catalog", "text": "Catalog"},
    {"url": "#about-us", "text": "About us"},
    {"url": "#product-selection", "text": "Product selection"},
    {"url": "#our-team", "text": "Our team"},
    {"url": "#shipping-payment", "text": "Shipping and payment"},
    {"url": "#contacts", "text": "Contacts"}
];

const handleExitClick = () => {
    const mobileMenu = document.getElementById('MobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.add('d-none');
    }
    document.body.classList.add('stop-scrolling');
};

function MobileMenu() {
  return (
          <div className="mobile-menu d-none"
               id="MobileMenu">
              <div
                  className='mobile-menu__header d-flex justify-content-end align-items-center'>
                  <div
                      className="exit"
                      style={{ zIndex: 10000 }}
                      onClick={handleExitClick}
                  >
                      <svg width="20" height="21" xmlns="http://www.w3.org/2000/svg" fill="#fff">
                          <path d="M0 19 18.385.615l1.414 1.414L1.414 20.414z" />
                          <path d="m1.414 1 18.385 18.385-1.414 1.414L0 2.414z" />
                      </svg>
                  </div>

              </div>
              <div className={'mobile-menu__cart'}>
                  <CartIconWithCounter itemCount={0}/>
              </div>
              <hr className='hr'/>
              <div className="position-relative">
                  <div className="d-flex align-item-center justify-content-between">
                      <Navbar items={navItems} positionVertical={true}/>
                  </div>
              </div>
          </div>
  );
}

export default MobileMenu;

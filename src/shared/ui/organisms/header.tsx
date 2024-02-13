import React from 'react';
import Logo from "../atoms/logo";
import Navbar from "../molecules/navbar";
import CartIconWithCounter from "../../../widgets/cart/ui/cartIconWithCounter";
import './header.css'

const navItems = [
    {"url": "#catalog", "text": "Catalog"},
    {"url": "#about", "text": "About us"},
    {"url": "#product-selection", "text": "Product selection"},
    {"url": "#our-team", "text": "Our team"},
    {"url": "#shipping-payment", "text": "Shipping and payment"},
    {"url": "#contacts", "text": "Contacts"}
];

function Header() {
  return (
      <header className="container">
          <div className="row">
              <div className="col-2 d-flex align-items-center">
                      <Logo src={'/images/logo.svg'} alt={'logo'}/>
              </div>
              <div className="col-7 ml-auto">
                  <Navbar items={navItems}/>
              </div>
                <div className="col-2 d-flex justify-content-between">
                    <CartIconWithCounter itemCount={0}/>
                </div>
          </div>
          <hr className='hr'/>

      </header>
  );
}

export default Header;

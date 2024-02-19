import React from 'react';
import Logo from "../atoms/logo";
import Navbar from "../molecules/navbar";
import CartIconWithCounter from "../../../widgets/cart/ui/cartIconWithCounter";
import './header.css'

interface HeaderProps{
    position?:string;
    background?: string;
}

const navItems = [
    {"url": "#catalog", "text": "Catalog"},
    {"url": "#about", "text": "About us"},
    {"url": "#product-selection", "text": "Product selection"},
];

const handleMenuButtonClick = () => {
    const mobileMenu = document.getElementById('MobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.remove('d-none');
    }
};

function Header({position, background}:HeaderProps) {
  return (
      <header className={`container ${position || ''}`} style={{backgroundColor:background || 'transparent'}}>
          <div className="row header-row-position">
              <div className="col-2 col-lg-10 d-flex align-items-center">
                      <Logo src={'/images/logo.svg'} alt={'logo'}/>
              </div>
              <div className="col-7 ml-auto d-lg-none desktop-menu">
                  <Navbar items={navItems}/>
              </div>
              <div className="col-1 col-sm-2 d-none d-lg-block">
                  <div
                      className={`d-flex justify-content-end align-items-center h-100 pr-3 menu-button`}
                      onClick={handleMenuButtonClick}
                  >
                      <svg width="26" height="12" xmlns="http://www.w3.org/2000/svg" fill="#fff">
                          <rect x="0" y="0" width="26" height="2" />
                          <rect x="0" y="5" width="26" height="2" />
                          <rect x="0" y="10" width="26" height="2" />
                      </svg>
                  </div>
              </div>
                <div className="col-2 col-lg-1 d-lg-none header__cart d-flex align-items-center">
                    <div className={'w-100 justify-content-end d-flex'}>
                        <CartIconWithCounter itemCount={0}/>
                    </div>
                </div>
          </div>
          <hr className='hr'/>

      </header>
  );
}

export default Header;

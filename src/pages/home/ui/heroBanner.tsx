import React from 'react';
import Button from "../../../shared/ui/atoms/button";

function HeroBanner() {
    return (
      <div className={'container hero_banner'}>
          <div className={'row'} style={{backgroundImage: `url("/images/background_text.svg")`,backgroundRepeat: 'no-repeat',
              backgroundPosition: '50px 190px'}}>
              <div className={'hero-banner__content col-6'} >
                  <h1 className='h1'>Any products from famous brands with worldwide delivery</h1>
                  <p className={'hero-banner__description'}>We sell smartphones, laptops, clothes, shoes <br/> and many other products at low prices</p>
                  <div className={'hero-banner__button-wrapper'}>
                      <Button>Go to shopping</Button>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default HeroBanner;
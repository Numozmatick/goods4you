import React from 'react';
import './aboutUs.css'

function AboutUs() {
    return (
        <div className={'about-us d-flex align-items-center'} style={{backgroundImage: `url('/icons/figure.svg'), url('/images/about_us.png')`}}>
            <div className={'about-us__content container h-100 w-100'}>
                <div className={'row'}>
                    <div className={'col-6 about-us__col'}>
                        <span className={'about-us__title h2'}>About us</span>
                        <p className={'about-us__paragraph'}>
                            Every day a person has a choice what to spend his money on. Stores and websites offer an endless
                            list of products. <br/>But we will help you make the right choice!
                        </p>
                        <div className={'cite'}>
                            <hr/>
                            <span>Goods4you</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutUs;
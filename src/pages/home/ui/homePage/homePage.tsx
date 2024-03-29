import React from 'react';
import HeroBanner from "../heroBanner/heroBanner";
import Header from "../../../../shared/ui/organisms/header/header";
import Footer from "../../../../shared/ui/organisms/footer/footer";
import AboutUs from "../aboutUs/aboutUs";
import OurTeam from "../ourTeam/ourTeam";
import FAQ from "../faq/FAQ";
import Catalog from "../../../../features/catalog/ui/catalog";
import MultiStepForm from "../../../../features/multiStepForm/multiStepForm";

const products = [
    {
        id:  1,
        price:  110,
        image: '/images/sneakers.jpg',
        title: 'Nike Air Force 1 \'07 QS'
    },
    {
        id:  2,
        price:  110,
        image: '/images/sneakers.jpg',
        title: 'Nike Air Force 1 \'07 QS'
    },
    {
        id:  3,
        price:  110,
        image: '/images/sneakers.jpg',
        title: 'Nike Air Force 1 \'07 QS'
    },
    {
        id:  4,
        price:  110,
        image: '/images/sneakers.jpg',
        title: 'Nike Air Force 1 \'07 QS'
    },
    {
        id:  5,
        price:  110,
        image: '/images/sneakers.jpg',
        title: 'Nike Air Force 1 \'07 QS'
    },
    {
        id:  6,
        price:  110,
        image: '/images/sneakers.jpg',
        title: 'Nike Air Force 1 \'07 QS'
    },
    {
        id:  7,
        price:  110,
        image: '/images/sneakers.jpg',
        title: 'Nike Air Force 1 \'07 QS'
    },
    {
        id:  8,
        price:  110,
        image: '/images/sneakers.jpg',
        title: 'Nike Air Force 1 \'07 QS'
    },
    {
        id:  9,
        price:  110,
        image: '/images/sneakers.jpg',
        title: 'Nike Air Force 1 \'07 QS'
    },
];

function HomePage() {
    return (
      <>
          <div className={'header-wrapper'}>
              <HeroBanner/>
          </div>
          <div id='catalog'>
              <Catalog items={products}/>
          </div>
          <div id='about-us'>
              <AboutUs/>
          </div>
          <div id='product-selection'>
            <MultiStepForm/>
          </div>
          <div id='our-team'>
              <OurTeam/>
          </div>
          <div id='FAQ'>
              <FAQ/>
          </div>
      </>
    );
}

export default HomePage;

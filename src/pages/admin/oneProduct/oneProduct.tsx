import React, { useEffect, useState, useRef } from 'react';
import ProductGrid from "../../../shared/ui/organisms/productGrid/productGrid";
import SearchInput from "../../../shared/ui/molecules/searchInput/searchInput";
import Button from "../../../shared/ui/atoms/button/button";
import './oneProduct.css'
import {
    fetchAllProductsCategories,
    fetchProductsOfCategory
} from "../../../features/catalog/store/reducers/catalog.reducer";

import { useParams } from 'react-router-dom';
import {getLimitedProducts, searchProducts} from "../../../features/allProduct/store/reducers/allProduct.reducer";
import {useDispatch, useSelector} from "react-redux";
import Slider from "../../../shared/ui/organisms/slider/slider";
import {getProductById} from "../../../features/oneProduct/store/reducers/oneProduct.reducer";

function OneProduct() {

    const { id } = useParams();

    const dispatch = useDispatch();
    const somePartOfState = useSelector(state => state);
    console.log(somePartOfState,'ggg')

    useEffect(() => {
        //@ts-ignore
        dispatch(getProductById(id))
    }, [id]);
    //@ts-ignore
    const product = useSelector((state) => state.product);
    const card = {
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            discount: product.discountPercentage,
            rating: product.rating,
            stock: product.stock,
            brand: product.brand,
            category: product.category,
            image: product.images && product.images[0],
            thumbnail: product.thumbnail
        };




    return (
        <div className={'container all-products'}>
            <h2 className={'all-products__title'}>{product.title}</h2>
            <div className="all-products__slider">
             <Slider images={product.images}/>
            </div>
            <div className="all-products__parameters">

            </div>
        </div>
    );
}

export default OneProduct;
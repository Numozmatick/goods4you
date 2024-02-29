import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from '../../../shared/ui/organisms/slider/slider';
import {useGetProductByIdQuery} from '../../../features/catalog/store/reducers/catalog.reducer';
import './oneProduct.css'
import Price from "../../../shared/ui/atoms/price/price";

const OneProduct: React.FC = () => {
    const { id } = useParams();
    const { data: product, isLoading } = useGetProductByIdQuery(id); // Используйте сгенерированный хук

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }


    return (

        <div className={'container one-product'}>
            <h2 className={'one-product__title'}>{product.title}</h2>
            <div className={'d-flex'}>
                <div className="one-product__slider">
                    <Slider images={product.images} />
                </div>
                <div className="one-product__parameters">
                    <h3>{product.title}</h3>
                    {/*<div className="one-product__raiting">*/}
                    {/*    <span className="one-product__param-title">Raiting</span>*/}
                    {/*    <span className="one-product__param-value">{product.raiting}</span>*/}
                    {/*</div>*/}
                    <div className="one-product__param">
                        <span className="one-product__param-title">Base price</span>
                        <span className="one-product__param-value"> <Price value={product.price} currency={'USD'}/></span>
                    </div>
                    <div className="one-product__param">
                        <span className="one-product__param-title">Discount Percentage</span>
                        <span className="one-product__param-value">{product.discountPercentage}</span>
                    </div>
                    <div className="one-product__param">
                        <span className="one-product__param-title">Discount price</span>
                        <span className="one-product__param-value">{ Math.round(product.price - (product.price * product.discountPercentage /  100))}</span>
                    </div>
                    <div className="one-product__param">
                        <span className="one-product__param-title">Stock</span>
                        <span className="one-product__param-value">{product.stock}</span>
                    </div>
                    <div className="one-product__param">
                        <span className="one-product__param-title">Category</span>
                        <span className="one-product__param-value">{product.category}</span>
                    </div>
                    <div className="one-product__param">
                        <span className="one-product__param-title">Description</span>
                        <span className="one-product__param-value">{product.description}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneProduct;
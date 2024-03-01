import React, { useState, useEffect } from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import Slider from '../../../shared/ui/organisms/slider/slider';
import {useGetProductByIdQuery} from '../../../features/catalog/store/reducers/catalog.reducer';
import './oneProduct.css'
import Price from "../../../shared/ui/atoms/price/price";
import Button from "../../../shared/ui/atoms/button/button";
import EditProduct from "../editProduct/editProduct";

function ProductView(product){
    return <div className="one-product__parameters">
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
        <div className={'one-product__btn'}>
            <Button onClick={()=>window.location.href = window.location.href + '?edit=true'}>Edit</Button>
        </div>

    </div>
}

const OneProduct: React.FC = () => {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const edit = searchParams.get('edit');
    const { data: product, isLoading } = useGetProductByIdQuery(id);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (

        <div className={'container one-product'}>
            <h2 className={'one-product__title'}>{product.title}</h2>
            <div className={'d-flex one-product__content'}>
                <div className="one-product__slider">
                    <Slider images={product.images} />
                </div>
                {edit ? <EditProduct product={product}/> : <ProductView {...product}/>}
            </div>
        </div>
    );
};

export default OneProduct;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Slider from '../../../shared/ui/organisms/slider/slider';
import { getProductById } from '../../../features/catalog/store/reducers/catalog.reducer';
import ProductService from '../../../entities/product/api/productService';
import './oneProduct.css'
import Price from "../../../shared/ui/atoms/price/price";

interface Product {
    title: string;
    images: string[];
    // другие поля продукта
}

const OneProduct: React.FC = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        //@ts-ignore
        dispatch(getProductById(id));
    }, [id]);

    useEffect(() => {
        const fetchProduct = async () => {
            const productService = new ProductService();
            const fetchedProduct = await productService.getProductById(id);
            //@ts-ignore
            setProduct(fetchedProduct);
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
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
                        <span className="one-product__param-value"> <Price value={product.price}/></span>
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
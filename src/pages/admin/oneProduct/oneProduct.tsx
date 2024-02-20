import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Slider from '../../../shared/ui/organisms/slider/slider';
import { getProductById } from '../../../features/catalog/store/reducers/catalog.reducer';
import ProductService from '../../../entities/product/api/productService';
import './oneProduct.css'

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
        <div className={'container one-products'}>
            <h2 className={'one-products__title'}>{product.title}</h2>
            <div className="one-products__slider">
                <Slider images={product.images} />
            </div>
            <div className="one-products__parameters">
                {/* ... */}
            </div>
        </div>
    );
};

export default OneProduct;
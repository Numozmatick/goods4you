import React, { useEffect, useState, useRef } from 'react';
import ProductGrid from "../../../shared/ui/organisms/productGrid/productGrid";
import SearchInput from "../../../shared/ui/molecules/searchInput/searchInput";
import Button from "../../../shared/ui/atoms/button/button";
import './adminPage.css'
import {
    fetchAllProductsCategories,
    fetchProductsOfCategory
} from "../../../features/catalog/store/reducers/catalog.reducer";
import {getLimitedProducts, searchProducts} from "../../../features/catalog/store/reducers/catalog.reducer";
import {useDispatch, useSelector} from "react-redux";

function AdminPage() {
    const [value, setValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const timeoutRef = useRef(null);
    const valueRef = useRef(value);

    const dispatch = useDispatch();
    //@ts-ignore
    const products = useSelector((state) => state.products);
    const cards = products.map((product)=>{
        return {
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
        }
    });

    function search(){
        //@ts-ignore
        dispatch(searchProducts({query:valueRef.current}));
    }

    function handleButton(){
        //@ts-ignore
        clearTimeout(timeoutRef.current);
        search();
    }

    useEffect(() => {
        valueRef.current = value;
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        //@ts-ignore
        timeoutRef.current = setTimeout(() => {
            search();
        },   1000);
    }, [value]);

    useEffect(() => {
        //@ts-ignore
        dispatch(getLimitedProducts({limit:9, skip: products.length, select:'title,price,images'}))
    }, []);
    const somePartOfState = useSelector(state => state);
    console.log(somePartOfState,'tt')

    return (
        <div className={'container all-products'}>
            <h2 className={'all-products__title'}>All product</h2>
            <div className="input-group">
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="input-group__input" placeholder="Search by title"
                       aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div className="input-group__append">
                    <Button onClick={() => handleButton()}>Search</Button>
                </div>
            </div>
            <ProductGrid items={cards}/>
        </div>
    );
}

export default AdminPage;
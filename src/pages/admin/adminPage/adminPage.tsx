import React, {useEffect, useRef, useState} from 'react';
import ProductGrid from "../../../shared/ui/organisms/productGrid/productGrid";
import Button from "../../../shared/ui/atoms/button/button";
import './adminPage.css';

import {
    useGetLimitedProductsQuery,
    useSearchProductsQuery
} from "../../../features/catalog/store/reducers/catalog.reducer";
import useDebounce from "../../../shared/hooks/useDebounce";

function AdminPage() {
    const [limit, setLimit] = useState(9)
    const { data: catalog, isLoading: isCatalogLoading } = useGetLimitedProductsQuery({ limit: limit, skip: 0, select: 'title,price,images' });
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, debounceHandlerRef, setValueNow] = useDebounce(searchTerm, 1000);
    const [shouldSkipDebounce, setShouldSkipDebounce] = useState(false);
    const { data: searchResult = [], error, refetch, isLoading: isSearchLoading } = useSearchProductsQuery(debouncedSearchTerm);


    useEffect(() => {
        if (!shouldSkipDebounce) {
            refetch();
        }
        setShouldSkipDebounce(false);
    }, [debouncedSearchTerm, refetch, shouldSkipDebounce]);

    const isLoading = isCatalogLoading || isSearchLoading;

    //@ts-ignore"
    const cards = (searchResult?.products || catalog?.products || []).map((product) => ({
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
    }));

    const handleSearch = () => {
        setShouldSkipDebounce(true);
        clearTimeout(debounceHandlerRef.current);
        setValueNow(searchTerm);
        refetch();
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            //@ts-ignore
            handleSearch(e);
        }
    };

    return (
        <div className={'container all-products'}>
            <h2 className={'all-products__title'}>All product</h2>
            <div className="input-group">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input-group__input"
                    placeholder="Search by title"
                    aria-label="Search by title"
                    aria-describedby="basic-addon2"
                />
                <div className="input-group__append">
                    <Button onClick={handleSearch}>Search</Button>
                </div>
            </div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <ProductGrid items={cards} />
                    {cards.length ? <div className='d-flex w-100 justify-content-center catalog__button'>
                        <Button onClick={()=> setLimit(limit + 9)}>Show more</Button>
                    </div> : ''}
                </>


            )}
        </div>
    );
}

export default AdminPage;
import React, {useEffect, useState} from 'react';
import Button from "../../../shared/ui/atoms/button/button";

import Filter from "../../filter/ui/filter";
import './catalog.css'

import {useFetchAllProductsCategoriesQuery, useFetchProductsOfCategoryQuery} from "../store/reducers/catalog.reducer";
import ProductGrid from "../../../shared/ui/organisms/productGrid/productGrid";

interface Item {
    id: number;
    title: string;
    price: number;
    image: string;
}

interface CatalogProps {
    items: Item[];
}

interface CatalogData {
    catalog: any;
    pushCatalog: () => { payload: any; type: "catalogSlice/addToList" };
}

const Catalog: React.FC<CatalogProps> = ({items}) => {
    const [selectedFilter, setSelectedFilter] = useState("smartphones");

    const {data:categories = [], isLoading} =  useFetchAllProductsCategoriesQuery()
    const {data = [], error} = useFetchProductsOfCategoryQuery({category:selectedFilter, skip:0})
    const [skip, setSkip] = useState(0);
    //@ts-ignore
    const catalog = data?.products  || [];
    const limit = 9;
    useEffect(() => {
        setSkip(skip + limit);
    }, []);

    function showMoreHandler() {
        setSkip(skip + limit);
    }

    const cards = catalog.map((catalog)=>{
        return {
            id: catalog.id,
            title: catalog.title,
            description: catalog.description,
            price: catalog.price,
            discount: catalog.discountPercentage,
            rating: catalog.rating,
            stock: catalog.stock,
            brand: catalog.brand,
            category: catalog.category,
            image: catalog.images && catalog.images[0],
            thumbnail: catalog.thumbnail
        }
    });

    const mapCategories = categories.map((category)=>{
        return {
            value: category,
            label: category
        }
    })

    if(isLoading) return <h3>Loading...</h3>
    return (
        <div className='catalog container'>
            <div className='row'>
                <h2 className='catalog__title h2'>
                    Catalog
                </h2>
            </div>
            <div className='row justify-content-between'>
                <aside className='catalog__filter px-0'>
                    <div className='filter__wrapper'>
                        <Filter filters={mapCategories} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
                    </div>
                </aside>
                <div className="catalog__wrapper">
                    <ProductGrid items={cards}/>
                    {catalog.length > limit ? <div className='d-flex w-100 justify-content-center catalog__button'>
                        <Button onClick={showMoreHandler}>Show more</Button>
                    </div> : ''}
                    {/*{!catalog.length ? <h2 style={{textAlign:'center'}}>There are no products in this category</h2> : ''}*/}
                </div>
            </div>
        </div>
    );
}
export default Catalog;

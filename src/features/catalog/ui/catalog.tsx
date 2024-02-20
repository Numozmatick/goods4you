import React, {useEffect, useState} from 'react';
import Button from "../../../shared/ui/atoms/button/button";
import Card from "../../../entities/product/ui/card";
import Filter from "../../filter/ui/filter";
import './catalog.css'
import useCatalog from "../hooks/use.catalog.hook";
import {useDispatch, useSelector} from "react-redux";
import ProductService from "../../../entities/product/api/productService";
import {addToList, fetchAllProductsCategories, fetchProductsOfCategory} from "../store/reducers/catalog.reducer";

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
    //@ts-ignore
    const catalog = useSelector((state) => state.products);
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
    //@ts-ignore
    const categories = useSelector((state) => state.categories);
    const dispatch = useDispatch();
    useEffect(() => {
        //@ts-ignore
        dispatch(fetchAllProductsCategories())
        // const { catalog, pushCatalog } = useCatalog as unknown as CatalogData;
    }, []);

    useEffect(() => {
        //@ts-ignore
        dispatch(fetchProductsOfCategory({category:selectedFilter}))
    },[])

    const limit = 9;

    function showMoreHandler(){
        //@ts-ignore
        dispatch(fetchProductsOfCategory({category:selectedFilter, skip: catalog.length}))
    }

    const somePartOfState = useSelector(state => state);
    console.log(somePartOfState,'tt')
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
                        <Filter filters={categories} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
                    </div>
                </aside>
                <div className="catalog__wrapper">
                        <div className='catalog__grid'>

                            {cards.map((item) => (
                                <div key={item.id}>
                                    <Card {...item}/>
                                </div>
                            ))}
                        </div>
                    {catalog.length > limit ? <div className='d-flex w-100 justify-content-center catalog__button'>
                        <Button onClick={showMoreHandler}>Show more</Button>
                    </div> : ''}
                    {!catalog.length ? <h2 style={{textAlign:'center'}}>There are no products in this category</h2> : ''}
                </div>
            </div>
        </div>
    );
}
export default Catalog;

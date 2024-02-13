import React from 'react';
import Button from "../../../shared/ui/atoms/button";
import Card from "../../../entities/product/ui/card";
import Filter from "../../filter/ui/filter";

interface Item {
    id: number;
    title: string;
    price: number;
    image: string;
}

interface CatalogProps {
    items: Item[];
}

const Catalog: React.FC<CatalogProps> = ({items}) => {
    return (
        <div className='catalog container'>
            <div className='row'>
                <h2 className='catalog__title h2'>
                    Catalog
                </h2>
            </div>
            <div className='row justify-content-between'>
                <div className='catalog__filter px-0'>
                    <div className='filter__wrapper'>
                        <Filter/>
                    </div>
                </div>
                <div className="catalog__wrapper">
                        <div className='catalog__grid'>
                            {items.map((item) => (
                                <div key={item.id}>
                                    <Card {...item}/>
                                </div>
                            ))}
                        </div>
                    <div className='d-flex w-100 justify-content-center catalog__button'>
                        <Button>Show more</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Catalog;

import React from 'react';
import Card, {CardProps} from "../../../../entities/product/ui/card";
import './productGrid.css'

interface gridItemProps extends CardProps {
    id: number
}

interface productGridProps {
    items: gridItemProps[]
}

const ProductGrid: React.FC<productGridProps> = ({items}) => {

    return (
        <div className='product__grid'>
            {items.map((item) => (
                <a href={`/admin/product/${item.id}`} key={item.id}>
                    <Card {...item}/>
                </a>
            ))}
        </div>
    );
}
export default ProductGrid;

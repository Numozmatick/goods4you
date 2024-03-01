import React from 'react';
import { useForm } from 'react-hook-form';
import {useUpdateProductMutation} from "../../../features/catalog/store/reducers/catalog.reducer";
import Button from "../../../shared/ui/atoms/button/button";
import {useNavigate} from "react-router-dom";
import './editProduct.css'

function EditProduct({ product }) {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm({
        defaultValues: {
            price: product.price,
            discountPercentage: product.discountPercentage,
            stock: product.stock,
            category: product.category,
            description: product.description,
        },
    });
    const [updateProduct, { isLoading }] = useUpdateProductMutation();
    const onSubmit = async (data) => {
        try {
            await updateProduct({id:product.id, params:data}).unwrap();

            const removeEditQueryParamAndRedirect = () => {
                const currentPath = window.location.pathname + window.location.search;
                const urlWithoutQuery = currentPath.split('?')[0];
                navigate(urlWithoutQuery, { replace: true });
            };
            removeEditQueryParamAndRedirect();
            console.log('Продукт обновлен');
        } catch (error) {
            console.error('Ошибка обновления продукта', error);
        }
    };

    return (
        <form className={'edit-product__form'} onSubmit={handleSubmit(onSubmit)}>
            <div className="edit-product__param">
                <span className="edit-product__param-title">Base price</span>
                <input {...register("price")} type="number"  />
            </div>
            <div className="edit-product__param">
                <span className="edit-product__param-title">Discount Percentage</span>
                <input {...register("discountPercentage")} type="number" step="0.1"  />
            </div>
            <div className="edit-product__param">
                <span className="edit-product__param-title">Stock</span>
                <input {...register("stock")} type="number"  />
            </div>
            <div className="edit-product__param">
                <span className="edit-product__param-title">Category</span>
                <input {...register("category")} type="text"  />
            </div>
            <div className="edit-product__param">
                <span className="edit-product__param-title">Description</span>
                <textarea {...register("description")}  />
            </div>
            <Button type={'submit'}>Save</Button>
        </form>
    );
}

export default EditProduct;
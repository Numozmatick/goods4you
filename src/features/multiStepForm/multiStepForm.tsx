import React, {useState} from 'react';
import Button from "../../shared/ui/atoms/button/button";

import './multiStepForm.css'
import {
    useFetchAllProductsCategoriesQuery, useFetchProductsOfCategoryQuery
} from "../catalog/store/reducers/catalog.reducer";
import {useForm} from "react-hook-form";
import ErrorBanner from "../../shared/ui/molecules/errorBanner/errorBanner";
import {useDispatch} from "react-redux";
import CardForm from "../../entities/product/ui/cardForm";
import ProductGrid from "../../shared/ui/organisms/productGrid/productGrid";

function Step2({category}) {
    const {data = [], error} = useFetchProductsOfCategoryQuery({category:category, skip:0})
    //@ts-ignore
    const catalog = data?.products  || [];
    const filterCatalog = [...catalog].sort((a, b) => b.rating - a.rating).slice(0, 3)
    const cards = filterCatalog.map((catalog)=>{
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
    return (
        <div className={'card_form'}>
            <ProductGrid items={cards} />
        </div>
    );
}

const Step1= ({selectedCategory, inputHandler, onSubmit}) => {
    const { data: categories = [], isLoading } = useFetchAllProductsCategoriesQuery();
    const { register, handleSubmit } = useForm();

    if (isLoading) {
        return <div>Loading categories...</div>;
    }

    const cards = categories.map((category) => ({
        id: category,
        title: category
    }));

    return <form id="Step1" onSubmit={handleSubmit(onSubmit)} className={'form'}>
        <div className={'form__title'}>What type of product are you considering?</div>
        <div className={'form__grid'}>
            {cards.map((card) => (
                <div key={card.id}>
                    <CardForm
                        register={register}
                        title={card.title}
                        onCheck={inputHandler}
                        checked={selectedCategory || false}
                    />
                </div>
            ))}
        </div>
    </form>
}

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [hasError, setHasError] = useState(false);

    const onSubmit = (data) => {
        setHasError(false);
        if (Object.values(data).every((value) => value === false)) {
            setHasError(true);
            return;
        }

        if (step < 2) {
            setStep(step + 1);
        }
    };

    const [selectedCategory, setSelectedCategory] = useState('');

    function inputHandler(category){
        if(selectedCategory === category){
            setSelectedCategory('')
        }
        setSelectedCategory(category)
    }

    function getButton(param){
        if(param.step === 2){
           return <Button outline={true} onClick={()=>{param.setStep(1); setSelectedCategory('')}}>Change selection</Button>
        }
        return <Button outline={true} type={'submit'} form="Step1">Next step</Button>
    }

    return (
        <div className={'container'}>
            <div className={'multistepform'}>
                <div className={'multistepform__title'}>We will select the perfect product for you</div>
                <div className={'multistepform__description'}>Answer three questions and we will send you a catalog with the most suitable products for you.</div>
                <hr className={'multistepform__hr-header'}/>
                {step === 1 && (
                    <Step1 selectedCategory={selectedCategory} inputHandler={inputHandler} onSubmit={onSubmit}/>
                )}
                {step === 2 && <Step2 category={selectedCategory} />}
                <hr className={'multistepform__hr-footer'}/>
                {hasError ?  <ErrorBanner message={'Выберите категорию'}/> : ''}
                <div className={'d-flex justify-content-between multistepform__footer'}>
                    <div>{`${step} of 2`}</div>
                    {getButton({step, setStep:setStep, setSelectedCategory:setSelectedCategory})}
                </div>

            </div>

        </div>
    );
};

export default MultiStepForm;

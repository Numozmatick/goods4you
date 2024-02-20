import React, {useEffect} from 'react';
import Button from "../../shared/ui/atoms/button/button";
import CardForm from "../../entities/product/ui/cardForm";
import './multiStepForm.css'
import {fetchAllProductsCategories} from "../catalog/store/reducers/catalog.reducer";
import {useDispatch, useSelector} from "react-redux";

// Main form component
const MultiStepForm = () => {
    // const { formData } = useContext(FormContext);
    //@ts-ignore
    const categories = useSelector((state) => state.categories);
    const cards = categories.map((catalog)=>{
        return {
            id: catalog.value,
            title: catalog.value,
        }
    });
    const dispatch = useDispatch();
    useEffect(() => {
        //@ts-ignore
        dispatch(fetchAllProductsCategories());

    }, []);
    return (
        <div className={'container'}>
            <div className={'multistepform'}>
                <div className={'multistepform__title'}>We will select the perfect product for you</div>
                <div className={'multistepform__description'}>Answer three questions and we will send you a catalog with the most suitable products for you.</div>
                <hr className={'multistepform__hr-header'}/>
                <div className={'form'}>
                    <div className={'form__title'}>What type of product are you considering?</div>
                    <div className={'form__grid'}>
                        {cards.map((formItem)=>{
                            return <div key={formItem.id}>
                                <CardForm {...formItem}/>
                            </div>
                        })}
                    </div>
                </div>
                <hr className={'multistepform__hr-footer'}/>
                <div className={'d-flex justify-content-between multistepform__footer'}>
                    <div>1 of 3</div>
                    <Button outline={true}>Next step</Button>
                </div>
            </div>

        </div>
    );
};

export default MultiStepForm;

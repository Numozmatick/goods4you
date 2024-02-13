import React from 'react';
import Button from "../../shared/ui/atoms/button";
import CardForm from "../../entities/product/ui/cardForm";

const formItems = [
    {
        id:  1,
        image: '/images/sneakers2.jpg',
        title: 'sneakers'
    },
    {
        id:  2,
        image: '/images/sneakers2.jpg',
        title: 'sneakers'
    },
    {
        id:  3,
        image: '/images/sneakers2.jpg',
        title: 'sneakers'
    },
    {
        id:  4,
        image: '/images/sneakers2.jpg',
        title: 'sneakers'
    },
    {
        id:  5,
        image: '/images/sneakers2.jpg',
        title: 'sneakers'
    },
    {
        id:  6,
        image: '/images/sneakers2.jpg',
        title: 'sneakers'
    },
];

// Main form component
const MultiStepForm = () => {
    // const { formData } = useContext(FormContext);

    return (
        <div className={'container'}>
            <div className={'multistepform'}>
                <div className={'multistepform__title'}>We will select the perfect product for you</div>
                <div className={'multistepform__description'}>Answer three questions and we will send you a catalog with the most suitable products for you.</div>
                <hr className={'multistepform__hr-header'}/>
                <div className={'form'}>
                    <div className={'form__title'}>What type of product are you considering?</div>
                    <div className={'form__grid'}>
                        {formItems.map((formItem)=>{
                            return <CardForm {...formItem}/>
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

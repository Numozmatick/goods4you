import React, { useState } from 'react';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const toggleAccordion = (index:number) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };

    const faqItems = [
        { title: 'Question 1', content: 'Long answer to the first question' },
        { title: 'Question 2', content: 'Long answer to the first question' },
    ];

    return (
        <div className={'faq container'}>
            <h2 className={'faq__title h2'}>
                FAQ
            </h2>
            <hr/>
            {faqItems.map((item, index) => (
                <div key={index} className="faq__item">
                    <div
                        className={`faq__item-title ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <div>{item.title}</div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" fill="none"><path fill="#000" d="M12.95 12.362H25v1.3H12.95V26h-1.377V13.662H0v-1.3h11.573V0h1.378v12.362Z"/></svg>
                        </div>
                    </div>

                        <div className={`faq__content ${index === activeIndex ? 'open': ''}`}>
                            <p>{item.content}</p>
                        </div>

                </div>
            ))}
        </div>
    );
};

export default Faq;
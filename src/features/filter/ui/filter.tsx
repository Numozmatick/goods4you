import React from 'react';
import Button from "../../../shared/ui/atoms/button";
import './filter.css'

const filters = [
    { label: 'smartphones', value: 'smartphones' },
    { label: 'laptops', value: 'laptops' },
    { label: 'sneakers', value: 'sneakers1' },
    { label: 'sneakers', value: 'sneakers2' },
    { label: 'sneakers', value: 'sneakers3' },
    { label: 'sneakers', value: 'sneakers4' },
    { label: 'sneakers', value: 'sneakers5' },
    { label: 'sneakers', value: 'sneakers6' }
];

function Filter() {
    return (
        <div className={'filter'}>
            <div className={'filter__title'}>Selection <br/>by parameters</div>
            <div className={'filter__table-title'}>
                Category
            </div>
            <div className="filter__table">
                {filters.map((filter)=>
                    (
                        <div className="filter__cell">
                            <input type="checkbox" id={filter.value}/>
                            <label htmlFor={filter.value}>{filter.label}</label>
                        </div>
                    )
                )}
            </div>
            <Button variant={"secondary"} fullWidth={true}> Apply </Button>
            <div className="filter__reset">
                <a >Reset</a>
            </div>
        </div>
    );
}

export default Filter;

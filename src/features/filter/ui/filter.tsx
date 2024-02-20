import React from 'react';
import Button from "../../../shared/ui/atoms/button/button";
import './filter.css'
import {clearList, fetchProductsOfCategory} from "../../catalog/store/reducers/catalog.reducer";
import {useDispatch} from "react-redux";

function Filter({ filters, selectedFilter, setSelectedFilter }) {
    const dispatch = useDispatch();

    const handleCheckboxChange = (filter) => {
        setSelectedFilter(filter.value);
    };

    const search = ()=>{
        if(selectedFilter){
            //@ts-ignore
            dispatch(fetchProductsOfCategory({category:selectedFilter}))
        }
    }

    const resetHandler = () => {
        setSelectedFilter(null);
        dispatch(clearList())
    }

    return (
        <div className={'filter'}>
            <div className={'filter__title'}>Selection <br/>by parameters</div>
            <div className={'filter__table-title'}>
                Category
            </div>
            <div className="filter__table">
                {filters.map((filter) => (
                    <div className="filter__cell" key={filter.value}>
                        <input
                            type="checkbox"
                            id={filter.value}
                            checked={selectedFilter === filter.value}
                            onChange={() => handleCheckboxChange(filter)}
                        />
                        <div style={{height:'100%'}}>
                            <label htmlFor={filter.value}>{filter.label}</label>
                        </div>

                    </div>
                ))}
            </div>
            <Button variant={"secondary"} fullWidth={true} onClick={search}> Apply </Button>
            <div className="filter__reset" onClick={resetHandler}>
                <a className="filter__reset-link">Reset</a>
            </div>
        </div>
    );
}

export default Filter;

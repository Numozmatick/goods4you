import React from 'react';
import './searchInput.css'
import Button from "../../atoms/button/button";

interface SearchInput {
    value: string
    onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInput> = (value, onChange) => {
    return (
        <div className="input-group">
            <input type="text"  onChange={onChange} className="input-group__input" placeholder="Recipient's username"
                   aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div className="input-group__append">
                    <Button>Search</Button>
                </div>
        </div>
    );
};

export default SearchInput;

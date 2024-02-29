import { useState, useEffect } from 'react';
import { useSearchProductsQuery } from '../../../features/catalog/store/reducers/catalog.reducer';

const useSearchProducts = () => {
    const [value, setValue] = useState('');
    const [timeoutRef, setTimeoutRef] = useState(null);

    const { data: products, error, isLoading } = useSearchProductsQuery(value, {
        skip: !value,
    });

    useEffect(() => {
        if (timeoutRef) clearTimeout(timeoutRef);
        if (value) {
            const timeoutId = setTimeout(() => {
            }, 1000);
            setTimeoutRef(timeoutId);
        }
    }, [value]);

    return { value, setValue, products, error, isLoading };
};

export default useSearchProducts;
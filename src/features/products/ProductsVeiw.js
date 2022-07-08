import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from './ProductsSlice';

const ProductsVeiw = () => {
    const { isLoading, products, error } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    if (products) {
    }

    return (
        <div>

        </div >
    );
};

export default ProductsVeiw;
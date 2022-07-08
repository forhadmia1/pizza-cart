import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from './ProductCard';
import { fetchProducts } from './ProductsSlice';
import { Row } from 'react-bootstrap';

const ProductsVeiw = () => {
    const { isLoading, products, error } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div >
            <Row xs={1} md={2} className="g-4">
                {
                    products.map(product => <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>)
                }
            </Row>
        </div >
    );
};

export default ProductsVeiw;
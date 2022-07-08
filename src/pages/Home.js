import React from 'react';
import ProductsVeiw from '../features/products/ProductsVeiw';
import { Row, Col } from 'react-bootstrap';
import CartView from '../features/cart/CartView';

const Home = () => {
    return (
        <div className='container'>
            <Row className='mt-4'>
                <Col md={8}>
                    <ProductsVeiw />
                </Col>
                <Col md={4}>
                    <CartView />
                </Col>
            </Row>
        </div>
    );
};

export default Home;
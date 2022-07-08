import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cart/CartSlice';

const ProductCard = ({ product }) => {
    const { id, name, image, description, price } = product;
    const dispatch = useDispatch()
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>Price: ${price}</p>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="outline-primary" onClick={() => dispatch(addToCart(product))}>Add to cart</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProductCard;
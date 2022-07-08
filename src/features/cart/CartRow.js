import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const CartRow = ({ item }) => {
    const { id, name, description, image, price, quantity } = item;
    return (
        <div>
            <div className='d-flex'>
                <div className='me-2'>
                    <img width={100} src={image} alt='' />
                </div>
                <div>
                    <h6>{name}</h6>
                    <p>{description}</p>
                </div>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary">-</Button>
                        <span className='px-3'>{quantity}</span>
                        <Button variant="secondary">+</Button>
                    </ButtonGroup>
                </div>
                <h5>${price}</h5>
            </div>
            <hr />
        </div>
    );
};

export default CartRow;
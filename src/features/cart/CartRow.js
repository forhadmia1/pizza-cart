import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { increseQuantity, decreseQuantity, deleteItem } from './CartSlice';
import { MdDeleteOutline } from 'react-icons/md'

const CartRow = ({ item }) => {
    const { id, name, description, image, totalPrice, quantity } = item;
    const dispatch = useDispatch()
    return (
        <div className='px-2'>
            <div className='d-flex'>
                <div className='me-2'>
                    <img width={100} src={image} alt='' />
                </div>
                <div>
                    <h6>{name}</h6>
                    <p>{description}</p>
                </div>
            </div>
            <div className='d-flex justify-content-between align-items-center mt-3'>
                <div>
                    <ButtonGroup aria-label="Basic example">
                        {
                            quantity == 1 ? <Button variant="secondary" onClick={() => dispatch(deleteItem(id))}><MdDeleteOutline /></Button> : <Button variant="secondary" onClick={() => dispatch(decreseQuantity(id))}>-</Button>
                        }
                        <span className='px-3'>{quantity}</span>
                        <Button variant="secondary" onClick={() => dispatch(increseQuantity(id))}>+</Button>
                    </ButtonGroup>
                </div>
                <h5>${totalPrice}</h5>
            </div>
            <hr />
        </div>
    );
};

export default CartRow;
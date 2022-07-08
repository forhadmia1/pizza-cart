import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CartRow from './CartRow';

const CartView = () => {
    const cart = useSelector((state) => state.cart)
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        const price = parseInt(element.totalPrice)
        total = total + price;
    }

    return (
        <div className='mt-3'>
            <div className='d-flex flex-column gap-4'>
                {
                    cart.map(item => <CartRow
                        key={item.id}
                        item={item}
                    ></CartRow>)
                }
            </div>
            <div className='bg-danger p-2 mt-3'>
                <h4 className='text-center'>Subtotal: ${total}</h4>
            </div>
        </div>
    );
};

export default CartView;
import React from 'react';
import { useSelector } from 'react-redux';
import CartRow from './CartRow';

const CartView = () => {

    const cart = useSelector((state) => state.cart)
    return (
        <div >
            <div className='d-flex flex-column gap-4'>
                {
                    cart.map(item => <CartRow
                        key={item.id}
                        item={item}
                    ></CartRow>)
                }
            </div>
        </div>
    );
};

export default CartView;
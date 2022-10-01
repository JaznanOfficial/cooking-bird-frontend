import React from 'react';
import CartPageLeft from './CartPageLeft';
import CartPageRight from './CartPageRight';

const CartPage = () => {
    return (
        <div className=' lg:flex lg:flex-row-reverse justify-center items-start bg-sky-50 lg:p-12 pt-4 mb-10 gap-4' >
            <CartPageLeft />
            <CartPageRight/>
        </div>
    );
};

export default CartPage;
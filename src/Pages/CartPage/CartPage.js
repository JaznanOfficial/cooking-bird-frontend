import React from 'react';
import CartPageLeft from './CartPageLeft';
import CartPageRight from './CartPageRight';

const CartPage = () => {
    return (
        <div className=' lg:flex lg:flex-row-reverse justify-center items-start bg-sky-50 lg:px-12 lg:py-8  gap-4' >
            <CartPageLeft />
            <CartPageRight/>
        </div>
    );
};

export default CartPage;
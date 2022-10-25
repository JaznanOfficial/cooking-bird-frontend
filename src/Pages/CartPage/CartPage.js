import React, { useEffect } from 'react';
import useFetch from '../../Hooks/useFetch';
import useFirebase from '../../Hooks/useFirebase';
import CartPageLeft from './CartPageLeft';
import CartPageRight from './CartPageRight';


const CartPage = () => {
    const { getData, data, dataLoading } = useFetch();
    const { user,loading } = useFirebase();

    useEffect(() => {
        if (user?.email) {
            getData(
                `https://cooking-bird-server-production.up.railway.app/api/v1/carts?email=${user.email}`
            );
        }
    }, [user?.email]);

    console.log(data);
    return (
        <div className=' lg:flex lg:flex-row-reverse justify-center items-start bg-sky-50 lg:px-12 lg:py-8  gap-4' >
            <CartPageLeft />
            <CartPageRight data={data} dataLoading={dataLoading} loading={ loading} />
        </div>
    );
};

export default CartPage;
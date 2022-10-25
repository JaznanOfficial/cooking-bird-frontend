import React, { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
import useFetch from "../../Hooks/useFetch";
import useFirebase from "../../Hooks/useFirebase";
import CartItems from "./CartItems";

const CartPageRight = ({data,dataLoading,loading}) => {

    console.log(data);
    // const {dataLoading} = useFetch()


    
    

    return (
        <div className="w-full">
            <div className="bg-white p-5 rounded-3xl">
                <h1 className="text-navy-900 text-start text-3xl">Cart</h1>

                <div class="overflow-x-none lg:p-3">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-2">
                                    <div class="font-semibold text-left">Product Name</div>
                                </th>
                                <th class="p-2">
                                    <div class="font-semibold text-left">Quantity</div>
                                </th>
                                <th class="p-2">
                                    <div class="font-semibold text-right">Total</div>
                                </th>
                                <th class="p-2">
                                    <div class="font-semibold text-center">Action</div>
                                </th>
                            </tr>
                        </thead>

                        <tbody class="text-sm divide-y divide-gray-100">
                            
                            
                            {
                                data?.message?<h1 className="text-center my-10 text-red-600">{data.message}</h1> :
                                data?.map((cartItem) => {
                                return (
                                    <CartItems cartItem={cartItem} />
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CartPageRight;
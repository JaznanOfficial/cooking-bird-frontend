import React, { useState } from "react";
import useFetch from "../../Hooks/useFetch";


const CartItems = ({ cartItem }) => {

    const {patchData,dataLoading}= useFetch()

    console.log(cartItem)
    const { _id,name, quantity,price } = cartItem;
    const [updateQuantity, setUpdateQuantity] = useState(quantity)

    console.log(updateQuantity)

    const increment = () => {
        setUpdateQuantity((quantity) => quantity+1)
        patchData(`https://cooking-bird-server-production.up.railway.app/api/v1/carts?_id=${_id}`,updateQuantity)
    }

    const decrement = () => {
        if (quantity===0) {
            
            // setQuantity(1)
        }
        else {
            // setQuantity(quantity=>quantity-1)
        }
    }

    console.log(quantity)

    return (
        <tr>
            <td class="p-2">
                <div class="font-medium text-gray-800 text-start lg:text-xl">
                    {name}
                </div>
            </td>
            <td class="p-2">
                <div class="text-left flex items-center">
                    <button
                        className=" px-2 py-1 bg-white dark:bg-gray-900 hover:bg-red-500 hover:text-white hover:cursor-pointer border border-gray-300 hover:border-white rounded-full"
                        onClick={decrement}
                    >
                        <i className="fa-solid fa-minus"></i>
                    </button>
                    <h1 className="lg:text-xl mx-3">{updateQuantity}</h1>
                    <button className=" px-2 py-1 bg-white dark:bg-gray-900 hover:bg-red-500 hover:text-white hover:cursor-pointer border border-gray-300 hover:border-white rounded-full"  onClick={increment}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </td>
            <td class="p-2">
                <div class="text-right font-medium text-green-500 lg:text-xl">BDT {quantity*price}</div>
            </td>
            <td class="p-2">
                <div class="flex justify-center">
                    <button>
                        <svg
                            class="w-8 h-8 hover:text-red-600 rounded-full hover:bg-gray-100 p-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default CartItems;

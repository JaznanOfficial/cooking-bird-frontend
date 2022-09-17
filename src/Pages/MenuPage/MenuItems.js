import React from 'react';
import Rating from "react-rating";

const MenuItems = ({ menuCard }) => {
    const { name, price, img, items, rating } = menuCard;
    return (
        
        <div class="bg-rose-50 text-gray-900 w-80 lg:w-11/12 mx-auto mb-6">
            <div>
                <img
                    src={img}
                    alt=" random img"
                    class="w-full h-60 object-cover object-center rounded-lg shadow-md"
                />

                <div class="relative px-4 -mt-16">
                    <div class="bg-white h-60 p-3 rounded-lg shadow-lg">
                        <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate text-navy-900 text-2xl font-black">
                            {name}
                        </h4>

                        <div class="mt-1 text-red-700">
                            ${price}
                            <span class="text-gray-600 text-sm"></span>
                        </div>
                        <div class="flex items-baseline">
                            <div class="ml-2 text-gray-600 text-xs font-light tracking-wider">
                                {items.slice(0, 50)}
                            </div>
                        </div>
                        <div class="mt-2">
                            <span class="text-orange-600 font-light">
                                <Rating
                                    emptySymbol="fa fa-star-o "
                                    fullSymbol="fa fa-star"
                                    fractions={2}
                                    initialRating={rating}
                                />
                            </span>
                        </div>
                        <div class="mt-2 flex justify-center items-center">
                            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-red-600 rounded-lg group bg-gradient-to-br from-red-500 via-red-600 to-red-700 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400" >
                                <span class="relative px-3 py-1.5 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 hover:text-white">
                                    <i class="fa-solid fa-minus"></i>
                                </span>
                            </button>
                            <h1 class="text-black text-md font-semibold mx-3 mb-2 font-black text-2xl">
                                1
                            </h1>
                            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-red-600 rounded-lg group bg-gradient-to-br from-red-500 via-red-500 to-red-700 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400" >
                                <span class="relative px-3 py-1.5 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 hover:text-white">
                                    <i class="fa-solid fa-plus"></i>
                                </span>
                            </button>
                        </div>
                        <div>
                            <button
                                type="button"
                                class="text-white bg-gradient-to-tr from-red-700 to-red-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItems;
import React from "react";
import Rating from "react-rating";

const MenuItems = ({ menuCard }) => {
    const { name, price, img, items, rating } = menuCard;
    return (
        <div className=" text-gray-900 w-80 lg:w-11/12 mx-auto mb-6">
            <div>
                <img
                    src={img}
                    alt=" random img"
                    className="w-full h-60 object-cover object-center rounded-lg shadow-md"
                />

                <div className="relative px-4 -mt-16">
                    <div className="bg-white h-48 p-3 rounded-lg shadow-xl  shadow-rose-100 flex flex-col justify-end">
                        <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate text-navy-900 text-2xl font-black">
                            {name}
                        </h4>

                        <div className="mt-1 text-red-700">
                            ${price}
                            <span className="text-gray-600 text-sm"></span>
                        </div>
                        <div className="flex items-baseline">
                            <div className="ml-2 text-gray-600 text-xs font-light tracking-wider">
                                {items.slice(0, 50)}
                            </div>
                        </div>
                        <div className="mt-2">
                            <span className="text-orange-600 font-light">
                                <Rating
                                    emptySymbol="fa fa-star-o "
                                    fullSymbol="fa fa-star"
                                    fractions={2}
                                    initialRating={rating}
                                    readonly
                                />
                            </span>
                        </div>
                        
                        <div>
                            <button
                                type="button"
                                className="text-white bg-gradient-to-tr from-red-700 to-red-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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

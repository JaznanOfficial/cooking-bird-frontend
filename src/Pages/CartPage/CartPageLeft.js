import React from "react";
import { Link } from "react-router-dom";

const CartPageLeft = () => {
    const background =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL6GUpqeY8UWzbMerPMh7wbljDWFZ-zmIlAA&usqp=CAU";

    return (
        <div className="sticky top-16 lg:top-20">
            <div className="flex items-center justify-center lg:w-64 ">
                <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg py-5 max-w-sm w-full">
                    <div className="hidden lg:block">
                        <img
                            className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                            alt="product designer"
                        />
                        <h1 className="text-lg text-red-700"> John Doe </h1>
                    </div>

                    <div className="p-5 pb-0">
                        <div class="flex items-center justify-between">
                            <p class="text-base leading-none text-gray-800 dark:text-white">
                                Subtotal
                            </p>
                            <p class="text-base leading-none text-gray-800 dark:text-white">500</p>
                        </div>

                        <div class="flex items-center justify-between pt-5">
                            <p class="text-base leading-none text-gray-800 dark:text-white">
                                Shipping
                            </p>
                            <p class="text-base leading-none text-gray-800 dark:text-white">50</p>
                        </div>

                        <div class="flex items-center justify-between pt-5">
                            <p class="text-base leading-none text-gray-800 dark:text-white">Tax</p>
                            <p class="text-base leading-none text-gray-800 dark:text-white">10</p>
                        </div>

                        <hr className="border mt-5" />

                        <div class="flex items-center pb-6 justify-between pt-5 ">
                            <p class="text-2xl leading-normal text-gray-800 dark:text-white">
                                Total
                            </p>
                            <p class="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">
                                560
                            </p>
                        </div>

                        <button
                            onclick="checkoutHandler1(true)"
                            class="text-base leading-none w-full py-5 bg-green-600 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700 rounded-md"
                        >
                            Checkout
                        </button>
                        <Link
                            to="/check-out"
                            type="submit"
                            className="block w-full  mt-4 py-4 rounded-2xl text-white font-semibold mb-2 "
                            style={{ background: `url(${background})` }}
                            >
                                Checkout
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPageLeft;

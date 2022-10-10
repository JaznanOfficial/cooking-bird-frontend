import React from "react";

const CartPageRight = () => {
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
                                    <div class="font-semibold text-left">Total</div>
                                </th>
                                <th class="p-2">
                                    <div class="font-semibold text-center">Action</div>
                                </th>
                            </tr>
                        </thead>

                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr>
                                <td class="p-2">
                                    <div class="font-medium text-gray-800 text-start lg:text-xl">
                                        Samsung Galaxy Note 4
                                    </div>
                                </td>
                                <td class="p-2">
                                    <div class="text-left flex items-center">
                                        <button className=" px-2 py-1 bg-white dark:bg-gray-900 hover:bg-red-500 hover:text-white hover:cursor-pointer border border-gray-300 hover:border-white rounded-full">
                                            <i className="fa-solid fa-minus"></i>
                                        </button>
                                        <h1 className="lg:text-xl mx-3">1</h1>
                                        <button className=" px-2 py-1 bg-white dark:bg-gray-900 hover:bg-red-500 hover:text-white hover:cursor-pointer border border-gray-300 hover:border-white rounded-full">
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                </td>
                                <td class="p-2">
                                    <div class="text-left font-medium text-green-500 lg:text-xl">
                                        BDT 2,890.66
                                    </div>
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
                            <tr>
                                <td class="p-2">
                                    <div class="font-medium text-gray-800 text-start lg:text-xl">
                                        Samsung Galaxy Note 4
                                    </div>
                                </td>
                                <td class="p-2">
                                    <div class="text-left flex items-center">
                                        <button className=" px-2 py-1 bg-white dark:bg-gray-900 hover:bg-red-500 hover:text-white hover:cursor-pointer border border-gray-300 hover:border-white rounded-full">
                                            <i className="fa-solid fa-minus"></i>
                                        </button>
                                        <h1 className="lg:text-xl mx-3">1</h1>
                                        <button className=" px-2 py-1 bg-white dark:bg-gray-900 hover:bg-red-500 hover:text-white hover:cursor-pointer border border-gray-300 hover:border-white rounded-full">
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                </td>
                                <td class="p-2">
                                    <div class="text-left font-medium text-green-500 lg:text-xl">
                                        BDT 2,890.66
                                    </div>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CartPageRight;

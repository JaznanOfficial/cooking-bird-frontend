import React, { useState } from "react";
import CartItems from "./CartItems";

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
                            {Array.from({ length: 4 }).map((_, idx) => {
                                return (
                                    <CartItems/>
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

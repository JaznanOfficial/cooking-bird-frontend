import React from "react";
import { Link } from "react-router-dom";

const UserProfileLeftBottom = () => {
    return (
        <div>
            <div className="flex items-center justify-center">
                <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-sm w-full">
                    <div class="text-gray-100 text-xl">
                        {/* <div class="p-2.5 mt-1 flex items-center">
                            <i class="fa-solid fa-x cursor-pointer text-red-600 ml-28"></i>
                        </div> */}
                    </div>

                    <Link to='user-order' class="p-2.5 mt-3 flex items-center rounded-3xl px-4 duration-300 cursor-pointer bg-rose-100 hover:bg-red-500 text-red-500 hover:text-white">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <div class="flex justify-between w-full items-center">
                            <span class="text-[15px] ml-4  font-bold">Orders</span>
                        </div>
                    </Link>
                    <div class="p-2.5 mt-3 flex items-center rounded-3xl px-4 duration-300 cursor-pointer bg-rose-100 hover:bg-red-500 text-red-500 hover:text-white">
                        <i class="fa-solid fa-ticket"></i>
                        <div class="flex justify-between w-full items-center">
                            <span class="text-[15px] ml-4  font-bold">Voucher</span>
                        </div>
                    </div>
                    <div class="p-2.5 mt-3 flex items-center rounded-3xl px-4 duration-300 cursor-pointer bg-rose-100 hover:bg-red-500 text-red-500 hover:text-white">
                        <i class="fa-solid fa-address-book"></i>
                        <div class="flex justify-between w-full items-center">
                            <span class="text-[15px] ml-4  font-bold">Addresses</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfileLeftBottom;

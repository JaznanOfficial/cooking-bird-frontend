import React from "react";
import { Link } from "react-router-dom";

const UserProfileLeftBottom = () => {
    return (
        
            <div className="flex items-center justify-center sticky top-0">
                <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-sm w-full ">
                    <div className="text-gray-100 text-xl">
                        {/* <div className="p-2.5 mt-1 flex items-center">
                            <i className="fa-solid fa-x cursor-pointer text-red-600 ml-28"></i>
                        </div> */}
                    </div>

                    <Link
                        to="/user-profile"
                        className="p-2.5 mt-3 flex items-center rounded-3xl px-4 duration-300 cursor-pointer bg-rose-100 hover:bg-red-500 text-red-500 hover:text-white focus:bg-red-500 focus:text-white "
                    >
                        <i className="fa-solid fa-bag-shopping"></i>
                        <div className="flex justify-between w-full items-center">
                            <span className="text-[15px] ml-4  font-bold">Orders</span>
                        </div>
                    </Link>
                    <Link
                        to="/user-profile/user-vouchers"
                        className="p-2.5 mt-3 flex items-center rounded-3xl px-4 duration-300 cursor-pointer bg-rose-100 hover:bg-red-500 text-red-500 hover:text-white focus:bg-red-500 focus:text-white "
                    >
                        <i className="fa-solid fa-ticket"></i>
                        <div className="flex justify-between w-full items-center">
                            <span className="text-[15px] ml-4  font-bold">Voucher</span>
                        </div>
                    </Link>
                    <Link
                        to="/user-profile/user-addresses"
                        className="p-2.5 mt-3 flex items-center rounded-3xl px-4 duration-300 cursor-pointer bg-rose-100 hover:bg-red-500 text-red-500 hover:text-white focus:bg-red-500 focus:text-white "
                    >
                        <i className="fa-solid fa-address-book"></i>
                        <div className="flex justify-between w-full items-center">
                            <span className="text-[15px] ml-4  font-bold">Addresses</span>
                        </div>
                    </Link>
                </div>
            </div>
        
    );
};

export default UserProfileLeftBottom;

import React from "react";
import { Route, Routes } from "react-router-dom";
import AddressPage from "../AddressPage/AddressPage";
import VoucherPage from "../VoucherPage/VoucherPage";
import UserOrderPage from "./UserOrderPage";

const UserProfileRight = () => {
    return (
        <div className="w-full">
            
            <Routes>
                <Route path="/" element={ <UserOrderPage/>} ></Route>
                <Route path="user-orders" element={ <UserOrderPage/>} ></Route>
                <Route path="user-vouchers" element={ <VoucherPage/>} ></Route>
                <Route path="user-addresses" element={ <AddressPage/>} ></Route>
            </Routes>
        </div>
    );
};

export default UserProfileRight;

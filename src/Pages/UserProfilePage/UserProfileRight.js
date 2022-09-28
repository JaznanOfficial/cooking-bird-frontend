import React from "react";
import { Route, Routes } from "react-router-dom";
import VoucherPage from "../VoucherPage/VoucherPage";
import UserOrderPage from "./UserOrderPage";

const UserProfileRight = () => {
    return (
        <div>
            {/* <UserOrderPage/> */}
            <Routes>
                <Route path="user-order" element={ <UserOrderPage/>} ></Route>
                <Route path="user-vouchers" element={ <VoucherPage/>} ></Route>
            </Routes>
        </div>
    );
};

export default UserProfileRight;

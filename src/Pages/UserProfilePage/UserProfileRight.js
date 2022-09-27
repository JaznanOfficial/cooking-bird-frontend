import React from "react";
import { Route, Routes } from "react-router-dom";
import UserOrderPage from "./UserOrderPage";

const UserProfileRight = () => {
    return (
        <div>
            <UserOrderPage/>
            <Routes>
                <Route path="/user-profile/user-order" element={ <UserOrderPage/>} ></Route>
            </Routes>
        </div>
    );
};

export default UserProfileRight;

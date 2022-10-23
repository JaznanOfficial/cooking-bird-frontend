import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import useFirebase from "../../Hooks/useFirebase";

const UserOrderPage = () => {
    const { user } = useFirebase();
    console.log(user.email);
    const { getData, data } = useFetch();

    useEffect(() => {
        if (user?.email) {
            getData(
                `https://cooking-bird-server-production.up.railway.app/api/v1/orders?email=${user.email}`
            );
        }
    }, [user?.email]);

    console.log(data);

    return (
        <div className="bg-white p-5 min-h-screen rounded-3xl">
            <h1 className="text-navy-900 text-start text-5xl">Past Orders</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mt-8">
                {data.map((orderItems) => {
                    console.log(orderItems);
                    const { name, img, quantity, price, createdAt, status, details } = orderItems;
                    return (
                        <div className="flex bg-white shadow-lg rounded-3xl mx-auto md:mx-auto my-0 max-w-md md:max-w-2xl border w-full">
                            <div className="flex flex-col lg:flex-row lg:justify-start justify-center  lg:items-start items-center px-4 py-6">
                                <img
                                    className="lg:w-36 lg:h-32 w-36 h-36 rounded-full object-cover mr-4 mb-4 shadow"
                                    src={img}
                                    alt="food"
                                />

                                <div className="text-start">
                                    <div className="flex items-end justify-end">
                                        <h2 className="text-sm font-bold -mt-1 py-2 rounded-lg text-red-600  bg-orange-100 p-3">
                                            <i class="fa-sharp fa-solid fa-spinner"></i> {status}
                                        </h2>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-lg font-semibold -mt-1 text-red-600">
                                            {name}
                                        </h2>
                                        <small className="text-sm text-gray-700">22h ago</small>
                                    </div>

                                    {<p className="mt-3 text-gray-700 text-sm">{details}</p>}
                                    <div className="my-4 flex items-center justify-between">
                                        <h1 className="  text-red-600 text-sm ">
                                            <i className="fa-solid fa-arrow-up-9-1"> </i> {quantity}
                                        </h1>
                                        <h1 className=" text-gray-700 text-sm">
                                            <i className="fa-solid fa-clock"></i> {createdAt.slice(0,10)} at {createdAt.slice(12,16)}
                                        </h1>
                                    </div>
                                    <hr />
                                    <div className="flex flex-col lg:flex-row justify-between items-center mt-3">
                                        <div>
                                            <h6 className="font-light">
                                                Total paid:{" "}
                                                <span className="text-red-600">{price}</span>{" "}
                                                <span className="text-red-600 text-xl font-extrabold">
                                                    ৳
                                                </span>{" "}
                                            </h6>
                                        </div>
                                        {status === "pending" && (
                                            <div>
                                                <Link
                                                    to={"/user-invoices/1"}
                                                    className="bg-red-600 px-2 py-1 rounded-3xl text-gray-100 tracking-wide hover:bg-red-500 "
                                                >
                                                    Cancel
                                                </Link>
                                            </div>
                                        )}
                                        {status === "delivered" && (
                                            <div>
                                                <Link
                                                    to={"/user-invoices/1"}
                                                    className="bg-red-600 px-2 py-1 rounded-3xl text-gray-100 tracking-wide hover:bg-red-500 "
                                                >
                                                    See invoice
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default UserOrderPage;

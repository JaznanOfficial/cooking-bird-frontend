import React from "react";

const CartPageRight = () => {
    return (
        <div className="w-full">
            <div className="bg-white p-5 rounded-3xl">
                <h1 className="text-navy-900 text-start text-5xl">Available Vouchers</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mt-8">
                    <div className="flex bg-white shadow-lg rounded-3xl mx-4 md:mx-auto my-0 max-w-md md:max-w-2xl border w-full mx-auto">
                        <div className="flex justify-start items-start px-6 py-6">
                            <div className="text-start">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-semibold text-gray-900 -mt-1 text-red-600 uppercase bg-orange-100 p-3">
                                        <i className="fa-solid fa-ticket"></i> eid2023
                                    </h2>
                                </div>

                                <p className="mt-3 text-gray-700 text-lg">
                                    Get 50% discount on your first order
                                </p>
                                <p className="text-sm">
                                    use code <strong>EID2023</strong> & get 50% discount on your
                                    first order on our site. max discount: 200 bdt
                                </p>
                                <div className="my-4 flex items-center justify-between">
                                    <h1 className=" text-gray-700 text-sm">
                                        will expire: <i className="fa-solid fa-clock"></i>{" "}
                                        27-09-2022
                                    </h1>
                                </div>
                                <hr />
                                <div className="flex flex-col lg:flex-row justify-between items-center mt-3">
                                    <div>
                                        <button className="bg-red-600 px-2 py-1 rounded-3xl text-gray-100 tracking-wide hover:bg-red-500 ">
                                            Copy code
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-white shadow-lg rounded-3xl mx-4 md:mx-auto my-0 max-w-md md:max-w-2xl border w-full mx-auto">
                        <div className="flex justify-start items-start px-6 py-6">
                            <div className="text-start">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-semibold text-gray-900 -mt-1 text-red-600 uppercase bg-orange-100 p-3">
                                        <i className="fa-solid fa-ticket"></i> eid2023
                                    </h2>
                                </div>

                                <p className="mt-3 text-gray-700 text-lg">
                                    Get 50% discount on your first order
                                </p>
                                <p className="text-sm">
                                    use code <strong>EID2023</strong> & get 50% discount on your
                                    first order on our site. max discount: 200 bdt
                                </p>
                                <div className="my-4 flex items-center justify-between">
                                    <h1 className=" text-gray-700 text-sm">
                                        will expire: <i className="fa-solid fa-clock"></i>{" "}
                                        27-09-2022
                                    </h1>
                                </div>
                                <hr />
                                <div className="flex flex-col lg:flex-row justify-between items-center mt-3">
                                    <div>
                                        <button className="bg-red-600 px-2 py-1 rounded-3xl text-gray-100 tracking-wide hover:bg-red-500 ">
                                            Copy code
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPageRight;

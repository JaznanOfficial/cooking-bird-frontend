import React from "react";

const UserOrderPage = () => {
    return (
        <div className="bg-white p-5 min-h-screen rounded-3xl">
            <h1 className="text-navy-900 text-start text-5xl">Past Orders</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mt-8">
                <div class="flex bg-white shadow-lg rounded-3xl mx-4 md:mx-auto my-0 max-w-md md:max-w-2xl border w-full mx-auto">
                    <div class="flex justify-start items-start px-4 py-6">
                        <img
                            class="lg:w-36 lg:h-32 w-36 h-20 rounded-full object-cover mr-4 shadow"
                            src="https://www.cookwithkushi.com/wp-content/uploads/2019/06/IMG_3859_.jpg"
                            alt="food"
                        />
                        <div class="text-start">
                            <div class="flex items-center justify-between">
                                <h2 class="text-lg font-semibold text-gray-900 -mt-1 text-red-600">
                                    Cold Faluda{" "}
                                </h2>
                                <small class="text-sm text-gray-700">22h ago</small>
                            </div>

                            <p class="mt-3 text-gray-700 text-sm">
                                rose syrup, vermicelli, sweet basil seeds, milk,ice etc
                            </p>
                            <div class="my-4 flex items-center justify-between">
                                <h1 class="  text-red-600 text-sm ">
                                    <i class="fa-solid fa-arrow-up-9-1"> </i> 12 pcs
                                </h1>
                                <h1 class=" text-gray-700 text-sm">
                                    <i class="fa-solid fa-clock"></i> 27-09-2022
                                </h1>
                            </div>
                            <hr />
                            <div className="flex flex-col lg:flex-row justify-between items-center mt-3">
                                <div>
                                    <h6 className="font-light">Total paid: <span className="text-red-600">200</span> <span className="text-red-600 text-xl font-extrabold">৳</span> </h6>
                                </div>
                                <div>
                                    <button class="bg-red-600 px-2 py-1 rounded-3xl text-gray-100 tracking-wide hover:bg-red-500 ">
                                        Order Again
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex bg-white shadow-lg rounded-3xl mx-4 md:mx-auto my-0 max-w-md md:max-w-2xl border w-full mx-auto">
                    <div class="flex justify-start items-start px-4 py-6">
                        <img
                            class="lg:w-36 lg:h-32 w-36 h-20 rounded-full object-cover mr-4 shadow"
                            src="https://www.cookwithkushi.com/wp-content/uploads/2019/06/IMG_3859_.jpg"
                            alt="food"
                        />
                        <div class="text-start">
                            <div class="flex items-center justify-between">
                                <h2 class="text-lg font-semibold text-gray-900 -mt-1 text-red-600">
                                    Cold Faluda{" "}
                                </h2>
                                <small class="text-sm text-gray-700">22h ago</small>
                            </div>

                            <p class="mt-3 text-gray-700 text-sm">
                                rose syrup, vermicelli, sweet basil seeds, milk,ice etc
                            </p>
                            <div class="my-4 flex items-center justify-between">
                                <h1 class="  text-red-600 text-sm ">
                                    <i class="fa-solid fa-arrow-up-9-1"> </i> 12 pcs
                                </h1>
                                <h1 class=" text-gray-700 text-sm">
                                    <i class="fa-solid fa-clock"></i> 27-09-2022
                                </h1>
                            </div>
                            <hr />
                            <div className="flex flex-col lg:flex-row justify-between items-center mt-3">
                                <div>
                                    <h6 className="font-light">Total paid: <span className="text-red-600">200</span> <span className="text-red-600 text-xl font-extrabold">৳</span> </h6>
                                </div>
                                <div>
                                    <button class="bg-red-600 px-2 py-1 rounded-3xl text-gray-100 tracking-wide hover:bg-red-500 ">
                                        Order Again
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserOrderPage;

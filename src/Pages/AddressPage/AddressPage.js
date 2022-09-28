import React from "react";

const AddressPage = () => {
    return (
        <div className="bg-white p-5  min-h-screen rounded-3xl">
            <h1 className="text-navy-900 text-start text-5xl">Users Addresses</h1>
            <div className="text-start">
                <button class="bg-red-600 px-4 py-2 rounded-3xl text-gray-100 tracking-wide hover:bg-red-500 mt-8 mx-4">
                <i class="fa-solid fa-plus"></i> Add an address
                </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mt-3">
                <div class="flex bg-white shadow-lg rounded-3xl mx-4 md:mx-auto my-0 max-w-md md:max-w-2xl border ">
                    <div class="flex justify-start items-start px-6 py-6">
                        <div class="text-start">
                            <div class="flex items-center justify-between">
                                <h2 class="text-lg font-semibold text-gray-900 -mt-1 text-red-600 uppercase bg-orange-100 p-3">
                                    <i class="fa-solid fa-location-dot"></i> Home
                                </h2>
                            </div>

                            <p class="mt-3 text-gray-700 text-lg">Elon Musk</p>
                            <p className="text-sm">
                                Suzy Queue 4455 Landing Lange, APT 4 Louisville, KY 40018-1234
                            </p>
                            <div class="my-4 flex items-center justify-between">
                                <h1 class=" text-gray-700 text-sm">
                                    <i class="fa-solid fa-phone-volume"></i> +0123456789
                                </h1>
                            </div>
                            <hr />
                            <div className="flex flex-row justify-between items-center mt-3">
                                <div>
                                    <button class="bg-red-600 px-4 py-2 rounded-3xl text-gray-100 tracking-wide hover:bg-red-500 ">
                                        <i class="fa-solid fa-pencil"></i> Edit
                                    </button>
                                </div>
                                <div>
                                    <button class="bg-red-600 px-4 py-2 rounded-3xl text-gray-100 tracking-wide hover:bg-red-500 ">
                                        <i class="fa-solid fa-trash-can"></i> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex bg-white shadow-lg rounded-3xl mx-4 md:mx-auto my-0 max-w-md md:max-w-2xl border ">
                    <div class="flex justify-start items-start px-6 py-6">
                        <div class="text-start">
                            <div class="flex items-center justify-between">
                                <h2 class="text-lg font-semibold text-gray-900 -mt-1 text-red-600 uppercase bg-orange-100 p-3">
                                    <i class="fa-solid fa-location-dot"></i> Office
                                </h2>
                            </div>

                            <p class="mt-3 text-gray-700 text-lg">Elon Musk</p>
                            <p className="text-sm">
                                Suzy Queue 4455 Landing Lange, APT 4 Louisville, KY 40018-1234
                            </p>
                            <div class="my-4 flex items-center justify-between">
                                <h1 class=" text-gray-700 text-sm">
                                    <i class="fa-solid fa-phone-volume"></i> +0123456789
                                </h1>
                            </div>
                            <hr />
                            <div className="flex flex-row justify-between items-center mt-3">
                                <div>
                                    <button class="bg-red-600 px-4 py-2 rounded-3xl text-gray-100 tracking-wide hover:bg-red-500 ">
                                        <i class="fa-solid fa-pencil"></i> Edit
                                    </button>
                                </div>
                                <div>
                                    <button class="bg-red-600 px-4 py-2 rounded-3xl text-gray-100 tracking-wide hover:bg-red-500 ">
                                        <i class="fa-solid fa-trash-can"></i> Delete
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

export default AddressPage;

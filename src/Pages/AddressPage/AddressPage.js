import { Label, Modal, TextInput } from "flowbite-react";
import React, { useState } from "react";

const AddressPage = () => {
    const [show, setShow] = useState(false);

    const openModal = () => {
        setShow(true);
    };

    const closeModal = () => {
        setShow(false);
    };

    return (
        <div className="bg-white p-5  min-h-screen rounded-3xl">
            <h1 className="text-navy-900 text-start text-5xl">Users Addresses</h1>
            <div className="text-start">
                <React.Fragment>
                    <button
                        class="bg-red-600 px-4 py-2 rounded-3xl text-gray-100 tracking-wide hover:bg-red-500 mt-8 mx-4"
                        onClick={openModal}
                    >
                        <i class="fa-solid fa-plus"></i> Add an address
                    </button>

                    <Modal show={show} size="md" popup={true} onClose={closeModal}>
                        <Modal.Header />
                        <Modal.Body>
                        <h1 className="text-rose-600 text-start text-xl">Enter your address correctly</h1>
                            <div className="mt-5">
                                <form>
                                    <div class="relative z-0 mb-6 w-full group">
                                        <input
                                            type="email"
                                            name="floating_email"
                                            id="floating_email"
                                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                            required
                                        />
                                        <label
                                            for="floating_email"
                                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            Email address
                                        </label>
                                    </div>
                                    <div class="relative z-0 mb-6 w-full group">
                                        <input
                                            type="password"
                                            name="floating_password"
                                            id="floating_password"
                                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                            required
                                        />
                                        <label
                                            for="floating_password"
                                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            Password
                                        </label>
                                    </div>
                                    <div class="relative z-0 mb-6 w-full group">
                                        <input
                                            type="password"
                                            name="repeat_password"
                                            id="floating_repeat_password"
                                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                            required
                                        />
                                        <label
                                            for="floating_repeat_password"
                                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            Confirm password
                                        </label>
                                    </div>
                                    <div class="grid md:grid-cols-2 md:gap-6">
                                        <div class="relative z-0 mb-6 w-full group">
                                            <input
                                                type="text"
                                                name="floating_first_name"
                                                id="floating_first_name"
                                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label
                                                for="floating_first_name"
                                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                First name
                                            </label>
                                        </div>
                                        <div class="relative z-0 mb-6 w-full group">
                                            <input
                                                type="text"
                                                name="floating_last_name"
                                                id="floating_last_name"
                                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label
                                                for="floating_last_name"
                                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                Last name
                                            </label>
                                        </div>
                                    </div>
                                    <div class="grid md:grid-cols-2 md:gap-6">
                                        <div class="relative z-0 mb-6 w-full group">
                                            <input
                                                type="tel"
                                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                name="floating_phone"
                                                id="floating_phone"
                                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label
                                                for="floating_phone"
                                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                Phone number (123-456-7890)
                                            </label>
                                        </div>
                                        <div class="relative z-0 mb-6 w-full group">
                                            <input
                                                type="text"
                                                name="floating_company"
                                                id="floating_company"
                                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label
                                                for="floating_company"
                                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                Company (Ex. Google)
                                            </label>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </Modal.Body>
                    </Modal>
                </React.Fragment>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mt-3 w-full">
                <div class="flex bg-white shadow-lg rounded-3xl mx-4 md:mx-auto my-0 max-w-md md:max-w-2xl border w-full mx-auto">
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
                <div class="flex bg-white shadow-lg rounded-3xl mx-4 md:mx-auto my-0 max-w-md md:max-w-2xl border w-full mx-auto">
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

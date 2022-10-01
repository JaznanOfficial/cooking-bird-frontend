import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="container flex flex-wrap lg:flex-nowrap lg:flex-row-reverse justify-around items-center mt-20 mb-20 lg:mb-0 mx-auto gap-10 lg:gap-4">
            <div className="w-full">
                <img
                    src="https://elanta.app/nazar/starbelly-demo/img/illustrations/man.png"
                    alt="not found img"
                />
            </div>
            <div className="container w-full  mx-10 ">
                <h1 className="font-monoton text-6xl text-red-600">404</h1>
                <h1 className="text-8xl font-bold font-ubuntu text-navy-900 my-10">
                    Oops! Where are we?
                </h1>
                <div className="flex justify-center items-center">
                    <p className="text-center text-navy-900 w-80">
                        Page not Found! The page you are looking for was moved, removed, renamed or
                        might never existed.
                    </p>
                </div>
                <Link to="/">
                    <button className="bg-red-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide hover:bg-red-500 ">
                        <i class="fa-solid fa-tent-arrow-turn-left"></i> Go to home please{" "}
                    </button>{" "}
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;

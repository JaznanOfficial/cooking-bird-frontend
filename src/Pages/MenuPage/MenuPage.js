import React, { useState } from "react";
import "simplebar/dist/simplebar.min.css";

import useFetch from "../../Hooks/useFetch";
import MenuItems from "./MenuItems";
import "./MenuPage.css";

const MenuPage = () => {
    const { getData, data } = useFetch();

    getData("./menuData.json");

    const [quantity, setQuantity] = useState(0);

    return (
        <div className="h-full">
            <div className="py-10">
                <h1 className="text-red-600 text-2xl  font-ubuntu">OUR MEAL</h1>
                <h1 className="text-5xl font-bold font-ubuntu text-navy-900">
                    Choose your favorite meal
                </h1>
            </div>

            <div className="lg:flex justify-center items-start">
                <div className=" bg-white font-semibold text-center rounded-3xl border shadow-md shadow-red-100 p-6 max-w-sm lg:w-1/6 my-5  sticky top-0 z-20">
                    <div className="container flex flex-col justify-center items-center">
                        <div className=" inline rounded-full lg:rounded p-3 mb-2 text-navy-900 lg:p-1 lg:mb-0">
                            <h3>Filter your food as you like...</h3>
                        </div>

                        <div className="checkbox-container">
                            <ul className="checkbox-ul">
                                <li>
                                    <input type="checkbox" id="checkboxOne" value="dessert" />
                                    <label
                                        for="checkboxOne"
                                        className="text-red-600 border-red-500 border"
                                    >
                                        Dessert
                                    </label>
                                </li>

                                <li>
                                    <input type="checkbox" id="checkboxTwo" value="fast food" />
                                    <label
                                        for="checkboxTwo"
                                        className="text-red-600 border-red-500 border"
                                    >
                                        Fast Food
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="checkboxThree" value="breakfast" />
                                    <label
                                        for="checkboxThree"
                                        className="text-red-600 border-red-500 border"
                                    >
                                        Breakfast
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="checkboxFour" value="lunch" />
                                    <label
                                        for="checkboxFour"
                                        className="text-red-600 border-red-500 border"
                                    >
                                        Lunch
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="checkboxFive" value="dinner" />
                                    <label
                                        for="checkboxFive"
                                        className="text-red-600 border-red-500 border"
                                    >
                                        Dinner
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="checkboxSix" value="special" />
                                    <label
                                        for="checkboxSix"
                                        className="text-red-600 border-red-500 border"
                                    >
                                        Special
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container grid grid-rows-1 grid-flow-row lg:grid-cols-4 mx-auto my-5">
                    {data.map((menuCard) => {
                        return <MenuItems key={menuCard.id} menuCard={menuCard} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default MenuPage;

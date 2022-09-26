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
                <div class=" bg-navy-900 p-5 my-3">
                    <div className=" container flex flex-col justify-center items-center mx-auto">
                        <h3 className="bg-white inline p-2 rounded-full text-navy-900">
                            Filter your food as you like...
                        </h3>
                        <div class=" ">
                            <div class="checkbox-container">
                                <ul class="checkbox-ul inline">
                                    <li className="mx-2">
                                        <input type="checkbox" id="checkboxOne" value="dessert" />
                                        <label for="checkboxOne" className="text-red-600">
                                            Dessert
                                        </label>
                                    </li>
                                    <li className="mx-2">
                                        <input type="checkbox" id="checkboxTwo" value="fast food" />
                                        <label for="checkboxTwo" className="text-red-600">
                                            Fast Food
                                        </label>
                                    </li>
                                    <li className="mx-2">
                                        <input
                                            type="checkbox"
                                            id="checkboxThree"
                                            value="breakfast"
                                        />
                                        <label for="checkboxThree" className="text-red-600">
                                            Breakfast
                                        </label>
                                    </li>
                                    <li className="mx-2">
                                        <input type="checkbox" id="checkboxFour" value="lunch" />
                                        <label for="checkboxFour" className="text-red-600">
                                            Lunch
                                        </label>
                                    </li>
                                    <li className="mx-2">
                                        <input type="checkbox" id="checkboxFive" value="dinner" />
                                        <label for="checkboxFive" className="text-red-600">
                                            Dinner
                                        </label>
                                    </li>
                                    <li className="mx-2">
                                        <input type="checkbox" id="checkboxSix" value="special" />
                                        <label for="checkboxSix" className="text-red-600">
                                            Special
                                        </label>
                                    </li>
                                </ul>
                            </div>
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

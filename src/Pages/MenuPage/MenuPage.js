import React, { useState } from "react";
import "simplebar/dist/simplebar.min.css";

import useFetch from "../../Hooks/useFetch";
import MenuItems from "./MenuItems";

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

            <div className="container grid grid-rows-1 grid-flow-row lg:grid-cols-4 mx-auto my-5">
                {data.map((menuCard) => {
                    return <MenuItems key={menuCard.id} menuCard={menuCard} />;
                })}
            </div>
        </div>
    );
};

export default MenuPage;

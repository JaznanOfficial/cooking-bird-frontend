import React, { useState } from "react";

import useFetch from "../../Hooks/useFetch";
import MenuItems from "./MenuItems";

const MenuPage = () => {
    const { getData, data } = useFetch();

    getData("./menuData.json");

    const [quantity, setQuantity] = useState(0);

    

    return (
        <div className="h-full">
        
            <div className="container grid grid-rows-2 grid-flow-row lg:grid-cols-4 gap-4 mx-auto my-10">
                {data.map((menuCard) => {
                    return <MenuItems key={menuCard.id} menuCard={menuCard} />;
                })}
            </div>
        
        </div>
    );
};

export default MenuPage;

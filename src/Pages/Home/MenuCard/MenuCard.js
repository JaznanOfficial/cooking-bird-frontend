import React from "react";

const MenuCard = () => {
    return (
        <div className="flex flex-wrap justify-center items-center">
            <div className="card w-96 hover:bg-red-500 hover:text-neutral-content m-1 border-solid border-2 border-red-500 hover:duration-500 duration-500">
                <div className="card-body items-center text-center">
                    <img src="https://templates.hibootstrap.com/restant/default/assets/img/home-one/menu1.png" alt="breakfast img"  />
                    <h2 className="card-title">Breakfast</h2>
                </div>
            </div>

            <div className="card w-96 hover:bg-red-500 hover:text-neutral-content m-1 border-solid border-2 border-red-500 hover:duration-500 duration-500">
                <div className="card-body items-center text-center">
                    <img src="https://templates.hibootstrap.com/restant/default/assets/img/home-one/menu2.png" alt="lunch img" />
                    <h2 className="card-title">Lunch</h2>
                </div>
            </div>
            
            <div className="card w-96 hover:bg-red-500 hover:text-neutral-content m-1 border-solid border-2 border-red-500 hover:duration-500 duration-500">
                <div className="card-body items-center text-center">
                    <img src="https://templates.hibootstrap.com/restant/default/assets/img/home-one/menu3.png" alt="dinner img" />
                    <h2 className="card-title">Dinner</h2>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;

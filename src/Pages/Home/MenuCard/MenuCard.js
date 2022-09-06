import React from "react";

const MenuCard = () => {
    return (
        <div className="flex flex-wrap justify-center items-center">
            <div className="card w-96 hover:bg-red-700 hover:text-neutral-content m-1 border-solid border 4 border-red-500">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Cookies!</h2>
                    <p>We are using cookies for no reason.</p>
                    
                </div>
            </div>
            <div className="card w-96 hover:bg-red-700 hover:text-neutral-content m-1 border-solid border 4 border-red-500">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Cookies!</h2>
                    <p>We are using cookies for no reason.</p>
                    
                </div>
            </div>
            <div className="card w-96 hover:bg-red-700 hover:text-neutral-content m-1 border-solid border 4 border-red-500">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Cookies!</h2>
                    <p>We are using cookies for no reason.</p>
                
                </div>
            </div>
        </div>
    );
};

export default MenuCard;

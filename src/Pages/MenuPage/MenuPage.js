import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { RingLoader } from "react-spinners";
import "simplebar/dist/simplebar.min.css";

import useFetch from "../../Hooks/useFetch";
import MenuItems from "./MenuItems";
import "./MenuPage.css";

const MenuPage = () => {
    const { getData, data, loading } = useFetch();

    useEffect(() => {
        getData("https://cooking-bird-server.onrender.com/api/v1/foodItems");
    }, []);

    const allFoods = data.data;

    // pagination-------------------------->

    const [pageNumber, setPageNumber] = useState(0);
    const foodsPerPage = 9;
    const skip = foodsPerPage * pageNumber;

    if (loading) {
        return (
            <div className="h-full mx-10 flex justify-center items-center py-24 lg:py-12">
                <div>
                    <RingLoader color="#E32D36" size={300} cssOverride={{ margin: "50px auto" }} />
                </div>
            </div>
        );
    }

    const displayItems = allFoods.slice(skip, skip + foodsPerPage);
    const totalPage = Math.ceil(allFoods.length / foodsPerPage);
    console.log(totalPage);
    const pageChange = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className="h-full">
            <div className="py-10">
                <h1 className="text-red-600 text-2xl  font-ubuntu">OUR MEAL</h1>
                <h1 className="text-5xl font-bold font-ubuntu text-navy-900">
                    Choose your favorite meal
                </h1>
            </div>

            <div className="lg:flex justify-center items-start">
                <div className=" bg-white font-semibold text-center rounded-3xl border shadow-md shadow-red-100 p-6 max-w-sm lg:w-1/6 my-5  sticky top-14 lg:top-20 z-20">
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

                <div className="container grid grid-rows-1 grid-flow-row lg:grid-cols-3 md:grid-cols-2 mx-auto my-5 gap-5">
                    {displayItems.map((menuCard) => {
                        console.log(menuCard);
                        return <MenuItems key={menuCard.id} menuCard={menuCard} />;
                    })}
                </div>
            </div>
            <div className="py-5">
            <ReactPaginate
                
                previousLabel={"<< Prev"}
                nextLabel={"Next >>"}
                pageCount={totalPage}
                onPageChange={pageChange}
                breakLabel={"..."}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                containerClassName={"pagination flex items-center justify-center"}
                activeLinkClassName={"btn-active text-white bg-red-500 border-red-500"}
                pageLinkClassName={"btn text-gray hover:text-white hover:bg-red-500 hover:border-red-500 mx-1"}
                
                previousLinkClassName={"btn text-red-500 hover:text-white hover:bg-red-500 hover:border-red-500"}
                
                nextLinkClassName={"btn text-red-500 hover:text-white hover:bg-red-500 hover:border-red-500"}
                
                breakLinkClassName={"btn text-red-500 hover:text-white hover:bg-red-500 hover:border-red-500"}
                
            />
            </div>
        </div>
    );
};

export default MenuPage;

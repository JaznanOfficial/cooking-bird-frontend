import React from "react";
import Banner from "../Banner/Banner";
import Cooks from "../Cooks/Cooks";
import MenuCard from "../MenuCard/MenuCard";
import OurProcess from "../OurProcess/OurProcess";
import ShortIcon from "../ShortIcon/ShortIcon";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <OurProcess />
            <MenuCard />
            <Cooks />
            <ShortIcon />
        </div>
    );
};

export default HomePage;

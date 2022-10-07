import React from "react";
import Banner from "../Banner/Banner";
import Cooks from "../Cooks/Cooks";
import MenuCard from "../MenuCard/MenuCard";
import OurProcess from "../OurProcess/OurProcess";
import ShortIcon from "../ShortIcon/ShortIcon";
import Footer from '../Footer/Footer';
import BannerCategories from "../Banner/BannerCategories";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <BannerCategories />
            <OurProcess />
            <MenuCard />
            <Cooks />
            <ShortIcon />
            <Footer/>
        </div>
    );
};

export default HomePage;

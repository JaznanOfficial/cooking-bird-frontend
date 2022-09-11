import React from 'react';
import Banner from '../Banner/Banner';
import Cooks from '../Cooks/Cooks';
import Footer from '../Footer/Footer';
import MenuCard from '../MenuCard/MenuCard';
import Navbar from '../Navbar/Navbar';
import OurProcess from '../OurProcess/OurProcess';
import ShortIcon from '../ShortIcon/ShortIcon';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <OurProcess />
            <MenuCard />
            <Cooks />
            <ShortIcon />
            <Footer/>
        </div>
    );
};

export default HomePage;
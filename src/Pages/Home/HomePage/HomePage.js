import React from 'react';
import Banner from '../Banner/Banner';
import MenuCard from '../MenuCard/MenuCard';
import Navbar from '../Navbar/Navbar';
import ShortIcon from '../ShortIcon/ShortIcon';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <MenuCard />
            <ShortIcon/>
        </div>
    );
};

export default HomePage;
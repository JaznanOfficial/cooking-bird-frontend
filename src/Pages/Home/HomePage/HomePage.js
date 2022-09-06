import React from 'react';
import Banner from '../Banner/Banner';
import MenuCard from '../MenuCard/MenuCard';
import Navbar from '../Navbar/Navbar';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <MenuCard/>
        </div>
    );
};

export default HomePage;
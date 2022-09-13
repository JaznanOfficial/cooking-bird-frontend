import React from 'react';
import SignInPage from '../../SignInPage/SignInPage';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import MenuCard from '../MenuCard/MenuCard';
import Navbar from '../Navbar/Navbar';
import ShortIcon from '../ShortIcon/ShortIcon';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <MenuCard />
            <ShortIcon />
            <SignInPage/>
            <Footer/>
        </div>
    );
};

export default HomePage;
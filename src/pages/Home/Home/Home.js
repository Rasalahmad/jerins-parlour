import React from 'react';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import OurProfationality from '../OurProfationality/OurProfationality';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <OurProfationality></OurProfationality>
        </div>
    );
};

export default Home;
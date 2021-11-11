import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import HomeBanner from '../HomeBanner/HomeBanner';
import FeatureProducts from '../FeatureProducts/FeatureProducts';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <FeatureProducts></FeatureProducts>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;
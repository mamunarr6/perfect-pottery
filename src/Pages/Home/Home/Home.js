import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import HomeBanner from '../HomeBanner/HomeBanner';
import FeatureProducts from '../FeatureProducts/FeatureProducts';
import Reviews from '../Reviews/Reviews';
import NewCollection from '../NewCollection/NewCollection';
import OurBlogs from '../OurBlogs/OurBlogs';

const Home = () => {

    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <FeatureProducts></FeatureProducts>
            <NewCollection></NewCollection>
            <OurBlogs></OurBlogs>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import HomeBanner from '../HomeBanner/HomeBanner';
import FeatureProducts from '../FeatureProducts/FeatureProducts';
import Reviews from '../Reviews/Reviews';
import NewCollection from '../NewCollection/NewCollection';

const Home = () => {

    // client side code link : https://github.com/programming-hero-web-course-4/niche-website-client-side-mamunarr6
    //server side code link : https://github.com/programming-hero-web-course-4/niche-website-server-side-mamunarr6
    //live site link: https://perfect-pottery.web.app/
    //heroku server : https://vast-fjord-76006.herokuapp.com/

    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <FeatureProducts></FeatureProducts>
            <NewCollection></NewCollection>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;
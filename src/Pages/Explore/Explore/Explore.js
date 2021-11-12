import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Products from '../Products/Products';

const Explore = () => {
    const { user } = useAuth();
    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('https://vast-fjord-76006.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [user.email])

    return (
        <div>
            <Navigation></Navigation>
            <h1 className="container mx-auto text-gray-600 text-center text-3xl font-bold my-5">Explore The Unique Stylish Handmade Pottery</h1>
            <div className="container mx-auto grid grid-cols-12 gap-7 my-10">
                {
                    products?.map(product => <Products
                        key={product._id}
                        product={product}
                    ></Products>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Explore;
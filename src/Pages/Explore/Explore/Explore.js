import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Products from '../Products/Products';

const Explore = () => {
    const { isLoading, user } = useAuth();
    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [user.email])
    console.log(products)

    return (
        <div>
            <Navigation></Navigation>
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
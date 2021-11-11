import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Products from '../../Explore/Products/Products';

const FeatureProducts = () => {
    const { isLoading, user } = useAuth();
    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [user.email])
    console.log(user.email)
    return (
        <div className="container mx-auto">
            <h1>Featurs Products</h1>
            <div className="container mx-auto grid grid-cols-12 gap-7 my-10">
                {
                    products?.slice(0, 6).map(product => <Products
                        key={product._id}
                        product={product}
                    ></Products>)
                }
            </div>
        </div>
    );
};

export default FeatureProducts;
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Products from '../../Explore/Products/Products';

const FeatureProducts = () => {
    const { user } = useAuth();
    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [user.email])
    return (
        <div className="container mx-auto">
            <h1 className="text-gray-600 text-center text-3xl font-bold my-10">Featurs <span className=" text-indigo-600">Products</span></h1>
            <div className=" grid grid-cols-12 gap-4 my-10">
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
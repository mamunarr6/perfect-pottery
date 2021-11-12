import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NewCollection = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('https://vast-fjord-76006.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="container mx-auto">
            <h1 className="text-gray-600 text-center text-3xl font-bold my-10 mt-20">Our New <span className=" text-indigo-600">Collections</span></h1>
            <div className=" grid grid-cols-12 gap-4 my-10">
                {
                    products?.slice(products.length - 3, products.length).map(product => <div
                        key={product._id}
                        className="md:col-span-4 sm:col-span-6 col-span-12 border border-gray-300 p-5 rounded bg-gray-100"
                    >
                        <div >
                            <div className="flex justify-center">
                                <img width="400px" height="400px" src={product.img} alt="" />
                            </div>
                            <h1 className="text-center mt-4 text-2xl">{product.title}</h1>
                            <div className="flex justify-center my-5">
                                <Link to={`/products/${product._id}`} className="common-bg text-center text-white py-2 px-5 rounded-md">See Details</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default NewCollection;
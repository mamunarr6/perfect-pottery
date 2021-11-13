import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const NewCollection = () => {
    const [products, setProducts] = useState();
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
    };

    useEffect(() => {
        fetch('https://vast-fjord-76006.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="py-5 bg-gray-50">
            <div className="container mx-auto">
                <h1 className="text-gray-600 text-center text-3xl font-bold my-10 mt-20">Our New <span className=" text-indigo-600">Collections</span></h1>
                <div className=" grid grid-cols-12 my-10 gap-4">
                    <div className="md:col-span-6 col-span-12 border border-indigo-200 bg-white hover:bg-indigo-50 transition-all p-10">
                        <div>
                            <h1 className="text-center text-2xl my-5">Get The Unique Collection</h1>
                            <p className="text-center text-gray-500">We provide the latest ,stylish pottery to our customer.It is happiness to us to serve our customer the best service.</p>
                            <h3 className="text-center text-xl mt-5">Buy this collection with discount</h3>
                            <p className="text-center mt-5">
                                <Link to="/explore" className="common-bg py-2 px-5 text-white rounded">
                                    <button>Get The Product</button>
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-6 col-span-12 bg-white hover:bg-indigo-50 transition-all">
                        {/* =========================
                            New collection slider
                        =========================== */}
                        <Slider {...settings}>
                            {
                                products?.slice(products.length - 3, products.length).map(product => <div
                                    key={product._id}
                                    className=" border border-indigo-200 p-5 mx-1 rounded h-96"
                                >
                                    <div >
                                        <div className="flex justify-center">
                                            <img src={product.img} alt="" />
                                        </div>
                                        <h1 className="text-center mt-4 text-2xl">{product.title}</h1>
                                        <div className="flex justify-center my-5">
                                            <Link to={`/products/${product._id}`} className="common-bg text-center text-white py-2 px-5 rounded-md">See Details</Link>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </Slider>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewCollection;
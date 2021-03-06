import React from 'react';
import { IoStar, IoStarOutline } from 'react-icons/io5';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';


const Products = ({ product }) => {
    const { title, description, price, img, rating, review, _id } = product;

    return (
        <div className="md:col-span-4 sm:col-span-6 col-span-12 transition-all duration-300 hover:shadow-md p-5 rounded bg-white">
            <div className="flex justify-center">
                <img width="400px" height="400px" src={img} alt="" />
            </div>
            <h1 className="text-center mt-4 text-2xl">{title}</h1>
            <div className="text-center my-3 text-gray-500">{description.slice(0, 100)}</div>
            <div className="flex items-center justify-center">
                <div>
                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<IoStarOutline className="text-xl text-yellow-500" />}
                        placeholderSymbol={<IoStar className="text-yellow-500 text-xl" />}
                        fullSymbol={<IoStar />}
                        readonly
                    />
                </div>
                <div className="text-xl  ml-3 mb-2">({review})</div>
            </div>
            <p className="text-center text-xl">Price : {price}$</p>
            <div className="flex justify-center my-5">
                <Link to={`/products/${_id}`} className="common-bg text-center text-white py-2 px-5 rounded-md">Purchase</Link>
            </div>
        </div>
    );
};

export default Products;
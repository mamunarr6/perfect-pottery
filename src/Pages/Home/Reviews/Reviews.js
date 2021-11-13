import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import profile from '../../../images/profile.png'
import { useEffect } from 'react';
import { useState } from 'react';
import Rating from 'react-rating';
import { IoStar, IoStarOutline } from 'react-icons/io5';

const Reviews = () => {
    const [reviews, setReviews] = useState();
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 3000
    };
    useEffect(() => {
        fetch('https://vast-fjord-76006.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="bg-gray-50 py-5">
            <div className="container mx-auto my-10 ">
                <h2 className="text-3xl text-center font-bold my-10 text-gray-600">Testimonials</h2>
                <div className="flex justify-center">
                    <div className="w-8/12 bg-white shadow-md px-5">
                        {/* =========================
                            reviews slider
                        =========================== */}
                        <Slider {...settings}>
                            {
                                reviews?.map(review => <div key={review._id}>
                                    <div className="flex justify-center my-4 ">
                                        <img className=" w-28 rounded-full" src={review.img ? review.img : profile} alt="" />
                                    </div>
                                    <div className="text-gray-500">
                                        <h4>{review.review}</h4>
                                    </div>
                                    <div className="flex justify-center mt-5">
                                        <Rating
                                            placeholderRating={review.rating}
                                            emptySymbol={<IoStarOutline className="text-xl text-yellow-500" />}
                                            placeholderSymbol={<IoStar className="text-yellow-500 text-xl" />}
                                            fullSymbol={<IoStar />}
                                            readonly
                                        />
                                    </div>
                                    <h2 className="text-center my-1 text-2xl font-semibold text-gray-600">{review.name}</h2>
                                </div>)
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
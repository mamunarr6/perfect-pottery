import React from 'react';

const HomeBanner = () => {
    return (
        <div className="container mx-auto grid grid-cols-12 gap-4">
            <div className=" col-span-12 sm:col-span-6 flex items-center justify-center">
                <div className=" text-left">
                    <div className="text-4xl font-bold tracking-wider leading-10 text-gray-600">
                        <p className="mb-3">POTTERY</p>
                        <p>
                            MADE WITH <span className="text-indigo-600">LOVE</span>
                        </p>
                    </div>
                    <p className="text-base my-7 text-gray-500 w-3/4">Every items is created in our firm very carefully with focus on the smallest detail.The art of pottery is our inspiration and passion.</p>
                </div>
            </div>
            <div className=" col-span-10 sm:col-span-6">
                <img style={{ width: '100%' }} src="https://i.ibb.co/f8dqQ4c/banner-2.png" alt="" />
            </div>
        </div>
    );
};

export default HomeBanner;
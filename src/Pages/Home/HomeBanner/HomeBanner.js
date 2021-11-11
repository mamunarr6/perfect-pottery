import React from 'react';

const HomeBanner = () => {
    return (
        <div className="container mx-auto grid grid-cols-12 gap-4">
            <div className="col-span-6 text-left my-32">
                <div className="">
                    <h1 className="text-4xl font-bold tracking-wider">
                        POTTERY <br /> MADE WITH LOVE
                    </h1>
                    <p className="text-base my-7">Every items is created in our firm very carefully with focus on the smallest detail.The art of pottery is our inspiration and passion.</p>
                </div>
            </div>
            <div className="col-span-6">
                <img style={{ width: '100%' }} src="https://i.ibb.co/f8dqQ4c/banner-2.png" alt="" />
            </div>
        </div>
    );
};

export default HomeBanner;
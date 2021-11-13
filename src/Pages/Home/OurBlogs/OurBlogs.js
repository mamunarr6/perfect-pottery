import React, { useEffect, useState } from 'react';

const OurBlogs = () => {
    const [news, setNews] = useState();
    useEffect(() => {
        fetch('https://vast-fjord-76006.herokuapp.com/news')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    return (
        <div className="py-20">
            <div className="container mx-auto">
                <h1 className=" text-3xl text-center font-bold my-10 text-gray-600">Our Blog</h1>
                <div className="grid grid-cols-12 gap-4">
                    {
                        news?.map(n => <div key={n._id} className="lg:col-span-4 col-span-12 bg-indigo-50 py-10 hover:bg-white transition duration-500 hover:shadow-md">

                            <div className="flex justify-center">
                                <img src={n.img} alt="" />
                            </div>

                            <div>
                                <h3 className="text-center text-gray-600 text-md my-3">{n.role}</h3>
                                <h1 className="text-center text-gray-700 text-xl my-3"> {n.title} </h1>
                                <p className="text-center text-gray-500">
                                    {n.news.slice(0, 46)} <span className="text-indigo-600 cursor-pointer">More</span>
                                </p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OurBlogs;
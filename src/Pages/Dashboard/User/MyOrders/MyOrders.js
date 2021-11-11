import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { IoStar, IoStarOutline } from 'react-icons/io5';
import Rating from 'react-rating';
import useAuth from '../../../../hooks/useAuth';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState();
    const { user } = useAuth();
    const email = user.email;

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders?email=${email}`)
            .then(res => res.json())
            .then(result => {
                setMyOrders(result)
            })
    }, [email])

    const handleDelete = (id) => {
        if (window.confirm('Are sure to delete?')) {
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        const newOrder = myOrders.filter(c => c._id !== id)
                        setMyOrders(newOrder)
                    }
                })
        }
    };
    return (
        <div className="container mx-auto">
            <h1 className="text-center text-4xl font-bold tracking-wide text-gray-700 py-8">MY ORDERS : {myOrders?.length}</h1>
            <div className="container mx-auto grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 gap-2 lg:gap-6 max-w-xs lg:max-w-full md:max-w-4xl">
                {myOrders?.map(order => <div key={order._id} className="col-span-6 md:col-span-6 grid grid-cols-12  gap-5 border border-gray-400 rounded hover:bg-gray-200 transition-all my-4 h-48">
                    <div className="col-span-5 h-48">
                        <img className="w-full h-full rounded-l" src={order.order.img} alt="" />
                    </div>

                    <div className="col-span-7 ">
                        <h3 className="lg:text-2xl text-xl font-bold text-gray-800">{order.order.title}</h3>

                        <div className="flex items-center justify-left mt-3">
                            <div>
                                <Rating
                                    placeholderRating={order.order.rating}
                                    emptySymbol={<IoStarOutline className="text-xl text-gray-600" />}
                                    placeholderSymbol={<IoStar className="text-yellow-500 text-xl" />}
                                    fullSymbol={<IoStar />}
                                    readonly
                                />
                            </div>
                            <div className="text-xl  ml-3 mb-2">({order.order.review})</div>
                        </div>

                        <div className="grid grid-cols-5 items-center">
                            <p className=" font-medium my-5 col-span-2">Cost: {order.order.price}$</p>

                            <div className="col-span-3">
                                <button className="bg-indigo-500 text-white py-2 px-3 rounded-xl hover:bg-indigo-600" onClick={() => handleDelete(order._id)}>Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default MyOrders;
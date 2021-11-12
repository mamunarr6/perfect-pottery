import React, { useEffect, useState } from 'react';
import { IoCheckmarkSharp, IoTrash } from 'react-icons/io5';
import useAuth from '../../../../hooks/useAuth';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState();
    const { user } = useAuth();
    const email = user.email;

    //load all orders
    useEffect(() => {
        fetch(`https://vast-fjord-76006.herokuapp.com/orders`)
            .then(res => res.json())
            .then(result => {
                setOrders(result)
            })
    }, [email])


    /* ====================================
            handle the delete button
    ====================================== */
    const handleDelete = (id) => {

        if (window.confirm('Are sure to delete?')) {
            fetch(`https://vast-fjord-76006.herokuapp.com/deleteOrder/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        const newOrder = orders.filter(c => c._id !== id)
                        setOrders(newOrder)
                    }
                });
        }
    };

    /* ====================================
           handle the status
   ====================================== */
    const handleStatus = e => {
        const order = orders.filter(order => order._id === e)
        //update single order
        fetch(`https://vast-fjord-76006.herokuapp.com/orders/update/${e}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    //confirm update and load all orders
                    fetch(`https://vast-fjord-76006.herokuapp.com/orders`)
                        .then(res => res.json())
                        .then(result => setOrders(result))
                    alert('update successfully')
                }
                if (result.modifiedCount === 0) {
                    alert('already updated')
                }
            })

    }
    return (
        <div className="container mx-auto">
            <h1 className="text-center text-4xl font-bold tracking-wide text-gray-600 py-8">MANAGE ALL ORDERS : {orders?.length}</h1>


            {orders?.map((order, index) => <div key={order._id} className="grid grid-cols-12 border-b-4 border-indigo-400 mb-5 pb-1">


                <div className="bg-indigo-200 pt-5 pb-2 text-lg text-center font-medium col-span-12 lg:col-span-1">
                    <div>{index + 1}</div>
                </div>
                <div className="bg-indigo-100 pt-5 pb-2 text-lg text-center font-medium  col-span-12 lg:col-span-4">
                    <div>{order?.email}</div>
                </div>
                <div className="bg-indigo-200 pt-5 pb-2 text-lg text-center font-medium  col-span-12 lg:col-span-3">
                    <div>{order?.order.title}</div>
                </div>
                <div className="bg-indigo-100 pt-5 pb-2 text-lg text-center font-medium  col-span-12 lg:col-span-4">
                    <div className="flex justify-center gap-4 items-center">
                        <div className="common-bg text-white py-1 px-2 rounded ">
                            {order?.status}
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            <button
                                className="bg-green-500 text-white py-2 px-3 rounded-xl hover:bg-green-400" onClick={() => handleStatus(order._id)}><IoCheckmarkSharp />
                            </button>
                            <button
                                className="bg-red-500 text-white py-2 px-3 rounded-xl hover:bg-red-400" onClick={() => handleDelete(order._id)}><IoTrash />
                            </button>
                        </div>
                    </div>
                </div>

            </div>)}


        </div >
    );
};

export default ManageAllOrders;
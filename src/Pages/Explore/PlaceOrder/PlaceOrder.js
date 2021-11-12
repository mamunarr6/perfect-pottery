import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoStar, IoStarOutline } from 'react-icons/io5';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const PlaceOrder = () => {
    const [productDetails, setProductDetails] = useState();
    const { user, authError } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams();
    //load single product
    useEffect(() => {
        fetch(`https://vast-fjord-76006.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProductDetails(data))
    }, [id])
    //place the oreder
    const onSubmit = data => {
        data.order = productDetails;
        data.status = 'pending';
        fetch('https://vast-fjord-76006.herokuapp.com/placeOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order Placed Successflly');
                    reset();
                }
            })
    }
    return (
        <div>
            <Navigation></Navigation>
            <div className="container mx-auto">
                <div className="md:grid grid-cols-12 gap-5 my-5">
                    {/* =======================================
                            Products Details
                    ============================================ */}
                    <div className="col-span-6">
                        <div className=" border border-gray-300 p-5 bg-gray-100 rounded">
                            <div className="flex justify-center">
                                <img width="400px" height="400px" src={productDetails?.img} alt="" />
                            </div>
                            <h1 className="text-center mt-4 text-2xl">{productDetails?.title}</h1>

                            <div className="flex items-center justify-center">
                                <div>
                                    <Rating
                                        placeholderRating={productDetails?.rating}
                                        emptySymbol={<IoStarOutline className="text-xl text-gray-600" />}
                                        placeholderSymbol={<IoStar className="text-yellow-500 text-xl" />}
                                        fullSymbol={<IoStar />}
                                        readonly
                                    />
                                </div>
                                <div className="text-xl  ml-3 mb-2">({productDetails?.review})</div>
                            </div>
                            <p className="text-center text-xl">Price : {productDetails?.price}$</p>
                            <div className="text-center my-5">
                                <h1 className="text-3xl font-medium mb-5">See The Details Of This Product</h1>
                                <div className="text-lg text-gray-600">{productDetails?.description}</div>
                            </div>
                        </div>
                    </div>

                    {/* ====================================================
                                    Place The Order
                    ===================================================== */}
                    <div className="col-span-6">

                        <h1 className="text-center text-3xl font-semibold text-gray-700 my-5">Please add the information and place the order.</h1>
                        <div className="flex justify-center my-5">

                            <form className="md:w-11/12 xl:h-2/5 w-4/5 rounded bg-gray-200 py-14 md:px-20 px-5" onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    className="block w-full my-4 py-4 outline-none px-3 rounded"
                                    defaultValue={user.displayName} {...register("name")} />

                                <input
                                    className="block w-full my-4 py-4 outline-none px-3 rounded"
                                    defaultValue={user.email} {...register("email", { required: true })} />
                                {authError.email && <span className="error">This field is required</span>}

                                <input
                                    className="block w-full my-4 py-4 outline-none px-3 rounded"
                                    placeholder="Address" defaultValue="" {...register("address")} />
                                <input
                                    className="block w-full my-4 py-4 outline-none px-3 rounded"
                                    placeholder="City" defaultValue="" {...register("city")} />
                                <input
                                    className="block w-full my-4 py-4 outline-none px-3 rounded"
                                    placeholder="phone number" defaultValue="" {...register("phone")} />

                                <input
                                    className="common-bg block w-full my-4 py-4 outline-none px-3 rounded text-white font-semibold hover:bg-indigo-600"
                                    type="submit" value="Place The Order" />
                            </form>

                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;
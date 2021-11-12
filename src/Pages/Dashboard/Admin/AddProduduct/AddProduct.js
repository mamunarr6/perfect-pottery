import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data.img)
        fetch('https://vast-fjord-76006.herokuapp.com/addProduct', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
    };

    return (
        <div>
            <h1 className="text-4xl text-gray-600 my-10 font-semibold text-center"> Add A Product</h1>
            <div className="flex justify-center my-14 relative">
                <div className="w-full flex justify-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="p-10 sm:w-4/6 w-9/12 bg-indigo-100 rounded">

                        <input
                            className="bg-white py-3 px-2 text-xl font-medium text-gray-600 my-5 w-full rounded"
                            {...register("title", { required: true })} placeholder="Proudct Title" />
                        <br />

                        <textarea
                            className="bg-white py-3 px-2 text-gray-600 my-3 w-full rounded"
                            {...register("description", { required: true })} placeholder="Product Description" />
                        <br />

                        <input
                            className="bg-white py-3 px-2 text-gray-600 my-3 w-full rounded"
                            {...register("img", { required: true })} placeholder="Product Image" />
                        <br />
                        <input type="number"
                            className="bg-white py-3 px-2 text-gray-600 my-3 w-full rounded"
                            {...register("price", { required: true })} placeholder="Product Price" />
                        <br />
                        <input
                            className="bg-white py-3 px-2 text-gray-600 my-3 w-full rounded"
                            {...register("rating", { required: true })} placeholder="Product Rating" />
                        <br />
                        <input type="number"
                            className="bg-white py-3 px-2 text-gray-600 my-3 w-full rounded"
                            {...register("review", { required: true })} placeholder="Product Review" />
                        <br />

                        <input className="common-bg  py-3 px-2 text-white text-lg font-semibold my-3 w-full rounded" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
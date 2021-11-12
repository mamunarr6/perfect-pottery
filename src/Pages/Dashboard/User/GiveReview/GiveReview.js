import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../../hooks/useAuth';

const GiveReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.img = user.photoURL;
        fetch('https://vast-fjord-76006.herokuapp.com/giveReview', {
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
            <h1 className="text-4xl text-gray-600 my-10 font-semibold text-center">Give Your Opinion About Our Service.</h1>
            <div className="flex justify-center my-14 relative">
                <div className="w-full flex justify-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="p-10 sm:w-3/6 bg-indigo-100 rounded">

                        <input className="bg-white py-3 px-2 text-xl font-medium text-gray-600 my-5 w-full rounded"
                            defaultValue={user.displayName} {...register("name", { required: true })} /> <br />

                        <textarea className="bg-white py-3 px-2 text-gray-600 my-3 w-full rounded" {...register("review", { required: true })} placeholder="What's on your mind?" /> <br />

                        <input className="bg-white py-3 px-2 text-gray-600 my-3 w-full rounded" {...register("rating", { required: true })} placeholder="Give rating out of 5" /> <br />

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input className="common-bg  py-3 px-2 text-white text-lg font-semibold my-3 w-full rounded" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GiveReview;
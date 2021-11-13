import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Spinner from '../../Spinner';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const { registerUser, setUser, isLoading } = useAuth();
    const history = useHistory();

    //handle email password Registration
    const onSubmit = data => {
        const name = data.firstName + ' ' + data.lastName;
        if (data.password !== data.password2) {
            alert('please confirm your password')
            return
        }
        registerUser(data.email, data.password, name, history)
        setUser({});
    }
    return (
        <div className="login">
            <Navigation></Navigation>
            <div className="container mx-auto ">
                <h1 className="text-white text-center text-4xl font-bold pt-10">Please Rgister</h1>
                <div className="flex justify-end items-center my-14">
                    {
                        !isLoading &&
                        <form onSubmit={handleSubmit(onSubmit)} className="p-10 sm:w-3/6 bg-transparent">
                            <input className=" w-full mb-4 h-10 px-6 rounded" type="text" {...register("firstName")} required placeholder="First Name" />
                            <br />
                            <input className=" w-full mb-4 h-10 px-6 rounded" type="text" {...register("lastName")} placeholder="Last Name" />
                            <br />
                            <input className=" w-full mb-4 h-10 px-6 rounded" type="email" {...register("email")} required placeholder="Your Email" />
                            <br />
                            <input className=" w-full mb-4 h-10 px-6 rounded" type="password" {...register("password")} placeholder="Set Password" />
                            <br />
                            <input className=" w-full mb-4 h-10 px-6 rounded" type="password" {...register("password2")} placeholder="Confirm Password" />
                            <br />
                            <input style={{ background: 'linear-gradient(90deg,rgb(110,94,254)0%,rgba(73,63,252,1)100%)' }} className=" w-full h-10 px-6 rounded text-lg font-semibold text-white" type="submit" value="Register" />
                            <p className="my-8 text-white text-2xl font-semibold">Already User ? Please <NavLink className="text-blue-500" to="/login">Login</NavLink></p>
                        </form>
                    }
                    {
                        isLoading && <div className=" my-56">
                            <Spinner></Spinner>
                        </div>
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;
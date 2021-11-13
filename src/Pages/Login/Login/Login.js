import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Spinner from '../../Spinner';
import './Login.css';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { logInUser, googleLogInUser, isLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();

    //handle email password login
    const onSubmit = data => {
        logInUser(data.email, data.password, location, history)
    }

    //handle google login
    const handleGoogleLogin = () => {
        googleLogInUser(location, history)
    }

    return (
        <>
            <Navigation></Navigation>
            <div className="login">
                <div className="container mx-auto ">
                    <h1 className="text-white text-center text-4xl font-bold pt-10">Please Login</h1>
                    <div className="flex justify-end items-center my-14 relative">
                        {
                            !isLoading &&
                            <form onSubmit={handleSubmit(onSubmit)} className="p-10 sm:w-3/6 bg-transparent">
                                <input className=" w-full mb-4 h-10 px-6 rounded" type="email" {...register("email")} placeholder="Your Email" />
                                <br />
                                <input className=" w-full mb-4 h-10 px-6 rounded" type="password" {...register("password")} placeholder="Your Password" />
                                <br />
                                <input style={{ background: 'linear-gradient(90deg,rgb(110,94,254)0%,rgba(73,63,252,1)100%)' }} className=" w-full h-10 px-6 rounded text-lg font-semibold text-white" type="submit" value="Login" />
                                <br />
                                <p className="text-white my-5">----------------OR----------------</p>
                                <button onClick={handleGoogleLogin} className="border border-gray-400 px-5 py-3  rounded-full flex items-center hover:bg-gray-100 transition bg-blue-100">
                                    <img className="w-8 mr-2" src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google icon" />
                                    Continue with Google
                                </button>
                                <p className="my-8 text-white text-2xl font-semibold">New User ? Please <NavLink className="text-blue-500" to="/register">Register</NavLink></p>
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
        </>
    );
};

export default Login;
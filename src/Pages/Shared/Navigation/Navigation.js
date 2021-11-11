import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5";
import './Navigation.css';
import useAuth from '../../../hooks/useAuth';
import profile from '../../../images/profile.png'

const Navigation = () => {
    const { user, logOut } = useAuth();
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (

        <div className="navigation">
            <div className="navbarItems container mx-auto">
                <h1 className="navbar-logo">Perfect Pottery</h1>
                <div className="menu-icon" onClick={handleClick}>
                    {
                        clicked ? <IoClose style={{ color: 'white', width: '35px', fontWeight: '700', marginTop: '5px' }} /> : <IoMenu style={{ color: 'white', width: '35px', fontWeight: '700', marginTop: '5px' }} />
                    }
                </div>
                <div className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    <NavLink className="nav-links" style={{ textDecoration: 'none' }} to="/home">Home</NavLink>

                    <NavLink className="nav-links" style={{ textDecoration: 'none' }} to="/explore">Explore</NavLink>

                    <NavLink className="nav-links" style={{ textDecoration: 'none' }} to="/dashboard">Dashboard</NavLink>

                    {
                        user.email &&
                        <div className="flex justify-center items-center nav-links gap-1 ">
                            <h1 className="" style={{ textDecoration: 'none' }}>{user.displayName}</h1>
                            <div className="mt-1 profile rounded-full w-5">
                                <img className="rounded-full" src={user.photoURL ? user.photoURL : profile} alt="" />
                            </div>
                        </div>

                    }

                    {
                        user.email ?
                            <NavLink onClick={logOut} to="/login" className="nav-links" style={{ textDecoration: 'none' }} >Logout</NavLink>
                            :
                            <NavLink to="/login" className="nav-links" style={{ textDecoration: 'none' }} >Login</NavLink>
                    }
                </div>
            </div>
        </div>

    );
};

export default Navigation;
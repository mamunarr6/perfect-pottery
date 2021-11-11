import React from 'react';
import { useState } from 'react';
import { NavLink, useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import AdminRoute from '../Admin/AdminRoute/AdminRoute';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import MyOrders from '../User/MyOrders/MyOrders';
import Pay from '../User/Pay/Pay';
import { FaBars } from "react-icons/fa";
import GiveReview from '../User/GiveReview/GiveReview';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin, logOut } = useAuth();
    const [clicked, setClicked] = useState(false);

    const handleDashboard = () => {
        setClicked(!clicked)
    }
    return (
        <div>
            <div className="common-bg py-5 text-center text-white font-medium text-2xl">
                <div className="flex justify-around container mx-auto">
                    <div className="md:hidden block">
                        <FaBars onClick={handleDashboard} />
                    </div>
                    <h1>Dashboard</h1>
                </div>
            </div>
            <div className=" grid grid-cols-12 gap-5">
                <div className='md:col-span-4  md:block bg-gray-200 col-span-12'>
                    <div className={clicked ? 'block' : ' hidden md:block '}>

                        <Link className="text-xl decoration-slice" to="/explore"><button className="w-full py-3 dashboard-nav font-medium">Explore</button></Link>


                        <NavLink className="text-xl decoration-slice " to={`${url}`}><button className="w-full py-3 dashboard-nav font-medium">MyOrders</button></NavLink>


                        <NavLink className="text-xl decoration-slice " to={`${url}/Pay`}><button className="w-full py-3 dashboard-nav font-medium" >Pay</button></NavLink>

                        <NavLink className="text-xl decoration-slice" to={`${url}/giveReview`}><button className="w-full py-3 dashboard-nav font-medium">Give Review</button></NavLink>


                        {admin &&
                            <div>

                                <NavLink className="text-xl decoration-slice" to={`${url}/makeAdmin`}><button className="w-full py-3 dashboard-nav font-medium">Make Admin</button></NavLink>


                                <NavLink className="text-xl decoration-slice" to={`${url}/addDoctor`}><button className="w-full py-3 dashboard-nav font-medium">Manage All Orders</button></NavLink>


                                <NavLink className="text-xl decoration-slice" to={`${url}/addDoctor`}><button className="w-full py-3 dashboard-nav font-medium">Manage Orders</button></NavLink>


                                <NavLink className="text-xl decoration-slice" to={`${url}/addDoctor`}><button className="w-full py-3 dashboard-nav font-medium">Add A Product</button></NavLink>


                            </div>
                        }

                        <button className="text-xl font-medium w-full dashboard-nav py-3" onClick={logOut}>Logout</button>
                    </div>
                </div>
                <div className="md:col-span-8 col-span-12">
                    <Switch>
                        <Route exact path={`${path}`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/giveReview`}>
                            <GiveReview></GiveReview>
                        </Route>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                    </Switch>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink, useRouteMatch, Switch, Link, Route } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import NotFound from '../../../NotFound/NotFound';
import Footer from '../../../Shared/Footer/Footer';
import AddProduct from '../AddProduduct/AddProduct';
import AdminRoute from '../AdminRoute/AdminRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';

const AdminDashboard = () => {
    let { path, url } = useRouteMatch();
    const { logOut } = useAuth();
    const [clicked, setClicked] = useState(false);

    const handleDashboard = () => {
        setClicked(!clicked)
    }
    return (
        <div>
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
                    <div className='md:col-span-4  md:block bg-indigo-100 col-span-12'>
                        <div className={clicked ? 'block' : ' hidden md:block mt-10 mb-52'}>

                            <Link className="text-xl decoration-slice" to="/explore"><button className="w-full py-3 dashboard-nav font-medium">Explore</button></Link>


                            <NavLink className="text-xl decoration-slice" to={`${url}`}>
                                <button onClick={() => setClicked(false)}
                                    className="w-full py-3 dashboard-nav font-medium">Manage All Orders</button></NavLink>


                            <NavLink className="text-xl decoration-slice" to={`${url}/manageProducts`}>
                                <button onClick={() => setClicked(false)}
                                    className="w-full py-3 dashboard-nav font-medium">Manage Products</button></NavLink>


                            <NavLink className="text-xl decoration-slice" to={`${url}/addProduct`}>
                                <button onClick={() => setClicked(false)}
                                    className="w-full py-3 dashboard-nav font-medium">Add A Product</button></NavLink>

                            <NavLink className="text-xl decoration-slice" to={`${url}/makeAdmin`}>
                                <button onClick={() => setClicked(false)}
                                    className="w-full py-3 dashboard-nav font-medium">Make Admin</button></NavLink>

                            <button className="text-xl font-medium w-full dashboard-nav py-3" onClick={logOut}>Logout</button>
                        </div>
                    </div>
                    <div className="md:col-span-8 col-span-12">
                        <Switch>
                            <AdminRoute exact path={`${path}`}>
                                <ManageAllOrders></ManageAllOrders>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageProducts`}>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>
                            <AdminRoute path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>
                            </AdminRoute>
                            <AdminRoute path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <Route path={`*`}>
                                <NotFound></NotFound>
                            </Route>
                        </Switch>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AdminDashboard;
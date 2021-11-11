import React from 'react';
import { useState } from 'react';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AdminRoute from '../Admin/AdminRoute/AdminRoute';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import MyOrders from '../User/MyOrders/MyOrders';
import Pay from '../User/Pay/Pay';
import Review from '../User/Review/Review';

const Dashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    let { path, url } = useRouteMatch();
    const { admin, logOut } = useAuth();

    // const handleDrawerToggle = () => {
    //     setMobileOpen(!mobileOpen);
    // };
    return (
        <div>
            <Navigation></Navigation>
            <div className=" container mx-auto grid grid-cols-12 gap-5">
                <div className="col-span-4">
                    <NavLink style={{ textDecoration: 'none', }} to="/explore">Explore</NavLink><br />
                    <NavLink style={{ textDecoration: 'none', }} to={`${url}`}>MyOrders</NavLink><br />
                    <NavLink style={{ textDecoration: 'none', }} to={`${url}/Pay`}>Pay</NavLink><br />
                    <NavLink style={{ textDecoration: 'none', }} to={`${url}/review`}>Review</NavLink><br />
                    {admin &&
                        <div>
                            <NavLink style={{ textDecoration: 'none', }} to={`${url}/makeAdmin`}>Make Admin</NavLink><br />
                            <NavLink style={{ textDecoration: 'none', }} to={`${url}/addDoctor`}>Manage All Orders</NavLink><br />
                            <NavLink style={{ textDecoration: 'none', }} to={`${url}/addDoctor`}>Manage Orders</NavLink><br />
                            <NavLink style={{ textDecoration: 'none', }} to={`${url}/addDoctor`}>Add A Product</NavLink><br />

                        </div>
                    }
                    <button onClick={logOut}>Logout</button>
                </div>
                <div className="col-span-8">
                    <Switch>
                        <Route exact path={`${path}`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        {/* <AdminRoute path={`${path}/addDoctor`}>
                            <AddDoctor></AddDoctor>
                        </AdminRoute> */}
                    </Switch>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;
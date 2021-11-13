import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink, useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import NotFound from '../../../NotFound/NotFound';
import Footer from '../../../Shared/Footer/Footer';
import GiveReview from '../GiveReview/GiveReview';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';

const UserDashboard = () => {
    let { path, url } = useRouteMatch();
    const { logOut } = useAuth();
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
                <div className='md:col-span-4  md:block bg-indigo-100 col-span-12'>
                    <div className={clicked ? 'block' : ' hidden md:block mt-10 mb-52'}>

                        <Link className="text-xl decoration-slice" to="/explore"><button className="w-full py-3 dashboard-nav font-medium">Explore</button></Link>


                        <NavLink className="text-xl decoration-slice " to={`${url}`}><button
                            onClick={() => setClicked(false)}
                            className="w-full py-3 dashboard-nav font-medium">MyOrders</button></NavLink>


                        <NavLink className="text-xl decoration-slice " to={`${url}/Pay`}><button
                            onClick={() => setClicked(false)}
                            className="w-full py-3 dashboard-nav font-medium" >Pay</button></NavLink>

                        <NavLink className="text-xl decoration-slice" to={`${url}/giveReview`}><button
                            onClick={() => setClicked(false)}
                            className="w-full py-3 dashboard-nav font-medium">Give Review</button></NavLink>


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
                        <Route path={`*`}>
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UserDashboard;
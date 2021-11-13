import React from 'react';
import useAuth from '../../../hooks/useAuth';
import AdminDashboard from '../Admin/AdminDashboard/AdminDashboard';
import UserDashboard from '../User/UserDashboard/UserDashboard';

const Dashboard = () => {
    const { admin } = useAuth();


    return (
        <div>
            {admin ? <AdminDashboard /> : <UserDashboard />}
        </div>
    );
};

export default Dashboard;
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import Spinner from '../../../Spinner';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth();
    if (isLoading) {
        return <div className="relative my-10">
            <Spinner />
        </div>
    } else {
        return (
            <Route
                {...rest}
                render={({ location }) =>
                    user.email && admin ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        );
    }
};

export default AdminRoute;
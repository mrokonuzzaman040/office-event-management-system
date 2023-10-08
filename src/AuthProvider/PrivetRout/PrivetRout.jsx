import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AuthContex } from '../AuthProvider';

const PrivetRout = ({ children }) => {

    const { user, loading } = useContext(AuthContex);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivetRout;
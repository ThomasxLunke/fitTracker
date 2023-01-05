import React from 'react';
import { useContext } from 'react';
import AuthContext from './authContext';
import { Outlet, Navigate } from "react-router-dom"

const PrivateRoute = () => {
    const { isLoggedIn } = useContext(AuthContext)
    return isLoggedIn ? <Outlet /> : <Navigate to="/home-page" />
    
}

export default PrivateRoute;
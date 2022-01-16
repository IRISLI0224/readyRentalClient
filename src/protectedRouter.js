import {Outlet, Navigate} from "react-router";
import React from 'react';
import Login from './pages/Login';
import { getUserFromToken} from './utils/authentication';

const useAuth = ()=>{
    const token = getUserFromToken();
    let user = {loggedIn: false};
    if(token){
        user.loggedIn=true;
    }
    return user && user.loggedIn;
};

const ProtectedRouter = ()=>{
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRouter;
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const AuthGuard = ({children}) => {
    const users = useSelector((state) => state.users.users);
    const token = JSON.parse(localStorage.getItem("token"));
  
    if (!token) return children;
    else return <Navigate replace to="/dashboard" />;
}

export default AuthGuard
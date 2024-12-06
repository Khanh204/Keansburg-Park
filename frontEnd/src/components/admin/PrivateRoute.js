import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const token = localStorage.getItem('token');
    const isAuthenticated = !!token;

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" state={{ message: 'Vui lòng đăng nhập để truy cập trang này' }} />;
};

export default PrivateRoute;

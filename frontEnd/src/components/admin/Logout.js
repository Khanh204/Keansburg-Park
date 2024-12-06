import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        alert('Đã đăng xuất');
        // navigate('/login');
        navigate('/');
    };

    return (
        <button className="btn btn-primary rounded-pill py-2 px-4 flex-shrink-0" onClick={handleLogout}>Đăng xuất</button>
    );
};

export default Logout;

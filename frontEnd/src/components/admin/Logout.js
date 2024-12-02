import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        alert('Đã đăng xuất');
        navigate('/login');
    };

    return (
        <button onClick={handleLogout}>Đăng xuất</button>
    );
};

export default Logout;

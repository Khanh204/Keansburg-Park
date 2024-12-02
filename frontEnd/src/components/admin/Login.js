import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const message = location.state?.message || '';

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/login', { username, password });
            localStorage.setItem('token', response.data.token);
            alert('Đăng nhập thành công');
            navigate('/admin');
        } catch (error) {
            alert('Đăng nhập thất bại');
        }
    };

    return (
        <div>
            <h2>Đăng nhập</h2>
            {message && <p>{message}</p>}
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Tên đăng nhập" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mật khẩu" />
            <button onClick={handleLogin}>Đăng nhập</button>
        </div>
    );
};

export default Login;

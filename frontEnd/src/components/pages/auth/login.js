import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import axios from 'axios';

function Login() {
    const [values, setValues] = useState({
        username: '',
        // email: '',
        password: ''
    });

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const handleLogin = (event) => {
        // event.preventDefault();
        axios.post("http://localhost:3333/login", values)
            .then(res => {
                if (res.data.Status === "Success") {
                    alert("Login Successfully!");
                    navigate("/");
                } else {
                    alert(res.data.Error);
                }
            })
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleLogin();
        }
    };

    return (
        <div className="content top-space"
            style={{ height: '100vh', display: 'flex', alignItems: 'center', transform: 'translateY(-180px)' }}>
            <div className="container-fluid" style={{ textAlign: 'justify' }}>
                <div className="account-content">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-6 login-right" style={{ marginTop: '-10px' }}>
                            <form method="post">
                                <div className="mb-3 form-focus">
                                    <label className="focus-label">User Id</label>
                                    <input onChange={e => setValues({ ...values, username: e.target.value })} type="text" className="form-control floating" placeholder="User Id" />
                                </div>
                                <div style={{ marginTop: '25px' }} className="mb-3 form-focus">
                                    <label className="focus-label">Password</label>
                                    <input onChange={e => setValues({ ...values, password: e.target.value })} type="password" className="form-control floating" placeholder="Password"
                                        onKeyDown={handleKeyPress} />
                                </div>
                                <div className="text-end">
                                    <a className="forgot-link" href="/#">Forgot Password ?</a>
                                </div>
                                <Link onClick={handleLogin} className="btn btn-primary w-100 btn-lg login-btn" type="submit">Login</Link>
                                <div className="login-or">
                                    <span className="or-line"></span>
                                </div>
                                <div className="text-center dont-have">Don’t have an account?
                                    <Link to="/register">Register</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;

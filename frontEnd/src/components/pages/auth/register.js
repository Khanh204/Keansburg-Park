import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Register() {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};


        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email is invalid';
        } else {
            delete errors.email;
        }

        if (!values.username) {
            errors.username = 'Username is required';
        } else {
            delete errors.username;
        }

        if (!values.password) {
            errors.password = 'Password is required';
        } else {
            delete errors.password;
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const navigate = useNavigate();

    const handleRegister = (event) => {
        // event.preventDefault();
        if (validateForm()) {
            axios.post("http://localhost:3333/register", values)
                .then(res => {
                    if (res.data.Status === "Success") {
                        alert("Register Successfully!");
                        navigate("/login");
                    } else {
                        alert("Error");
                    }
                });
        } else {
            alert("Form is invalid");
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleRegister();
        }
    };

    return (
        <>
            <div className="content top-space" style={{ height: '120vh', display: 'flex', alignItems: 'center', transform: 'translateY(-120px)' }}>
                <div className="container-fluid" style={{ textAlign: 'justify' }}>
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="account-content">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-md-12 col-lg-6 login-right">
                                        <form >
                                            <div className="mb-3 form-focus">
                                                <input onChange={e => setValues({ ...values, username: e.target.value })} name="name" type="text" className="form-control floating" placeholder="UserName" />
                                            </div>
                                            <div className="mb-3 form-focus">
                                                <input onChange={e => setValues({ ...values, email: e.target.value })} name="email" type="email" required className="form-control floating" placeholder="Email" />
                                            </div>
                                            <div className="mb-3 form-focus">
                                                <input onChange={e => setValues({ ...values, password: e.target.value })} name="password" type="password" className="form-control floating" placeholder="Password"
                                                    onKeyDown={handleKeyPress} />
                                            </div>
                                            <button onClick={handleRegister} className="btn btn-primary w-100 btn-lg login-btn" type="submit">Register</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Register;
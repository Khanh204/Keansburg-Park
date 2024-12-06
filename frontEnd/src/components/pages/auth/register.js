import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Register() {
    const [values, setValues] = useState({
        username: '',
        // email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleRegister = (event) => {
        // event.preventDefault();
        axios.post("http://localhost:3333/register", values)
            .then(res => {
                if (res.data.Status === "Success") {
                    alert("Register Successfully!");
                    navigate("/login");
                } else {
                    alert("Error");
                }
            })
            .then(err => console.log(err));
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
                                                <label className="focus-label">Name</label>
                                                <input onChange={e => setValues({ ...values, username: e.target.value })} name="name" type="text" className="form-control floating" />
                                            </div>
                                            {/* <div className="mb-3 form-focus">
                                                <label className="focus-label">Email</label>
                                                <input onChange={e => setValues({...values, email: e.target.value})} name="email" type="email" required className="form-control floating" />
                                            </div> */}
                                            <div className="mb-3 form-focus">
                                                <label className="focus-label">Password</label>
                                                <input onChange={e => setValues({ ...values, password: e.target.value })} name="password" type="password" className="form-control floating" 
                                                onKeyDown={handleKeyPress}/>
                                            </div>
                                            {/* <div className="mb-3 form-focus">
                                                <label className="focus-label">Mobile Number</label>
                                                <input name="phonenumber" type="text" className="form-control floating" required />
                                            </div> */}

                                            {/* <div className="mb-3 form-focus">
                                                <label className="focus-label">Birthday</label>
                                                <input style={{ height: "70px" }} name="birthday" type="date" className="form-control floating" />
                                            </div> */}
                                            {/* <div className="mb-3 form-focus">
                                                <label className="focus-label">Address</label>
                                                <input name="address" type="text" className="form-control floating" required
                                                />
                                            </div> */}
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
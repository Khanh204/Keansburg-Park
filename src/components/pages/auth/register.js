
function Register(){
    
    return(
        <>
        <div className="content top-space"   style={{ height: '120vh', display: 'flex', alignItems: 'center', transform: 'translateY(-120px)'  }}>
            <div className="container-fluid" style={{textAlign:'justify'}}>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="account-content">
                            <div className="row align-items-center justify-content-center">                     
                                <div className="col-md-12 col-lg-6 login-right">                             
                                    <form action="patient-register-step1.html"method="POST">
                                        <div className="mb-3 form-focus">
                                            <label className="focus-label">Name</label>
                                            <input name="name" type="text" className="form-control floating"/>                                          
                                        </div>
                                        <div className="mb-3 form-focus">
                                            <label className="focus-label">Email</label>
                                            <input name="email" type="email" required className="form-control floating"/>                                            
                                        </div>
                                        <div className="mb-3 form-focus">
                                            <label className="focus-label">Password</label>
                                            <input name="password" type="password" className="form-control floating"/>                                           
                                        </div>
                                        <div className="mb-3 form-focus">                                          
                                            <label className="focus-label">Mobile Number</label>
                                            <input  name="phonenumber" type="text" className="form-control floating" required/>
                                        </div>
                                    
                                        <div className="mb-3 form-focus">                                  
                                            <label className="focus-label">Birthday</label>
                                            <input style={{height:"70px"}} name="birthday" type="date" className="form-control floating"/>
                                        </div>                                                              
                                        <div className="mb-3 form-focus">
                                            <label className="focus-label">Address</label>
                                            <input name="address" type="text" className="form-control floating" required/>                                    
                                        </div>
                                        <button className="btn btn-primary w-100 btn-lg login-btn" type="submit">Signup</button>
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
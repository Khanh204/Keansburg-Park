function Login() {
    return (
        <div className="content top-space" 
        style={{ height: '100vh', display: 'flex', alignItems: 'center', transform: 'translateY(-180px)'  }}>
       <div className="container-fluid" style={{ textAlign: 'justify' }}>
           <div className="account-content">
               <div className="row align-items-center justify-content-center">
                   <div className="col-md-6 login-right" style={{ marginTop: '-10px'}}>
                       <form method="post">
                           <div className="mb-3 form-focus">
                           <label className="focus-label">Email</label>
                               <input type="email" className="form-control floating" />                         
                           </div>
                           <div style={{ marginTop: '25px' }} className="mb-3 form-focus">
                           <label className="focus-label">Password</label>
                               <input type="password" className="form-control floating" />                              
                           </div>
                           <div className="text-end">
                               <a className="forgot-link" href="forgot-password.html">Forgot Password ?</a>
                           </div>
                           <button className="btn btn-primary w-100 btn-lg login-btn" type="submit">Login</button>
                           <div className="login-or">
                               <span className="or-line"></span>                          
                           </div>
                           <div className="text-center dont-have">Don’t have an account? <a href="/register">Register</a></div>
                       </form>
                   </div>
               </div>
           </div>
       </div>
   </div>
    )
}
export default Login;

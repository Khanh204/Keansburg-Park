
import React, { useState, useEffect } from 'react';
function Header() {
  useEffect(() => {
    // Kiểm tra xem cookie có chứa token không
    const checkTokenInCookie = () => {
      const cookies = document.cookie; // Lấy tất cả cookie
      const token = cookies.split(';').find(cookie => cookie.trim().startsWith('token='));

      if (token) {
        // Nếu tồn tại token trong cookie, đổi nút đăng nhập thành nút logout
        document.getElementById('authButton').innerText = 'Log out';
      } else {
        // Nếu không có token trong cookie, hiển thị nút đăng nhập
        document.getElementById('authButton').innerText = 'Login';
      }
    };

    checkTokenInCookie();
  }, []);

  return (
    <div className="container-fluid nav-bar sticky-top px-4 py-2 py-lg-0">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a href="/" className="navbar-brand p-0">
          <h1 className="display-6 text-dark">
            <i className="fas fa-swimmer text-primary me-3"></i>Keansburg Park
          </h1>
          {/* <img src="assets/img/logo.png" alt="Logo" /> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto py-0">
            <a href="/" className="nav-item nav-link active">
              Home
            </a>
            <a href="/about" className="nav-item nav-link">
              About
            </a>
            <a href="/services" className="nav-item nav-link">
              Service
            </a>
            <a href="/blog" className="nav-item nav-link">
              Blog
            </a>

            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu m-0">
                <a href="/feature" className="dropdown-item">
                  Our Feature
                </a>
                <a href="/gallery" className="dropdown-item">
                  Our Gallery
                </a>
                <a href="/package" className="dropdown-item">
                  Ticket Packages
                </a>
                <a href="/team" className="dropdown-item">
                  Our Team
                </a>
              </div>
            </div>
            <a href="/contact" className="nav-item nav-link">
              Contact
            </a>
          </div>
          <div className="team-icon d-none d-xl-flex justify-content-center me-3">
            <a className="btn btn-square btn-light rounded-circle mx-1" href="https://www.facebook.com/nguyenkhanh454">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-square btn-light rounded-circle mx-1" href="#!">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-square btn-light rounded-circle mx-1" href="#!">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="btn btn-square btn-light rounded-circle mx-1" href="#!">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          {/* <a href="/login" className="btn btn-primary rounded-pill py-2 px-4 flex-shrink-0" >
            Login
          </a> */}
          <a className="btn btn-primary rounded-pill py-2 px-4 flex-shrink-0" id="authButton" href="/login">Login</a>
        </div>
      </nav >
    </div >
  );
}

export default Header;

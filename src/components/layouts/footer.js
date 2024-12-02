import React from "react";

function Footer() {
  return (
    <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s" >
      <div className="container py-5" style={{ textAlign: "justify" }}>
        <div className="row g-5">
          {/* Footer Section 1 */}
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="footer-item">
              <a href="index.html" className="p-0">
                <h4 className="text-white mb-4">
                  <i className="fas fa-swimmer text-primary me-3"></i>WaterLand
                </h4>
              </a>
              <p className="mb-2">
                Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem ipsum dolor sit amet, consectetur adipiscing...
              </p>
              <div className="d-flex align-items-center">
                <i className="fas fa-map-marker-alt text-primary me-3"></i>
                <p className="text-white mb-0">123 Street New York. USA</p>
              </div>
              <div className="d-flex align-items-center">
                <i className="fas fa-envelope text-primary me-3"></i>
                <p className="text-white mb-0">info@example.com</p>
              </div>
              <div className="d-flex align-items-center">
                <i className="fa fa-phone-alt text-primary me-3"></i>
                <p className="text-white mb-0">(+012) 3456 7890</p>
              </div>
            </div>
          </div>

          {/* Footer Section 2 */}
          <div className="col-md-6 col-lg-6 col-xl-2">
            <div className="footer-item">
              <h4 className="text-white mb-4">Quick Links</h4>
              <a href="/about">
                <i className="fas fa-angle-right me-2"></i> About Us
              </a>
              <a href="/feature">
                <i className="fas fa-angle-right me-2"></i> Feature
              </a>
              <a href="/attractions">
                <i className="fas fa-angle-right me-2"></i> Attractions
              </a>
              <a href="/package">
                <i className="fas fa-angle-right me-2"></i> Tickets
              </a>
              <a href="/blog">
                <i className="fas fa-angle-right me-2"></i> Blog
              </a>
              <a href="/contact">
                <i className="fas fa-angle-right me-2"></i> Contact us
              </a>
            </div>
          </div>

          {/* Footer Section 3 */}
          <div className="col-md-6 col-lg-6 col-xl-2">
            <div className="footer-item">
              <h4 className="text-white mb-4">Support</h4>
              <a href="#">
                <i className="fas fa-angle-right me-2"></i> Privacy Policy
              </a>
              <a href="#">
                <i className="fas fa-angle-right me-2"></i> Terms & Conditions
              </a>
              <a href="#">
                <i className="fas fa-angle-right me-2"></i> Disclaimer
              </a>
              <a href="#">
                <i className="fas fa-angle-right me-2"></i> Support
              </a>
              <a href="#">
                <i className="fas fa-angle-right me-2"></i> FAQ
              </a>
              <a href="#">
                <i className="fas fa-angle-right me-2"></i> Help
              </a>
            </div>
          </div>

          {/* Footer Section 4 */}
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="footer-item">
              <h4 className="text-white mb-4">Opening Hours</h4>
              <div className="opening-date mb-3 pb-3">
                <div className="opening-clock flex-shrink-0 d-flex justify-content-between">
                  <h6 className="text-white mb-0">Monday - Friday:</h6>
                  <p className="mb-0">
                    <i className="fas fa-clock text-primary me-2"></i> 11:00 AM - 16:00 PM
                  </p>
                </div>
                <div className="opening-clock flex-shrink-0 d-flex justify-content-between">
                  <h6 className="text-white mb-0">Saturday - Sunday:</h6>
                  <p className="mb-0">
                    <i className="fas fa-clock text-primary me-2"></i> 09:00 AM - 17:00 PM
                  </p>
                </div>
                <div className="opening-clock flex-shrink-0 d-flex justify-content-between">
                  <h6 className="text-white mb-0">Holiday:</h6>
                  <p className="mb-0">
                    <i className="fas fa-clock text-primary me-2"></i> 09:00 AM - 17:00 PM
                  </p>
                </div>
              </div>
              <div>
                <p className="text-white mb-2">Payment Accepted</p>
                <img src="img/payment.png" className="img-fluid" alt="Payment Methods" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

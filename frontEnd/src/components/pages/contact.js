import React, { useState } from "react";

function Contact() {
  // State lưu trữ dữ liệu form và lỗi
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    subject: "",
    message: "",
  });

  // Xử lý thay đổi dữ liệu trong form
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Hàm validate
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Kiểm tra trường "name"
    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Kiểm tra trường "email"
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    // Kiểm tra trường "phone"
    if (!formData.phone) {
      newErrors.phone = "Phone is required";
      isValid = false;
    }

    // Kiểm tra trường "project"
    if (!formData.project) {
      newErrors.project = "Project is required";
      isValid = false;
    }

    // Kiểm tra trường "subject"
    if (!formData.subject) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    // Kiểm tra trường "message"
    if (!formData.message) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Xử lý gửi form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Nếu form hợp lệ, gửi form (Giả lập gửi form ở đây)
      console.log("Form data:", formData);
      alert("Form submitted successfully");
    }
  };

  return (
    <div className="container-fluid contact py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-12 col-xl-6 wow fadeInUp" data-wow-delay="0.2s">
            <div>
              <div className="pb-5">
                <h4 className="text-primary">Get in Touch</h4>
                <p className="mb-0">
                  The contact form is currently inactive. Get a functional and
                  working contact form with Ajax & PHP in a few minutes. Just
                  copy and paste the files, add a little code and you're done.{" "}
                 
                </p>
              </div>
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="contact-add-item rounded bg-light p-4">
                    <div className="contact-icon text-primary mb-4">
                      <i className="fas fa-map-marker-alt fa-2x"></i>
                    </div>
                    <div>
                      <h4>Address</h4>
                      <p className="mb-0">8A Ton That Thuyet</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-add-item rounded bg-light p-4">
                    <div className="contact-icon text-primary mb-4">
                      <i className="fas fa-envelope fa-2x"></i>
                    </div>
                    <div>
                      <h4>Mail Us</h4>
                      <p className="mb-0">prosv5sao@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-add-item rounded bg-light p-4">
                    <div className="contact-icon text-primary mb-4">
                      <i className="fa fa-phone-alt fa-2x"></i>
                    </div>
                    <div>
                      <h4>Telephone</h4>
                      <p className="mb-0">0813237641</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-add-item rounded bg-light p-4">
                    <div className="contact-icon text-primary mb-4">
                      <i className="fab fa-firefox-browser fa-2x"></i>
                    </div>
                    <div>
                      <h4>Yoursite@ex.com</h4>
                      <p className="mb-0">0813237641</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex justify-content-around bg-light rounded p-4">
                    <a
                      className="btn btn-xl-square btn-primary rounded-circle"
                      href="https://www.facebook.com/nguyenkhanh454"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-xl-square btn-primary rounded-circle"
                      href="#"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-xl-square btn-primary rounded-circle"
                      href="https://www.instagram.com/khanh040504/"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      className="btn btn-xl-square btn-primary rounded-circle"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="bg-light p-5 rounded h-100">
              <h4 className="text-primary mb-4">Send Your Message</h4>
              <form onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="name">Your Name</label>
                      {errors.name && (
                        <div className="text-danger">{errors.name}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control border-0"
                        id="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="email">Your Email</label>
                      {errors.email && (
                        <div className="text-danger">{errors.email}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="phone">Your Phone</label>
                      {errors.phone && (
                        <div className="text-danger">{errors.phone}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="project"
                        placeholder="Project"
                        value={formData.project}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="project">Your Project</label>
                      {errors.project && (
                        <div className="text-danger">{errors.project}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="subject">Subject</label>
                      {errors.subject && (
                        <div className="text-danger">{errors.subject}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control border-0"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "160px" }}
                        value={formData.message}
                        onChange={handleInputChange}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                      {errors.message && (
                        <div className="text-danger">{errors.message}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="rounded">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.096484299949!2d105.77972177471445!3d21.028825087777456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cd376479b%3A0xbc2e0bb9db373ed2!2zOGEgVMO0biBUaOG6pXQgVGh1eeG6v3QsIE3hu7kgxJDDrG5oLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSAxMDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1733127139425!5m2!1svi!2s" width="600" height="450"
                         style={{width:'100%',height:'350px',border:'0', allowfullscreen:"" ,loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
                        </div>
                    </div>
    </div>
  );
}

export default Contact;

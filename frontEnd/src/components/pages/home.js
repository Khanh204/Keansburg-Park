import React from "react";
import { useState } from "react";

function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    // Hiển thị modal
    setShowModal(true);
    // Ẩn modal sau 3 giây
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };
  return (
    <section>
      <div className="header-carousel-item">
        <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="Image" />
        <div className="carousel-caption">
          <div
            className="container align-items-center py-4"
            style={{ textAlign: "justify" }}
          >
            <div className="row g-5 align-items-center">
              <div
                className="col-xl-7 fadeInLeft animated"
                data-animation="fadeInLeft"
                data-delay="1s"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-start">
                  <h4 className="text-primary text-uppercase fw-bold mb-4">
                    Welcome To WaterLand
                  </h4>
                  <h1 className="display-4 text-uppercase text-white mb-4">
                    Keansurg Park
                  </h1>
                  <p className="mb-4 fs-5">
                    Experience endless fun and excitement at Waterland, the
                    ultimate destination for thrill-seekers and families alike.
                    Dive into our sparkling pools, slide through exhilarating
                    water rides, and explore a world of entertainment designed
                    for everyone to enjoy.
                  </p>
                  <div className="d-flex flex-shrink-0">
                    <a
                      className="btn btn-primary rounded-pill text-white py-3 px-5"
                      href="#"
                    >
                      Our Packages
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-5 fadeInRight animated"
                data-animation="fadeInRight"
                data-delay="1s"
                style={{ animationDelay: "1s" }}
              >
                <div className="ticket-form p-5">
                  <h2 className="text-dark text-uppercase mb-4">
                    book your ticket
                  </h2>
                  <form>
                    <div className="row g-4">
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control border-0 py-2"
                          id="name"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="col-12 col-xl-6">
                        <input
                          type="email"
                          className="form-control border-0 py-2"
                          id="email"
                          placeholder="Your Email"
                        />
                      </div>
                      <div className="col-12 col-xl-6">
                        <input
                          type="phone"
                          className="form-control border-0 py-2"
                          id="phone"
                          placeholder="Phone"
                        />
                      </div>
                      <div className="col-12">
                        <select
                          className="form-select border-0 py-2"
                          aria-label="Default select example"
                        >
                          <option selected>Select Packages</option>
                          <option value="1">Family Packages</option>
                          <option value="2">Basic Packages</option>
                          <option value="3">Premium Packages</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <input
                          className="form-control border-0 py-2"
                          type="date"
                        />
                      </div>
                      <div className="col-12">
                        <input
                          type="number"
                          className="form-control border-0 py-2"
                          id="number"
                          placeholder="Guest"
                        />
                      </div>
                      <div className="col-12">
                        <button
                          type="button"
                          className="btn btn-primary w-100 py-2 px-5"
                          onClick={handleSubmit}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "40px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            textAlign: "center",
            borderRadius: "8px",
            width: "600px",
            maxWidth: "90%",
          }}
        >
          <h4 style={{ margin: 0 }}>
            <span style={{ color: "green", marginRight: "8px" }}>✔</span>
            Booking Successful!
          </h4>
        </div>
      )}

      {/* Overlay khi modal hiển thị */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
        ></div>
      )}
      <div class="container-fluid feature py-5">
        <div class="container py-5" style={{ textAlign: "justify" }}>
          <div
            class="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}
          >
            <h4 class="text-primary">Our Features</h4>
            <h1 class="display-5 mb-4">Explore Waterland Park Best Features</h1>
            <p class="mb-0">
              Discover the exciting attractions and amenities that make
              Waterland Park the perfect destination for fun and adventure. From
              exhilarating slides and scenic river rides to the best pools for
              relaxation, there’s something here for everyone to enjoy. Let’s
              dive into the highlights that set us apart!
            </p>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
              <div class="feature-item">
                <img
                  src="img/feature-1.jpg"
                  class="img-fluid rounded w-100"
                  alt="Image"
                />
                <div class="feature-content p-4">
                  <div class="feature-content-inner">
                    <h4 class="text-white">Best Pools</h4>
                    <p class="text-white">
                      Immerse yourself in the ultimate relaxation with our
                      pristine pools, perfect for families and leisure seekers.
                      Enjoy crystal-clear water and a serene atmosphere designed
                      to make every swim unforgettable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
              <div class="feature-item">
                <img
                  src="img/feature-2.jpg"
                  class="img-fluid rounded w-100"
                  alt="Image"
                />
                <div class="feature-content p-4">
                  <div class="feature-content-inner">
                    <h4 class="text-white">Waterslides</h4>
                    <p class="text-white">
                      Feel the rush of adrenaline as you glide down our
                      thrilling waterslides, designed for fun lovers of all
                      ages. From twisting turns to high-speed drops, there's a
                      slide for everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
              <div class="feature-item">
                <img
                  src="img/feature-3.jpg"
                  class="img-fluid rounded w-100"
                  alt="Image"
                />
                <div class="feature-content p-4">
                  <div class="feature-content-inner">
                    <h4 class="text-white">River Rides</h4>
                    <p class="text-white">
                      Take a relaxing journey on our scenic river rides. Drift
                      through gentle currents and enjoy breathtaking views,
                      ideal for unwinding with friends and family.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid about pb-5">
        <div class="container pb-5" style={{ textAlign: "justify" }}>
          <div class="row g-5">
            <div class="col-xl-6 wow fadeInUp" data-wow-delay="0.2s">
              <div>
                <h4 class="text-primary">About Waterland</h4>
                <h1 class="display-5 mb-4">Amusement Park For Your Family</h1>
                <p class="mb-5">
                  Waterland is the best and amusement park for families,
                  offering 20 years of exceptional service and countless happy
                  memories. Dive into a world of fun, relaxation, and excitement
                  tailored to all ages.
                </p>
                <div class="row g-4">
                  <div class="col-md-6">
                    <div class="d-flex">
                      <div class="me-3">
                        <i class="fas fa-glass-cheers fa-3x text-primary"></i>
                      </div>
                      <div>
                        <h4>Food & Drinks</h4>
                        <p>
                          Enjoy a variety of delicious food and refreshing
                          drinks available throughout the park to keep you
                          energized and refreshed.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="d-flex">
                      <div class="me-3">
                        <i class="fas fa-dot-circle fa-3x text-primary"></i>
                      </div>
                      <div>
                        <h4>Many Attractions</h4>
                        <p>
                          Explore an array of thrilling rides and attractions
                          that promise endless fun and excitement for everyone
                          in the family.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="d-flex">
                      <div class="me-3">
                        <i class="fas fa-hand-holding-usd fa-3x text-primary"></i>
                      </div>
                      <div>
                        <h4>Affordable Price</h4>
                        <p>
                          Experience premium entertainment at budget-friendly
                          prices, making Waterland accessible to all.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="d-flex">
                      <div class="me-3">
                        <i class="fas fa-lock fa-3x text-primary"></i>
                      </div>
                      <div>
                        <h4>Safety Lockers</h4>
                        <p>
                          Keep your belongings safe and secure with our
                          convenient locker facilities, so you can enjoy your
                          day worry-free.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 wow fadeInUp" data-wow-delay="0.4s">
              <div class="position-relative rounded">
                <div class="rounded" style={{ marginTop: "40px" }}>
                  <div class="row g-0">
                    <div class="col-lg-12">
                      <div class="rounded mb-4">
                        <img
                          src="img/about.jpg"
                          class="img-fluid rounded w-100"
                          alt=""
                        />
                      </div>
                      <div class="row gx-4 gy-0">
                        <div class="col-6">
                          <div class="counter-item bg-primary rounded text-center p-4 h-100">
                            <div class="counter-item-icon mx-auto mb-3">
                              <i class="fas fa-thumbs-up fa-3x text-white"></i>
                            </div>
                            <div class="counter-counting mb-3">
                              <span
                                class="text-white fs-2 fw-bold"
                                data-toggle="counter-up"
                              >
                                150
                              </span>
                              <span class="h1 fw-bold text-white">K +</span>
                            </div>
                            <h5 class="text-white mb-0">Happy Visitors</h5>
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="counter-item bg-dark rounded text-center p-4 h-100">
                            <div class="counter-item-icon mx-auto mb-3">
                              <i class="fas fa-certificate fa-3x text-white"></i>
                            </div>
                            <div class="counter-counting mb-3">
                              <span
                                class="text-white fs-2 fw-bold"
                                data-toggle="counter-up"
                              >
                                122
                              </span>
                              <span class="h1 fw-bold text-white"> +</span>
                            </div>
                            <h5 class="text-white mb-0">Awwards Winning</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="rounded bg-primary p-4 position-absolute d-flex justify-content-center"
                  style={{
                    width: "90%",
                    height: "80px",
                    top: "-40px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <h3 class="mb-0 text-white">20 Years Experiance</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid service py-5">
        <div
          class="container service-section py-5"
          style={{ textAlign: "justify" }}
        >
          <div
            class="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}
          >
            <h4 class="text-primary">Our Service</h4>
            <h1 class="display-5 text-white mb-4">
              Explore Waterland Park service
            </h1>
            <p class="mb-0 text-white">
              Discover a world of aquatic adventures at Waterland Park! Cool off
              in our sparkling pools, soar down exhilarating water slides, and
              relax in our private cabanas. With something for everyone, our
              park is the perfect destination for a fun-filled day.
            </p>
          </div>
          <div class="row g-4">
            <div class="col-0 col-md-1 col-lg-2 col-xl-2"></div>
            <div
              class="col-md-10 col-lg-8 col-xl-8 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div class="service-days p-4">
                <div class="py-2 border-bottom border-top d-flex align-items-center justify-content-between flex-wrap">
                  <h4 class="mb-0 pb-2 pb-sm-0">Monday - Friday</h4>{" "}
                  <p class="mb-0">
                    <i class="fas fa-clock text-primary me-2"></i>11:00 AM -
                    16:00 PM
                  </p>
                </div>
                <div class="py-2 border-bottom d-flex align-items-center justify-content-between flex-shrink-1 flex-wrap">
                  <h4 class="mb-0 pb-2 pb-sm-0">Saturday - Sunday</h4>{" "}
                  <p class="mb-0">
                    <i class="fas fa-clock text-primary me-2"></i>09:00 AM -
                    17:00 PM
                  </p>
                </div>
                <div class="py-2 border-bottom d-flex align-items-center justify-content-between flex-shrink-1 flex-wrap">
                  <h4 class="mb-0">Holiday</h4>{" "}
                  <p class="mb-0">
                    <i class="fas fa-clock text-primary me-2"></i>09:00 AM -
                    17:00 PM
                  </p>
                </div>
              </div>
            </div>
            <div class="col-0 col-md-1 col-lg-2 col-xl-2"></div>

            <div
              class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div class="service-item p-4">
                <div class="service-content">
                  <div class="mb-4">
                    <i class="fas fa-home fa-4x"></i>
                  </div>
                  <a href="#" class="h4 d-inline-block mb-3">
                    Private Gazebo
                  </a>
                  <p class="mb-0">
                    Rent a private gazebo for a secluded oasis amidst the
                    excitement. Perfect for families or groups seeking a
                    tranquil retreat.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div class="service-item p-4">
                <div class="service-content">
                  <div class="mb-4">
                    <i class="fas fa-utensils fa-4x"></i>
                  </div>
                  <a href="#" class="h4 d-inline-block mb-3">
                    Delicious Food
                  </a>
                  <p class="mb-0">
                    Enjoy a variety of tasty treats and refreshing beverages at
                    our on-site food court. From juicy burgers to cool ice
                    cream, we have something to satisfy every craving.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div class="service-item p-4">
                <div class="service-content">
                  <div class="mb-4">
                    <i class="fas fa-door-closed fa-4x"></i>
                  </div>
                  <a href="#" class="h4 d-inline-block mb-3">
                    Safety Lockers
                  </a>
                  <p class="mb-0">
                    Secure your belongings in our convenient safety lockers and
                    enjoy peace of mind while you play.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div class="service-item p-4">
                <div class="service-content">
                  <div class="mb-4">
                    <i class="fas fa-swimming-pool fa-4x"></i>
                  </div>
                  <a href="#" class="h4 d-inline-block mb-3">
                    River Rides
                  </a>
                  <p class="mb-0">
                    Float along our lazy river and soak up the sun. It's the
                    perfect way to relax and unwind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid py-5">
        <div class="container py-5" style={{ textAlign: "justify" }}>
          <div class="row g-5 align-items-center">
            <div class="col-lg-12 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
              <div class="packages-item h-100">
                <h4 class="text-primary">Ticket Packages</h4>
                <h1 class="display-5 mb-4">
                  Choose The Best Packages For Your Family
                </h1>
                <p class="mb-4">
                  Our family packages are designed to provide fun for everyone,
                  from the youngest to the oldest. With a variety of exciting
                  attractions and relaxing amenities, you're sure to create
                  lasting memories.
                </p>
                <p>
                  <i class="fa fa-check text-primary me-2"></i>Best Waterpark in
                  the world
                </p>
                <p>
                  <i class="fa fa-check text-primary me-2"></i>Best Packages For
                  Your Family
                </p>
                <p>
                  <i class="fa fa-check text-primary me-2"></i>Enjoy Various
                  Kinds of Water Park
                </p>
                <p class="mb-5">
                  <i class="fa fa-check text-primary me-2"></i>Win Up To 3 Free
                  All Day Tickets
                </p>
                <a href="#" class="btn btn-primary rounded-pill py-3 px-5">
                  {" "}
                  Book Now
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.4s">
              <div class="pricing-item bg-dark rounded text-center p-5 h-100">
                <div class="pb-4 border-bottom">
                  <h2 class="mb-4 text-primary">Family Packages</h2>
                  <p class="mb-4">
                    The Family Packages is perfect for a family outing. With
                    this package, your family will experience the full range of
                    activities at the water park, from thrilling rides to
                    relaxing areas. Includes admission for the entire family,
                    rental of two private cabanas, free drinks, and many other
                    attractive offers.
                  </p>
                  <h2 class="mb-0 text-primary">
                    $260,90<span class="text-body fs-5 fw-normal">/family</span>
                  </h2>
                </div>
                <div class="py-4">
                  <p class="mb-4">
                    <i class="fa fa-check text-primary me-2"></i>All Access To
                    Waterpark
                  </p>
                  <p class="mb-4">
                    <i class="fa fa-check text-primary me-2"></i>Get Two Gazebo
                  </p>
                  <p class="mb-4">
                    <i class="fa fa-check text-primary me-2"></i>Free Soft
                    Drinks
                  </p>
                  <p class="mb-4">
                    <i class="fa fa-check text-primary me-2"></i>Get Four
                    Lockers
                  </p>
                  <p class="mb-4">
                    <i class="fa fa-check text-primary me-2"></i>Free Four
                    Towels
                  </p>
                </div>
                <a href="#" class="btn btn-light rounded-pill py-3 px-5">
                  {" "}
                  Book Now
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.6s">
              <div class="pricing-item bg-primary rounded text-center p-5 h-100">
                <div class="pb-4 border-bottom">
                  <h2 class="text-dark mb-4">Basic Packages</h2>
                  <p class="text-white mb-4">
                    The Basic Package is an economical choice for those who want
                    to enjoy a day of fun at the water park.The package includes
                    admission, rental of a small cabana, free drinks,and many
                    other benefits.
                  </p>
                  <h2 class="text-dark mb-0">
                    $60,90<span class="text-white fs-5 fw-normal">/person</span>
                  </h2>
                </div>
                <div class="text-white py-4">
                  <p class="mb-4">
                    <i class="fa fa-check text-dark me-2"></i>Get Small Gazebo
                  </p>
                  <p class="mb-4">
                    <i class="fa fa-check text-dark me-2"></i>Free Soft Drink
                  </p>
                  <p class="mb-4">
                    <i class="fa fa-check text-dark me-2"></i>Get One Locker
                  </p>
                  <p class="mb-4">
                    <i class="fa fa-check text-dark me-2"></i>Free Towel
                  </p>
                </div>
                <a href="#" class="btn btn-dark rounded-pill py-3 px-5">
                  {" "}
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid gallery pb-5">
        <div class="container pb-5" style={{ textAlign: "justify" }}>
          <div
            class="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}
          >
            <h4 class="text-primary">Our Gallery</h4>
            <h1 class="display-5 mb-4">Captured Moments In Waterland</h1>
            <p class="mb-0">
              Capture unforgettable memories. Our gallery showcases the fun and
              excitement of Waterland Park. From thrilling water slides to
              relaxing poolside moments, relive the magic of your visit.
            </p>
          </div>
          <div class="row g-4">
            <div class="col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div class="gallery-item">
                <img
                  src="img/gallery-1.jpg"
                  class="img-fluid rounded w-100 h-100"
                  alt=""
                />
                <div class="search-icon">
                  <a
                    href="img/gallery-1.jpg"
                    class="btn btn-light btn-lg-square rounded-circle"
                    data-lightbox="Gallery-1"
                  >
                    <i class="fas fa-search-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3 wow fadeInUp" data-wow-delay="0.4s">
              <div class="gallery-item">
                <img
                  src="img/gallery-2.jpg"
                  class="img-fluid rounded w-100 h-100"
                  alt=""
                />
                <div class="search-icon">
                  <a
                    href="img/gallery-2.jpg"
                    class="btn btn-light btn-lg-square rounded-circle"
                    data-lightbox="Gallery-2"
                  >
                    <i class="fas fa-search-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3 wow fadeInUp" data-wow-delay="0.6s">
              <div class="gallery-item">
                <img
                  src="img/gallery-3.jpg"
                  class="img-fluid rounded w-100 h-100"
                  alt=""
                />
                <div class="search-icon">
                  <a
                    href="img/gallery-3.jpg"
                    class="btn btn-light btn-lg-square rounded-circle"
                    data-lightbox="Gallery-3"
                  >
                    <i class="fas fa-search-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3 wow fadeInUp" data-wow-delay="0.2s">
              <div class="gallery-item">
                <img
                  src="img/gallery-4.jpg"
                  class="img-fluid rounded w-100 h-100"
                  alt=""
                />
                <div class="search-icon">
                  <a
                    href="img/gallery-4.jpg"
                    class="btn btn-light btn-lg-square rounded-circle"
                    data-lightbox="Gallery-4"
                  >
                    <i class="fas fa-search-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3 wow fadeInUp" data-wow-delay="0.4s">
              <div class="gallery-item">
                <img
                  src="img/gallery-5.jpg"
                  class="img-fluid rounded w-100 h-100"
                  alt=""
                />
                <div class="search-icon">
                  <a
                    href="img/gallery-5.jpg"
                    class="btn btn-light btn-lg-square rounded-circle"
                    data-lightbox="Gallery-5"
                  >
                    <i class="fas fa-search-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
              <div class="gallery-item">
                <img
                  src="img/gallery-6.jpg"
                  class="img-fluid rounded w-100 h-100"
                  alt=""
                />
                <div class="search-icon">
                  <a
                    href="img/gallery-6.jpg"
                    class="btn btn-light btn-lg-square rounded-circle"
                    data-lightbox="Gallery-6"
                  >
                    <i class="fas fa-search-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid blog pb-5">
        <div class="container pb-5" style={{ textAlign: "justify" }}>
          <div
            class="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}
          >
            <h4 class="text-primary">Our Blog</h4>
            <h1 class="display-5 mb-4">Latest Blog & Articles</h1>
            <p class="mb-0">
              Discover helpful tips and exciting news about Waterland Park. From
              fun activities and special events to insider tips for a perfect
              day out, our blog has it all.
            </p>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
              <div class="blog-item">
                <div class="blog-img">
                  <a href="/detailBlog">
                    <img
                      src="img/blog-2.jpg"
                      class="img-fluid w-100 rounded-top"
                      alt="Image"
                    />
                  </a>
                  <div class="blog-category py-2 px-4">Vacation</div>
                  <div class="blog-date">
                    <i class="fas fa-clock me-2"></i>August 19, 2024
                  </div>
                </div>
                <div class="blog-content p-4">
                  <a href="/detailBlog" class="h4 d-inline-block mb-4">
                    Why Children Dont Like Getting Out Of The Water
                  </a>
                  <p class="mb-4">
                    Discover why children are so reluctant to leave the water
                    and how you can make transitioning easier for them. Learn
                    about their love for swimming and playing in water and some
                    tips to handle this situation.
                  </p>
                  <a
                    href="/detailBlog"
                    class="btn btn-primary rounded-pill py-2 px-4"
                  >
                    Read More <i class="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
              <div class="blog-item">
                <div class="blog-img">
                  <a href="/detailBlog">
                    <img
                      src="img/blog-3.jpg"
                      class="img-fluid w-100 rounded-top"
                      alt="Image"
                    />
                  </a>
                  <div class="blog-category py-2 px-4">Insight</div>
                  <div class="blog-date">
                    <i class="fas fa-clock me-2"></i>August 19, 2024
                  </div>
                </div>
                <div class="blog-content p-4">
                  <a href="/detailBlog" class="h4 d-inline-block mb-4">
                    5 Ways To Enjoy Waterland This Spring Break
                  </a>
                  <p class="mb-4">
                    Explore the best ways to enjoy Waterland this spring break!
                    From thrilling water rides to relaxing poolside cabanas,
                    find out how to make the most of your visit.
                  </p>
                  <a
                    href="/detailBlog"
                    class="btn btn-primary rounded-pill py-2 px-4"
                  >
                    Read More <i class="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
              <div class="blog-item">
                <div class="blog-img">
                  <a href="/detailBlog">
                    <img
                      src="img/blog-1.jpg"
                      class="img-fluid w-100 rounded-top"
                      alt="Image"
                    />
                  </a>
                  <div class="blog-category py-2 px-4">Insight</div>
                  <div class="blog-date">
                    <i class="fas fa-clock me-2"></i>August 19, 2024
                  </div>
                </div>
                <div class="blog-content p-4">
                  <a href="/detailBlog" class="h4 d-inline-block mb-4">
                    3 Tips for Your Family Spring Break at Amusement Park
                  </a>
                  <p class="mb-4">
                    Planning a family spring break at an amusement park? Here
                    are three essential tips to ensure everyone has a fun and
                    memorable experience. From ride planning to meal breaks, get
                    ready for a fantastic trip.
                  </p>
                  <a
                    href="/detailBlog"
                    class="btn btn-primary rounded-pill py-2 px-4"
                  >
                    Read More <i class="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid team pb-5">
        <div class="container pb-5" style={{ textAlign: "justify" }}>
          <div
            class="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}
          >
            <h4 class="text-primary">Meet Our Team</h4>
            <h1 class="display-5 mb-4">
              Our Waterland Park Dedicated Team Member
            </h1>
            <p class="mb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.
            </p>
          </div>
          <div class="row g-4 justify-content-center">
            <div
              class="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div class="team-item p-4">
                <div class="team-content">
                  <div class="d-flex justify-content-between border-bottom pb-4">
                    <div class="text-start">
                      <h4 class="mb-0">David James</h4>
                      <p class="mb-0">Profession</p>
                    </div>
                    <div>
                      <img
                        src="img/team-1.jpg"
                        class="img-fluid rounded"
                        style={{ width: "100px", height: "100px" }}
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="team-icon rounded-pill my-4 p-3">
                    <a
                      class="btn btn-primary btn-sm-square rounded-circle me-3"
                      href=""
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                      class="btn btn-primary btn-sm-square rounded-circle me-3"
                      href=""
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      class="btn btn-primary btn-sm-square rounded-circle me-3"
                      href=""
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      class="btn btn-primary btn-sm-square rounded-circle me-0"
                      href=""
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                  <p class="text-center mb-0">
                    David James is our lead lifeguard and water safety expert.
                    With over 10 years of experience, David ensures the safety
                    and well-being of all our visitors. When he's not on duty,
                    he loves teaching swimming lessons and organizing community
                    water safety workshops.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div class="team-item p-4">
                <div class="team-content">
                  <div class="d-flex justify-content-between border-bottom pb-4">
                    <div class="text-start">
                      <h4 class="mb-0">William John</h4>
                      <p class="mb-0">Profession</p>
                    </div>
                    <div>
                      <img
                        src="img/team-2.jpg"
                        class="img-fluid rounded"
                        style={{ width: "100px", height: "100px" }}
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="team-icon rounded-pill my-4 p-3">
                    <a
                      class="btn btn-primary btn-sm-square rounded-circle me-3"
                      href=""
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                      class="btn btn-primary btn-sm-square rounded-circle me-3"
                      href=""
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      class="btn btn-primary btn-sm-square rounded-circle me-3"
                      href=""
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      class="btn btn-primary btn-sm-square rounded-circle me-0"
                      href=""
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                  <p class="text-center mb-0">
                    William John is our operations manager, responsible for the
                    smooth running of the park's daily activities. His passion
                    for customer service and efficiency keeps our guests happy
                    and our facilities in top shape. Outside work, William
                    enjoys .
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div class="team-item p-4">
                <div class="team-content">
                  <div class="d-flex justify-content-between border-bottom pb-4">
                    <div class="text-start">
                      <h4 class="mb-0">Michael John</h4>
                      <p class="mb-0">Profession</p>
                    </div>
                    <div>
                      <img
                        src="img/team-3.jpg"
                        class="img-fluid rounded"
                        style={{ width: "100px", height: "100px" }}
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="team-icon rounded-pill my-4 p-3">
                    <a
                      class="btn btn-primary btn-sm-square rounded-circle me-3"
                      href=""
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                      class="btn btn-primary btn-sm-square rounded-circle me-3"
                      href=""
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      class="btn btn-primary btn-sm-square rounded-circle me-3"
                      href=""
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      class="btn btn-primary btn-sm-square rounded-circle me-0"
                      href=""
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                  <p class="text-center mb-0">
                    Michael John is our head of maintenance, making sure all
                    attractions and facilities are in pristine condition. His
                    expertise in engineering and love for waterparks make him an
                    invaluable part of our team. Michael is also an avid scuba
                    diver and enjoys spending time underwater.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid testimonial py-5">
        <div class="container py-5" style={{ textAlign: "justify" }}>
          <div
            class="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}
          >
            <h4 class="text-primary">Testimonials</h4>
            <h1 class="display-5 text-white mb-4">Our Clients Riviews</h1>
            <p class="text-white mb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.
            </p>
          </div>
          <div
            class="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div class="testimonial-item p-4">
              <p class="text-white fs-4 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                mollitia fugiat, nihil autem reprehenderit aperiam maxime minima
                consequatur, nam iste eius velit perferendis voluptatem at atque
                neque soluta reiciendis doloremque.
              </p>
              <div class="testimonial-inner">
                <div class="testimonial-img">
                  <img
                    src="img/testimonial-1.jpg"
                    class="img-fluid"
                    alt="Image"
                  />
                  <div class="testimonial-quote btn-lg-square rounded-circle">
                    <i class="fa fa-quote-right fa-2x"></i>
                  </div>
                </div>
                <div class="ms-4">
                  <h4>Person Name</h4>
                  <p class="text-start text-white">Profession</p>
                  <div class="d-flex text-primary">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star text-white"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="testimonial-item p-4">
              <p class="text-white fs-4 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                mollitia fugiat, nihil autem reprehenderit aperiam maxime minima
                consequatur, nam iste eius velit perferendis voluptatem at atque
                neque soluta reiciendis doloremque.
              </p>
              <div class="testimonial-inner">
                <div class="testimonial-img">
                  <img
                    src="img/testimonial-2.jpg"
                    class="img-fluid"
                    alt="Image"
                  />
                  <div class="testimonial-quote btn-lg-square rounded-circle">
                    <i class="fa fa-quote-right fa-2x"></i>
                  </div>
                </div>
                <div class="ms-4">
                  <h4>Person Name</h4>
                  <p class="text-start text-white">Profession</p>
                  <div class="d-flex text-primary">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star text-white"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="testimonial-item p-4">
              <p class="text-white fs-4 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                mollitia fugiat, nihil autem reprehenderit aperiam maxime minima
                consequatur, nam iste eius velit perferendis voluptatem at atque
                neque soluta reiciendis doloremque.
              </p>
              <div class="testimonial-inner">
                <div class="testimonial-img">
                  <img
                    src="img/testimonial-3.jpg"
                    class="img-fluid"
                    alt="Image"
                  />
                  <div class="testimonial-quote btn-lg-square rounded-circle">
                    <i class="fa fa-quote-right fa-2x"></i>
                  </div>
                </div>
                <div class="ms-4">
                  <h4>Person Name</h4>
                  <p class="text-start text-white">Profession</p>
                  <div class="d-flex text-primary">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;

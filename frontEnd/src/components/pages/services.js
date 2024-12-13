import React from 'react';

function Service() {
    return (
        <div className="container-fluid service py-5" style={{ marginTop: '100px' }}>
            <div className="container service-section py-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
                    <h4 className="text-primary">Our Service</h4>
                    <h1 className="display-5 text-white mb-4">Explore Waterland Park service</h1>
                    <p className="mb-0 text-white">
                    Discover a world of aquatic adventures at Waterland Park! Cool off in our sparkling pools, soar down exhilarating water slides, and relax in our private cabanas. With something for everyone, our park is the perfect destination for a fun-filled day.
                    </p>
                </div>
                <div className="row g-4">
                    <div className="col-0 col-md-1 col-lg-2 col-xl-2"></div>
                    <div className="col-md-10 col-lg-8 col-xl-8 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-days p-4">
                            <div className="py-2 border-bottom border-top d-flex align-items-center justify-content-between flex-wrap">
                                <h4 className="mb-0 pb-2 pb-sm-0">Monday - Friday</h4>
                                <p className="mb-0"><i className="fas fa-clock text-primary me-2"></i>11:00 AM - 16:00 PM</p>
                            </div>
                            <div className="py-2 border-bottom d-flex align-items-center justify-content-between flex-shrink-1 flex-wrap">
                                <h4 className="mb-0 pb-2 pb-sm-0">Saturday - Sunday</h4>
                                <p className="mb-0"><i className="fas fa-clock text-primary me-2"></i>09:00 AM - 17:00 PM</p>
                            </div>
                            <div className="py-2 border-bottom d-flex align-items-center justify-content-between flex-shrink-1 flex-wrap">
                                <h4 className="mb-0">Holiday</h4>
                                <p className="mb-0"><i className="fas fa-clock text-primary me-2"></i>09:00 AM - 17:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-0 col-md-1 col-lg-2 col-xl-2"></div>

                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-item p-4">
                            <div className="service-content">
                                <div className="mb-4">
                                    <i className="fas fa-home fa-4x"></i>
                                </div>
                                <a href="#" className="h4 d-inline-block mb-3">Private Gazebo</a>
                                <p className="mb-0">Rent a private gazebo for a secluded oasis amidst the excitement. Perfect for families or groups seeking a tranquil retreat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="service-item p-4">
                            <div className="service-content">
                                <div className="mb-4">
                                    <i className="fas fa-utensils fa-4x"></i>
                                </div>
                                <a href="#" className="h4 d-inline-block mb-3">Delicious Food</a>
                                <p className="mb-0">Enjoy a variety of tasty treats and refreshing beverages at our on-site food court. From juicy burgers to cool ice cream, we have something to satisfy every craving.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item p-4">
                            <div className="service-content">
                                <div className="mb-4">
                                    <i className="fas fa-door-closed fa-4x"></i>
                                </div>
                                <a href="#" className="h4 d-inline-block mb-3">Safety Lockers</a>
                                <p className="mb-0">Secure your belongings in our convenient safety lockers and enjoy peace of mind while you play.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                        <div className="service-item p-4">
                            <div className="service-content">
                                <div className="mb-4">
                                    <i className="fas fa-swimming-pool fa-4x"></i>
                                </div>
                                <a href="#" className="h4 d-inline-block mb-3">River Rides</a>
                                <p className="mb-0">Float along our lazy river and soak up the sun. It's the perfect way to relax and unwind.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid feature py-5">
                <div className="container py-5" style={{textAlign:'justify'}}>
                    <div className="row g-4">
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="feature-item">
                                <img src="img/feature-1.jpg" className="img-fluid rounded w-100" alt="Image" />
                                <div className="feature-content p-4">
                                    <div className="feature-content-inner">
                                        <h4 className="text-white">Best Pools</h4>
                                        <p className="text-white">Immerse yourself in the ultimate relaxation with our pristine pools, perfect for families and leisure seekers. Enjoy crystal-clear water and a serene atmosphere designed to make every swim unforgettable.</p>
                                        <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Read More <i className="fa fa-arrow-right ms-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="feature-item">
                                <img src="img/feature-2.jpg" className="img-fluid rounded w-100" alt="Image" />
                                <div className="feature-content p-4">
                                    <div className="feature-content-inner">
                                        <h4 className="text-white">Waterslides</h4>
                                        <p className="text-white">Feel the rush of adrenaline as you glide down our thrilling waterslides, designed for fun lovers of all ages. From twisting turns to high-speed drops, there's a slide for everyone.</p>
                                        <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Read More <i className="fa fa-arrow-right ms-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="feature-item">
                                <img src="img/feature-3.jpg" className="img-fluid rounded w-100" alt="Image" />
                                <div className="feature-content p-4">
                                    <div className="feature-content-inner">
                                        <h4 className="text-white">River Rides</h4>
                                        <p className="text-white">Take a relaxing journey on our scenic river rides. Drift through gentle currents and enjoy breathtaking views, ideal for unwinding with friends and family.</p>
                                        <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Read More <i className="fa fa-arrow-right ms-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    );
}

export default Service;

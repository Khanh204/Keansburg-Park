function About (){
    return(
        <div className="container-fluid about pb-5">
            <div className="container pb-5">
                <div className="row g-5">
                    <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div>
                            <h4 className="text-primary">About Waterland</h4>
                            <h1 className="display-5 mb-4">The Best Theme & Amusement Park For Your Family</h1>
                            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis eligendi illum inventore maiores incidunt vero id. Est ipsam, distinctio veritatis earum inventore ab fugit officiis ut ullam, laudantium facere sapiente?
                            </p>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="d-flex">
                                        <div className="me-3"><i className="fas fa-glass-cheers fa-3x text-primary"></i></div>
                                        <div>
                                            <h4>Food & Drinks</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex">
                                        <div className="me-3"><i className="fas fa-dot-circle fa-3x text-primary"></i></div>
                                        <div>
                                            <h4>Many Attractions</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex">
                                        <div className="me-3"><i className="fas fa-hand-holding-usd fa-3x text-primary"></i></div>
                                        <div>
                                            <h4>Affordable Price</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex">
                                        <div className="me-3"><i className="fas fa-lock fa-3x text-primary"></i></div>
                                        <div>
                                            <h4>Safety Lockers</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="position-relative rounded">
                            <div className="rounded" style={{marginTop: '40px'}}>
                                <div className="row g-0">
                                    <div className="col-lg-12">
                                        <div className="rounded mb-4">
                                            <img src="img/about.jpg" className="img-fluid rounded w-100" alt=""/>
                                        </div>
                                        <div className="row gx-4 gy-0">
                                            <div className="col-6">
                                                <div className="counter-item bg-primary rounded text-center p-4 h-100">
                                                    <div className="counter-item-icon mx-auto mb-3">
                                                        <i className="fas fa-thumbs-up fa-3x text-white"></i>
                                                    </div>
                                                    <div className="counter-counting mb-3">
                                                        <span className="text-white fs-2 fw-bold" data-toggle="counter-up">150</span>
                                                        <span className="h1 fw-bold text-white">K +</span>
                                                    </div>
                                                    <h5 className="text-white mb-0">Happy Visitors</h5>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="counter-item bg-dark rounded text-center p-4 h-100">
                                                    <div className="counter-item-icon mx-auto mb-3">
                                                        <i className="fas fa-certificate fa-3x text-white"></i>
                                                    </div>
                                                    <div className="counter-counting mb-3">
                                                        <span className="text-white fs-2 fw-bold" data-toggle="counter-up">122</span>
                                                        <span className="h1 fw-bold text-white"> +</span>
                                                    </div>
                                                    <h5 className="text-white mb-0">Awwards Winning</h5>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded bg-primary p-4 position-absolute d-flex justify-content-center" style={{width: '90%',height: '80px',top: '-40px',left: '50%',transform: 'translateX(-50%)'}}>
                                <h3 className="mb-0 text-white">20 Years Experiance</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;
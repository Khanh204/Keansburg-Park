import React from "react"
function Feature(){
    return(
        <div class="container-fluid feature py-5">
        <div class="container py-5" style={{textAlign:'justify'}}>
            <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth:'800px'}}>
                <h4 class="text-primary">Our Features</h4>
                <h1 class="display-5 mb-4">Explore Waterland Park Best Features</h1>
                <p class="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                </p>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="feature-item">
                        <img src="img/feature-1.jpg" class="img-fluid rounded w-100" alt="Image"/>
                        <div class="feature-content p-4">
                            <div class="feature-content-inner">
                                <h4 class="text-white">Best Pools</h4>
                                <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis porro soluta voluptatum laborum mollitia blanditiis suscipit,
                                </p>
                                <a href="#" class="btn btn-primary rounded-pill py-2 px-4">Read More <i class="fa fa-arrow-right ms-1"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                    <div class="feature-item">
                        <img src="img/feature-2.jpg" class="img-fluid rounded w-100" alt="Image"/>
                        <div class="feature-content p-4">
                            <div class="feature-content-inner">
                                <h4 class="text-white">Waterslides</h4>
                                <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis porro soluta voluptatum laborum mollitia blanditiis suscipit,
                                </p>
                                <a href="#" class="btn btn-primary rounded-pill py-2 px-4">Read More <i class="fa fa-arrow-right ms-1"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                    <div class="feature-item">
                        <img src="img/feature-3.jpg" class="img-fluid rounded w-100" alt="Image"/>
                        <div class="feature-content p-4">
                            <div class="feature-content-inner">
                                <h4 class="text-white">River Rides</h4>
                                <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis porro soluta voluptatum laborum mollitia blanditiis suscipit,
                                </p>
                                <a href="#" class="btn btn-primary rounded-pill py-2 px-4">Read More <i class="fa fa-arrow-right ms-1"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Feature
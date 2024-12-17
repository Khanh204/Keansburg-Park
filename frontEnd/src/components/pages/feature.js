import React from "react"
function Feature(){
    return(
        <div class="container-fluid feature py-5">
        <div class="container py-5" style={{textAlign:'justify'}}>
            <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth:'800px'}}>
                <h4 class="text-primary">Our Features</h4>
                <h1 class="display-5 mb-4">Explore Waterland Park Best Features</h1>
                <p class="mb-0">Discover the exciting attractions and amenities that make Waterland Park the perfect destination for fun and adventure. From exhilarating slides and scenic river rides to the best pools for relaxation, there’s something here for everyone to enjoy. Let’s dive into the highlights that set us apart!
                </p>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="feature-item">
                        <img src="img/feature-1.jpg" class="img-fluid rounded w-100" alt="Image"/>
                        <div class="feature-content p-4">
                            <div class="feature-content-inner">
                                <h4 class="text-white">Best Pools</h4>
                                <p class="text-white">Immerse yourself in the ultimate relaxation with our pristine pools, perfect for families and leisure seekers. Enjoy crystal-clear water and a serene atmosphere designed to make every swim unforgettable.
                                </p>
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
                                <p class="text-white">Feel the rush of adrenaline as you glide down our thrilling waterslides, designed for fun lovers of all ages. From twisting turns to high-speed drops, there's a slide for everyone.
                                </p>
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
                                <p class="text-white">Take a relaxing journey on our scenic river rides. Drift through gentle currents and enjoy breathtaking views, ideal for unwinding with friends and family.
                                </p>
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
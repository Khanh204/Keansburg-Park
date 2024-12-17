import React from "react";
function Blog(){
    return(
        <div class="container-fluid blog pb-5">
            <div class="container pb-5" style={{ textAlign: "justify" }}>
                <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth:'800px'}}>
                    <h4 class="text-primary">Our Blog</h4>
                    <h1 class="display-5 mb-4">Latest Blog & Articles</h1>
                    <p class="mb-0">Discover helpful tips and exciting news about Waterland Park. From fun activities and special events to insider tips for a perfect day out, our blog has it all.
                    </p>
                </div>
                <div class="row g-4">
                    <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="blog-item">
                            <div class="blog-img">
                                <a href="/detailBlog">
                                    <img src="img/blog-2.jpg" class="img-fluid w-100 rounded-top" alt="Image"/>
                                </a>
                                <div class="blog-category py-2 px-4">Vacation</div>
                                <div class="blog-date"><i class="fas fa-clock me-2"></i>August 19, 2025</div>
                            </div>
                            <div class="blog-content p-4">
                                <a href="/detailBlog" class="h4 d-inline-block mb-4">Why Children Dont Like Getting Out Of The Water</a>
                                <p class="mb-4">Discover why children are so reluctant to leave the water and how you can make transitioning easier for them. Learn about their love for swimming and playing in water and some tips to handle this situation.
                                </p>
                                <a href="/detailBlog" class="btn btn-primary rounded-pill py-2 px-4">Read More <i class="fas fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                        <div class="blog-item">
                            <div class="blog-img">
                                <a href="/detailBlog">
                                    <img src="img/blog-3.jpg" class="img-fluid w-100 rounded-top" alt="Image"/>
                                </a>
                                <div class="blog-category py-2 px-4">Insight</div>
                                <div class="blog-date"><i class="fas fa-clock me-2"></i>August 19, 2025</div>
                            </div>
                            <div class="blog-content p-4">
                                <a href="/detailBlog" class="h4 d-inline-block mb-4">5 Ways To Enjoy Waterland This Spring Break</a>
                                <p class="mb-4">Explore the best ways to enjoy Waterland this spring break! From thrilling water rides to relaxing poolside cabanas, find out how to make the most of your visit.
                                </p>
                                <a href="/detailBlog" class="btn btn-primary rounded-pill py-2 px-4">Read More <i class="fas fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="blog-item">
                            <div class="blog-img">
                                <a href="/detailBlog">
                                    <img src="img/blog-1.jpg" class="img-fluid w-100 rounded-top" alt="Image"/>
                                </a>
                                <div class="blog-category py-2 px-4">Insight</div>
                                <div class="blog-date"><i class="fas fa-clock me-2"></i>August 19, 2025</div>
                            </div>
                            <div class="blog-content p-4">
                                <a href="/detailBlog" class="h4 d-inline-block mb-4">3 Tips for Your Family Spring Break at Amusement Park</a>
                                <p class="mb-4">Planning a family spring break at an amusement park? Here are three essential tips to ensure everyone has a fun and memorable experience. From ride planning to meal breaks, get ready for a fantastic trip.
                                </p>
                                <a href="/detailBlog" class="btn btn-primary rounded-pill py-2 px-4">Read More <i class="fas fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Blog;
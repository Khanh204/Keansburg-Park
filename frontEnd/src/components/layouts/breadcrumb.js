import React from 'react';
import { useLocation } from 'react-router-dom';

function Breadcrumb() {
    const location = useLocation();
    const isHomePage = location.pathname === '/' || location.pathname === '/404'; 

    let breadcrumbName = 'Home'; // Giá trị mặc định hợp lý hơn

    // Xử lý tên breadcrumb dựa trên đường dẫn hiện tại
    switch (location.pathname) {
        case '/about':
            breadcrumbName = 'About';
            break;
        case '/contact':
            breadcrumbName = 'Contact';
            break;
        case '/services':
            breadcrumbName = 'Services';
            break;
        case '/blog':
                breadcrumbName = 'Blog';
                break;
        case '/feature':
                    breadcrumbName = 'Feature';
                break;
        case '/gallery':
                    breadcrumbName = 'Gallery';
                break;
        case '/attractions':
                    breadcrumbName = 'Attractions';
                break;
        case '/package':
                    breadcrumbName = 'Ticket Packages';
                break;
        case '/team':
                    breadcrumbName = 'Team';
                break;


        // Thêm các case khác nếu cần
        default:
            breadcrumbName = 'Page'; // Fallback
            break;
           
    }

    return (
        <section className={`${isHomePage ? 'hide' : 'show'}`}>
            {!isHomePage && (
                 <div class="container-fluid bg-breadcrumb">
                 <div class="container text-center py-5" style={{maxWidth:'900px'}}>
                     <h4 class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">{breadcrumbName}</h4>
                     <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                         <li class="breadcrumb-item"><a href="/">Home</a></li>
                         <li class="breadcrumb-item active text-primary">{breadcrumbName}</li>
                     </ol>    
                 </div>
             </div>
            )}
        </section>
    );
}

export default Breadcrumb;
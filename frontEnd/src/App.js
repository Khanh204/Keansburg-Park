import { BrowserRouter as Router, useLocation, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import Home from './components/pages/home';
import Breadcrumb from './components/layouts/breadcrumb';
import About from './components/pages/about';
import Service from './components/pages/services';
import Blog from './components/pages/blog';
import Contact from './components/pages/contact';
import Feature from './components/pages/feature';
import Gallery from './components/pages/gallery';
import Attractions from './components/pages/attractions';
import TicketPackages from './components/pages/ticketpackages';
import Team from './components/pages/team';
import Login from './components/pages/auth/login';
import DetailBlog from './components/pages/detailblog';

// import Logout from './components/pages/auth/logout';
import Register from './components/pages/auth/register';

function App() {
  const location = useLocation();
  return (

    <div className="App">
      <div id="loader"></div>
      <div className="main-wrapper">
        <Header />
        <Breadcrumb currentLocation={location.pathname} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/package" element={<TicketPackages />} />
          <Route path="/team" element={<Team />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detailblog" element={<DetailBlog />} />
          {/* <Route path="/logout" element={<Logout />} /> */}
        </Routes>

        <Footer />
      </div>
    </div>

  );
}

export default App;
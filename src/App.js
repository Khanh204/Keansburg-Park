import {useLocation, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import Home from './components/pages/home';
import Breadcrumb from './components/layouts/breadcrumb';
import About from './components/pages/about';
import Service from './components/pages/services';


function App() {
  const location = useLocation();
  return (

      <div className="App">
        <div id="loader"></div>
        <div className="main-wrapper">
          <Header/>
          <Breadcrumb currentLocation={location.pathname} />
         
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />  
            <Route path="/services" element={<Service/>} />
 

          </Routes>
          
          <Footer/>
        </div>
      </div>

  );
}

export default App;

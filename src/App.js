import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import Home from './components/pages/home';


function App() {
  return (

      <div className="App">
        <div id="loader"></div>
        <div className="main-wrapper">
          <Header/>
         
          <Routes>
            <Route path="/" element={<Home/>} />

          </Routes>
          
          <Footer/>
        </div>
      </div>

  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/footer'
import Services from './components/pages/services/Services';
import Home from './components/pages/home/Home';
import Products from './components/pages/products/Products';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Carousel from './components/pages/services/Carousel';



function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/services" element={<Services/>}/> 
                    <Route path="/products" element={<Products/>} />

                    <Route path="/contact" element={<Contact/>} /> 

                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/carousel" element={<Carousel/>} />

                    <Route path="/contact" element={<Contact/>} /> 
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/carousel" element={<Carousel/>} />

                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;

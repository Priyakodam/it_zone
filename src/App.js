import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/pages/services/Services';
import Footer from './components/footer/footer';
import Home from './components/pages/home/Home';

// const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
// const Services = () => <h1>Services Page</h1>;
const Products = () => <h1>Products Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

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
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer'
import Services from './components/pages/services/Services';
import Home from './components/pages/home/Home';
import Products from './components/pages/products/Products';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Carousel from './components/pages/services/Carousel';
import ScrollBar from './components/scroll/ScrollBar';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAuhNpLVtu_Wuz55liFDjnX4qmI3fsvBlQ",
    authDomain: "it-zone-ad382.firebaseapp.com",
    projectId: "it-zone-ad382",
    storageBucket: "it-zone-ad382.appspot.com",
    messagingSenderId: "381051361860",
    appId: "1:381051361860:web:5664788ce2a954b2993a11"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <ScrollBar />
                <Routes>
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/services" element={<Services/>}/> 
                    <Route path="/products" element={<Products/>} />
                    <Route path="/contact" element={<Contact/>} /> 
                    <Route path="/carousel" element={<Carousel/>} />

                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;

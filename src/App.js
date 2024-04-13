import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Services = () => <h1>Services Page</h1>;
const Products = () => <h1>Products Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/products" component={Products} />
                    <Route path="/contact" component={Contact} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

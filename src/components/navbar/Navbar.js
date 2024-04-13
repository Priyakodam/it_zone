import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../img/ITZone-logo.png';

const Navbar = () => {
    const [active, setActive] = useState("");

    // Function to handle link activation
    const handleSetActive = (link) => {
        setActive(active !== link ? link : "");
    };

    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <ul className="nav-links">
                <li>
                    <NavLink exact to="/" activeClassName="active" onClick={() => handleSetActive("home")}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active" onClick={() => handleSetActive("about")}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/services" activeClassName="active" onClick={() => handleSetActive("services")}>Services</NavLink>
                </li>
                <li className="dropdown-container">
                    <NavLink to="/products" 
                             className={`nav-link dropdown-toggle ${active === "products" ? "active" : ""}`}
                             onClick={() => handleSetActive("products")}>
                        Products
                    </NavLink>
                    
                        <div className='col-md-4'>
                    <div className={`dropdown-menu ${active === "products" ? "show" : ""}`}>
                        <NavLink to="/laptop" className="dropdown-item">Laptop</NavLink>
                        <NavLink to="/mobile" className="dropdown-item">Mobile</NavLink>
                        <NavLink to="/phone" className="dropdown-item">Phone</NavLink>
                    </div>
                    </div>
                    
                    
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active" onClick={() => handleSetActive("contact")}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../img/ITZone-logo.png';

const Navbar = () => {
    const [active, setActive] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSetActive = (link) => {
        setActive(active !== link ? link : "");
        setIsOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img src={logo} alt="Logo" className="logo" />
                <div className="menu-toggle" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li>
                        <NavLink exact to="/" activeClassName="active" onClick={() => handleSetActive("home")}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" activeClassName="active" onClick={() => handleSetActive("products")}>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" activeClassName="active" onClick={() => handleSetActive("services")}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active" onClick={() => handleSetActive("about")}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active" onClick={() => handleSetActive("contact")}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

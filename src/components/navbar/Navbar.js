import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../img/ITZone-logo.png';

const Navbar = () => {
    const [active, setActive] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSetActive = (link) => {
        setActive(active !== link ? link : "");
        setIsOpen(false); // Close the menu whenever an item is clicked
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
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
                    <div className={`dropdown-menu ${active === "products" ? "show" : ""}`}>
                        <div className="row">
                            <div className="col">
                                <NavLink to="/software" className="dropdown-item" onClick={() => handleSetActive("software")}>Laptop & Computer Brand</NavLink>
                                <NavLink to="/software" className="dropdown-item" onClick={() => handleSetActive("software-support")}>Software Installation Support</NavLink>
                                <NavLink to="/enterprise" className="dropdown-item" onClick={() => handleSetActive("enterprise")}>Enterprise Solutions</NavLink>
                                <NavLink to="/management" className="dropdown-item" onClick={() => handleSetActive("management")}>Server Rack and Cable Management</NavLink>
                            </div>
                            <div className="col">
                                <NavLink to="/software2" className="dropdown-item" onClick={() => handleSetActive("software2")}>Additional Software</NavLink>
                                <NavLink to="/enterprise2" className="dropdown-item" onClick={() => handleSetActive("enterprise2")}>More Solutions</NavLink>
                                <NavLink to="/management2" className="dropdown-item" onClick={() => handleSetActive("management2")}>Other Management Services</NavLink>
                            </div>
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

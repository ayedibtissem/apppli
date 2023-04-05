import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [nav, setNav] = useState(false); 
  return (
    <>
      <nav className="navbar">
        <a className="navbar-brand" href="/">
          <div className="logo-image">
            <img src="https://play-lh.googleusercontent.com/V1DnbM5E3k2PPGQbIDz3ILP4i1R4TYB6weTeEBrE5_ABfaTy1R82O4pnQIvAWk_lyA" className="img-fluid" alt="Logo" width={50} /> {/* Added alt attribute */}
          </div>
        </a>
       
        <ul className={nav ? "nav-links-nav" : "nav-links"} onClick={() => setNav(false)}>
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
          <Link to="/about" className="about">
            <li>About</li>
          </Link>
          <Link to="/services" className="services">
            <li>Services</li>
          </Link>
          <Link to="/skills" className="skills">
            <li>Skills</li>
          </Link>
          <Link to="/contact" className="contact"> 
            <li>Contact</li>
          </Link>
        </ul>
       
        <button className="mobile-menu-icon" onClick={() => setNav(!nav)}>
          {nav ? <ImCross /> : <FaBars />} 
        </button>
      </nav>
    </>
  );
};

export default Navbar;

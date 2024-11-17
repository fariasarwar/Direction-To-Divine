import React from "react";
import './header.css'
import Logo from '../../assets/Images/logo.png'
import { NavLink } from "react-router-dom";


const Header = ()=>{
    return(
        <>

        <header className="header">
          <img src={Logo} className="logo-section"/>

        <nav className="navbar">
        <NavLink to="/" className="navbar-links">Home</NavLink>
        <NavLink to="/books" className="navbar-links">Books</NavLink>
        <NavLink to="/course" className="navbar-links">Courses</NavLink>
        <NavLink to="/donate" className="navbar-links">Donate</NavLink>
        <NavLink to="/register" className="navbar-links">Register</NavLink>
        </nav>
        
        </header>
        </>
    );
}
export default Header;
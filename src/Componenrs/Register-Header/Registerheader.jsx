import React from 'react'
import Rlogo from "../../assets/Images/black-logo.png"
import './registerheader.css'
import { NavLink } from 'react-router-dom'

const Registerheader = () => {
  return (
    <>
      <div>
      <header className="R-header">
          <img src={Rlogo} className="R-logo-section"/>

          <nav className="R-navbar">
          <NavLink to="/" className="R-navbar-links">Home</NavLink>
          <NavLink to="/books" className="R-navbar-links">Books</NavLink>
          <NavLink to="/course" className="R-navbar-links">Courses</NavLink>
          <NavLink to="/donate" className="R-navbar-links">Donate</NavLink>
          <NavLink to="/register" className="R-navbar-links">Register</NavLink>
          </nav>
        
          </header>
      </div>
      
    </>
  )
}

export default Registerheader

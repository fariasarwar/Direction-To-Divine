import React from 'react'
import './afterregister.css'
import Alogo from '../../assets/Images/logo-a.png'
import { NavLink } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";
import Afterregisterfooter from './After-register-footer/Afterregisterfooter'

const Afterregister = () => {

  return (
    <>
      <div className='After-register-container'>
        <div className='After-register-header'>
           <div className='Afterregister-logo'>
            <img src={Alogo}/>
           </div>
           <div className='Afterregister-nav'>
            <ul>
                <li>
                    <div>
                      <button className="Navelink btn">Features</button>
                    </div>
                </li>

                <li>
                      <NavLink to="/privacy"  className="Navelink">Privacy</NavLink>
                </li>

                <li>
                      <NavLink to="/helpcenter" className="Navelink">Help Center</NavLink>
                </li>

                <li>
                      <NavLink to="/privacy"  className="Navelink">Blog</NavLink>
                </li>

                <li>
                      <NavLink to="/privacy"  className="Navelink">For Business</NavLink>
                </li>

                <li>
                      <NavLink to="/privacy"  className="Navelink">Whatsapp Web</NavLink>
                </li>

                <li>
                      <NavLink to="/privacy"  className="Navelink">Download</NavLink>
                </li>
            </ul>
           </div>
           <div className='Download-btn'>
            <button>Download</button>
            </div>
        </div>
      </div>
      <Afterregisterfooter/>
    </>
  )
}

export default Afterregister

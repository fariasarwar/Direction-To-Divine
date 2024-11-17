import React from 'react'
import './lowerfooter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { NavLink,Link } from 'react-router-dom'

const Lowerfooter = () => {
  return (
    <>
      <div className='lowerf-container'>
        <div className='lower-footer'>
            <div className='copyright-div'>
                <h3>©️ 2022 Direction To Divine</h3>
            </div>

            <div className='lower-f-name'>
                <h3>Design & Developed By</h3>
                   <NavLink to='#' className='link-h'>
                        <p className='link-h'>Muhammad Hammad</p>
                    </NavLink>
                    <Link to="https://web.whatsapp.com/"><FontAwesomeIcon icon={faWhatsapp} className='lower-f-name-icons'/></Link>
                    <Link to="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} className='lower-f-name-icons'/></Link>
            </div>
            
        </div>
      </div>
    </>
  )
}

export default Lowerfooter

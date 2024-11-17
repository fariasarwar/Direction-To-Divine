import React from "react";
import "./footer.css";
import flogo from "../../assets/Images/footer-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-main-div">
          <div className="footer-div-1">
            <div className="footer-div1-logo">
              <NavLink to="/">
                <img src={flogo} className="footer-div1-logo-img" />
              </NavLink>
            </div>
            <div className="footer-div1-text">
              <p>
                With a transformational and ambitious vision to be the Global
                Arabic linguistic study platform that provides universal access
                to the world’s best education of Classical Arabic, the
                linguistic beauty of the Quran and the studying of the prophetic
                journey in-depth with graphical presentation
              </p>
            </div>
          </div>

          <div className="footer-div-2">
            <div className="footer-icons-div">
            <Link to="https://www.facebook.com/"><FontAwesomeIcon
                icon={faFacebookSquare}
                className="footer-icons"
              /></Link>
              <Link to="https://web.whatsapp.com/"><FontAwesomeIcon icon={faWhatsapp} className="footer-icons" /></Link>
              <Link to="https://mail.google.com/"><FontAwesomeIcon icon={faEnvelope} className="footer-icons" /></Link>
              <Link to="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} className="footer-icons" /></Link>
              <Link to="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} className="footer-icons" /></Link>
            </div>
          </div>

          <div className="footer-div-3">
            <div className="f-d-3-part1">
              <h3>Courses</h3>
              <p>Start Your Journey Through The Quran’s Language.</p>
            </div>

            <div className="f-d-3-part1 f-d-3-part2">
              <h3>Books</h3>
              <p>
                Explore the linguistic beauty of the Quran and understand the
                divine's message.
              </p>
            </div>

            <div className="f-d-3-part1 f-d-3-part3">
              <h3>Seerah</h3>
              <p>
                Gain a better understanding of the Prophetic life and explore
                the approaches in reviving the spirit of Islam through studying
                the Prophetic journey in-depth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

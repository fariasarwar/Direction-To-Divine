import React from "react";
import './courses.css'
import image2 from '../../assets/Images/courseimg.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Header from '../../Componenrs/Header/Header'
import { Link } from "react-router-dom";

const Courses = ()=>{
    return(
        <>
          <div className="course-div">
            <div className="course-img-text">
            <Header/>
                <img src={image2} className="image2"/>
            </div>

        <div className="course-search-div">
            <div className="C-search-div">
                <h1>Search for Courses</h1>
                <div className="C-search-bar">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="C-search-icon"/>
                <input type="text" placeholder="Search..." className="course-input"/>
                </div>
                <h3>or <span>Browse</span> Categories</h3>
            </div>
            <div className="divs-data">
                <div className="three-divs">
                <div className="div-1">
                 <Link to="#">
                    <div className="div1-img"></div>
                    Dream Arabic Intensive
                 </Link>
                </div>

                <div className="div-2">
                <Link to="#">
                    <div className="div2-img"></div>
                    Quran's Language Program
                 </Link>
                </div>
                <div className="div-3">
                <Link to="#">
                    <div className="div3-img"></div>
                    Self-Transformation Course
                 </Link>
                </div>
                </div>
                <div className="fourth-div">
                <div className="div-4">
                <Link to="#">
                    <div className="div4-img-div">
                        <div className="div4-img"></div>
                    </div>
                    30-Day Spiritual Journey:
                    Strengthening Your Connection with Allah
                 </Link>
                </div>
                </div>
                </div>
            </div>

            <div className="C-ayat-div">
                    <div className="C-ayat-div-content">
                    <p class="C-ayat-div-content-p1">
                    <span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="C-ayat-div-content-quote1"><path d="M3.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.548-0.043zM12.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.549-0.043z"></path></svg>
                    </span>
                    If anyone pursues a path in search of knowledge, Allah will then by make easy for him a path to paradise; and he who is made slow by his actions will not be speeded by his genealogy
                    <span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="C-ayat-div-content-quote2"><path d="M12.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043zM3.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043z"></path></svg>
                    </span>
                    </p>
                    <p class="C-ayat-div-content-p2">
                    Sunan Abi Dawud 3643
                    </p>
                    </div>
                </div>
        </div>
            
        </>
    );
}
export default Courses;
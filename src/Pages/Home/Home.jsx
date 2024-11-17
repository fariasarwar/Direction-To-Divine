import React from "react";
import "./home.css";
import Header from "../../Componenrs/Header/Header";
import Slider from "../../Componenrs/slider/Slider";
import Slider2 from "../../Componenrs/slider2/slider2-data/Slider2";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const explorebtn = ()=>{
    navigate('/course')
  }
  return (
    <>
      <div className="Home-container">
        <div className="home-img">
          <Header />
          <div className="homeimg"></div>
          <div className="home-bg-text">
            <h1>
              Let's explore the linguistic beauty of the Divine's message,
              Al-Kitab
            </h1>
            <button onClick={explorebtn} className="home-btn">Explore</button>
          </div>
        </div>

        <div className="home-section">
          <div className="h-div-1">
            <div className="s-about">
              <p className="s-about-p1">About the</p>
              <p className="s-about-p2">initiative.</p>

              <br />
              <p class="s-about-p3">Our Mission</p>

              <p class="s-about-p4">
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    version="1.1"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    class="s-about-p4-quote1"
                  >
                    <path d="M3.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.548-0.043zM12.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.549-0.043z"></path>
                  </svg>
                </span>
                The DTD’s mission is to make the learning of the Quranic Arabic
                and the linguistic study of the Quran accessible worldwide in a
                way that is innovative, accessible, and approachable.
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    version="1.1"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    class="s-about-p4-quote2"
                  >
                    <path d="M12.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043zM3.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043z"></path>
                  </svg>
                </span>
              </p>
            </div>

            <div className="s-content">
              <p class="s-content-p1">
                Direction to Divine is the reality of the dream seen by Ma’am
                Zille Huma in 2017. Mam Zille Huma has done Master’s in English
                Literature from the University of Punjab, Pakistan and studied
                linguistics as a subject in it. Her pursuit of Islamic knowledge
                started when she began to attend the Arabic linguistic lecture
                series by Ustadh Nouman Ali khan in 2014 and various other
                scholars.
              </p>
              <p class="s-content-p1 s-content-p2">
                She is doing an Arabic language programme by Bayyinah Institute
                and further studying Lughat-ul-Arabia. She has done Higher
                Academic Studies in Shariah Sciences, in which she studied
                multiple courses that include Aqeedah, Usool-e-Fiqh,
                Usool-e-Tafseer, Usool-e-Hadith, Amsaal-ul-Quraan, Arabic
                grammar etc. She began to do linguistic research to explore the
                beauty of the Divine’s message.
              </p>
              <p class="s-content-p1 s-content-p3">
                She aims to share the linguistic beauty of Al-Quran with
                Aesthetically Illustrated concepts, accessible worldwide in a
                way that is innovative and approachable.
              </p>
            </div>
          </div>

          <div className="slider-main-dev">
            <div className="slider-heading">
              <h1>Meet The Team</h1>
            </div>
            <div className="slider-h-para">
              <p>Direction to Divine consists of devoted people who are giving their energies and doing their work with full devotion in this enlightened path.</p>
            </div>
            <div className="Slider-div">
            <Slider/>
          </div>
          </div>
          <div className="slider-2-main-div">
          <div className="slider-2-heading">
              <h1>Testimonials</h1>
            </div>
            <div className="Slider-2-div">
            <Slider2/>
          </div>
          </div>

          {/* =================== Ayat =============================== */}

          <div className="ayat-div">
            <div className="ayat-div-content">
              <p class="ayat-div-content-p1">
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    version="1.1"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    class="ayat-div-content-quote1"
                  >
                    <path d="M3.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.548-0.043zM12.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.549-0.043z"></path>
                  </svg>
                </span>
                Allah will raise those who have believed among you and those who
                were given knowledge, by degrees
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    version="1.1"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    class="ayat-div-content-quote2"
                  >
                    <path d="M12.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043zM3.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043z"></path>
                  </svg>
                </span>
              </p>
              <p class="ayat-div-content-p2">Al- Quran (58:11)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;

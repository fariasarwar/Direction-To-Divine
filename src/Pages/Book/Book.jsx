import React from "react";
import "./book.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Header from "../../Componenrs/Header/Header";
import bookimg from "../../assets/Images/book-bg.png";
import { Link } from "react-router-dom";

const Book = () => {
  return (
    <>
      <div className="Book-div">
        <div className="Book-img-text">
          <Header />
          <img src={bookimg} className="bookimg" />
        </div>

        <div className="Book-search-div">
          <div className="B-search-div">
            <h1>Search for Books</h1>
            <div className="B-search-bar">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="B-search-icon"
              />
              <input
                type="text"
                placeholder="Search..."
                className="book-input"
              />
            </div>
            <h3>
              or <span>Browse</span> Categories
            </h3>
          </div>
          <div className="B-div-data">
            <div className="B-div">
              <Link to="/book">
                <div className="B-div-img"></div>
                Fatihah-tul-kitaab
              </Link>
            </div>
          </div>
        </div>

        <div className="B-ayat-div">
          <div className="B-ayat-div-content">
            <p className="B-ayat-div-content-p1">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.1"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  className="B-ayat-div-content-quote1"
                >
                  <path d="M3.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.548-0.043zM12.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.549-0.043z"></path>
                </svg>
              </span>
              Proclaim! (or read!) in the name of thy Lord and Cherisher, Who
              created – Created man, out of a (mere) clot of congealed blood:
              Proclaim! And thy Lord is Most Bountiful, He Who taught (the use
              of) the pen, Taught man that which he knew not
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.1"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  className="B-ayat-div-content-quote2"
                >
                  <path d="M12.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043zM3.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043z"></path>
                </svg>
              </span>
            </p>
            <p className="B-ayat-div-content-p2">[Quran, 96:1-5].</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Book;

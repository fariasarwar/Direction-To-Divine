import React from "react";
import './donate.css'
import image1 from '../../assets/Images/Donateimg.png'
import Header from '../../Componenrs/Header/Header'

const Donate = ()=>{
    return(
        <>
          <div className="donate-div">
            <div className="donate-img">
            <Header/>
                <img src={image1} className="image1"/>
            </div>

          <div className="donate-section">
            <div className="form-div">
              <div className="form-text-h1">
                <h1>Make a Donation</h1>
              </div>
              <div className="form-text-p">
                <p>Every donation, no matter how big or small, makes a significant difference to our cause. Thank you for doing your part to help</p>
              </div>

              <div className="label-div">
              <label>Name</label><br/>
              <input type="text" className="inputs"/>
              </div>

              <div className="label-div">
              <label>Email</label><br/>
              <input type="mail" className="inputs"/>
              </div>

              <div className="label-div">
              <label>Phone Number</label><br/>
              <input type="number" className="inputs"/>
              </div>

              <div className="label-div">
              <label>Amount</label><br/>
              <input type="number" className="inputs"/>
              </div>

              <div className="label-div">
              <label>Company</label><br/>
              <input type="text" placeholder="if applicable" className="inputs"/>
              </div>

              
                <button className="donation-btn">Submit Donation</button>

            </div>
          </div>

          <div className="D-ayat-div">
                    <div className="D-ayat-div-content">
                    <p class="D-ayat-div-content-p1">
                    <span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="D-ayat-div-content-quote1"><path d="M3.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.548-0.043zM12.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.549-0.043z"></path></svg>
                    </span>
                    Prophet Muhammad (peace be upon him) said, “The believer’s shade on the Day of Resurrection will be his charity.
                    <span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="D-ayat-div-content-quote2"><path d="M12.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043zM3.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043z"></path></svg>
                    </span>
                    </p>
                    <p class="D-ayat-div-content-p2">
                    (Al-Tirmidhi)
                    </p>
                    </div>
                </div>
          </div>
        </>
    );
}
export default Donate;
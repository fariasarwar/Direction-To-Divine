import React, { useState } from "react";
import "./register.css";
import Registerheader from "../../Componenrs/Register-Header/Registerheader";
// import { useNavigate} from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
    waphone: "",
    city: "",
  });
  const handleregister = (e)=>{
    e.preventDefault();
    console.log(data)
  }
  const rhandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name,value);
    setData({...data, [name]: value})
  };
  // const navigate = useNavigate();

  // const [fullname,setfullName] = useState();
  // const [email,setEmail] = useState();
  // const [phone,setPhone] = useState();
  // const [waphone,setWaPhone] = useState();
  // const [city,setCity] = useState();
  // const registerhandler = ()=>{
  //   navigate('/after-register')
  //   e.preventDefault();
  //   console.log(fullname, email, phone);
  // }

  return (
    <>
      <div className="register-page">
        <Registerheader />

        <div className="R-form-div">
          <div className="R-form">
            <div className="form-divs">
              <div className="R-register-div">
                <h1>Registration</h1>
              </div>
              <form>
                <div className="form-two-divs">
                  <div className="R-form-div-1">
                    <div className="name-div">
                      <label>Full Name</label>
                      <br />
                      <input type="text" name="fullname" onChange={rhandler} />
                    </div>

                    <div className="name-div email-div">
                      <label>Email</label>
                      <br />
                      <input type="email" name="email" onChange={rhandler} />
                    </div>

                    <div className="select-course-div">
                      <label>Select Course</label>
                      <br />
                      <select>
                        <option></option>
                        <option>
                          30-Day Spiritual Journey:Strengthening Your Connection
                          with Allah
                        </option>
                      </select>
                    </div>

                    <div className="name-div phoneno-div">
                      <label>Phone Number</label>
                      <br />
                      <input type="tel" name="phone" onChange={rhandler} />
                    </div>

                    <div className="radio-div">
                      <label className="gender-label">Gender</label>
                      <br />
                      <input
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                      />
                      <label checked="checked" className="Radio-label">
                        Male
                      </label>
                      <input
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                      />
                      <label className="Radio-label">Female</label>
                      <input
                        type="radio"
                        name="gender"
                        id="other"
                        value="other"
                      />
                      <label className="Radio-label">Other</label>
                    </div>
                  </div>

                  <div className="R-form-div-2">
                    <div className="name-div whatsppno">
                      <label>Whats App Number</label>
                      <br />
                      <input type="tel" name="waphone" onChange={rhandler} />
                    </div>

                    <div className="select-course-div country">
                      <label>Country</label>
                      <br />
                      <select>
                        <option></option>
                        <option>National (Pakistan)</option>
                        <option>International (Abroad)</option>
                      </select>
                    </div>

                    <div className="name-div city">
                      <label>City</label>
                      <br />
                      <input type="text" name="city" onChange={rhandler} />
                    </div>

                    <div className="address-div">
                      <label>Address</label>
                      <br />
                      <textarea
                        id="address"
                        name="address"
                        rows="4"
                        cols="50"
                      />
                    </div>
                  </div>
                </div>
                <div className="R-register-div-btn">
                  <button onClick={handleregister}>Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;

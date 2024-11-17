import React from "react";
import Footer from "./Componenrs/Footer/Footer";
import Lowerfooter from "./Componenrs/lower-footer/Lowerfooter";
import Router from "./Componenrs/Route/Router";
// import Register from "./Pages/form/Register";

const App = ()=>{
  
  return(
    <>
    {/* <Register/> */}
      <Router/>
      <Footer/>
      <Lowerfooter/>
    </>
     
  );
}
export default App;
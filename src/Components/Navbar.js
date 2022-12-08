import React from 'react'
import "./Navbar.css";

export default function Navbar() {
  return (
   <div className='header'>
    <div className="logo">

    </div>
    <div className="searchbox">
        <div className="textsearch">
            <div className="text">
        <input type="text" style={{width:"100%"}} placeholder="search your items by your choice" /> 
        </div>
        <button style={{height:"100%"}}>
                <span className="material-symbols-outlined">search</span>
              </button>
        </div>
        <div className="dropdown">
              <select name="location" id="" style={{height:"100%"}}>
              <option value="Banglore">Banglore</option>
              <option value="pune">pune</option>
              <option value="pune">Hyderabad</option>
              <option value="pune">Patna</option>
              </select>
            </div>
    </div>
<div className="cars">
<select name="" id="" style={{height:"100%",width:"100%"}}>
    <option value="location">cars by location</option>
    <option value="price">cars by price</option>
    <option value="model">cars by model</option>
</select>

</div>
<div className="bikes">
    <select name="" id="" style={{height:"100%",width:"100%"}}>
    <option value="location">Bikes by location</option>
    <option value="price">Bikes by price</option>
    <option value="model">Bikes by model</option>
</select>
</div>
<div className="caraccessories">
<select name="" id="" style={{height:"100%",width:"100%"}}>
    <option value="tyres">tyres</option>
    <option value="bodyexterier">bodyexterier</option>
    <option value="engineparts">engineparts</option>
</select>
</div>
<div className="bikeaccessories">
<select name="" id="" style={{height:"100%",width:"100%"}}>
    <option value="tyres">tyres</option>
    <option value="lights">lights</option>
    <option value="engineparts">engineparts</option>
</select>

</div>
<div className="contactus">Contactus</div>
<div className="login">login/signup</div>
   </div>
  

  )
}


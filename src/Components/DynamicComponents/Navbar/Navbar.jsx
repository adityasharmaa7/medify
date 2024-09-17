import React, { useState } from 'react'
import { Link } from "react-router-dom";
import LogoImage from '../../../Assets/LogoImage.png';
import './Navbar.css'
function Navbar() {
    const[isToggle,setIsToggle] = useState(false);
    const toggleNavbar = () => {
        setIsToggle(!isToggle)
    }
  return (
    <>
    <div className='navbar'>
        <div className='logo'>
            <Link to="/" style={{textDecoration:"unset"}}>
                <img src={LogoImage} alt="" className='logoImg'/>
                <span className='logoName'>Medify</span>
            </Link>
            
        </div>
        <div className={`handles ${isToggle ? "active" : ""}`}>
             <button className='buttons'>Find Doctors</button>
             <button className='buttons'>Hospitals</button>
             <button className='buttons'>Medicines</button>
             <button className='buttons'>Surgeries</button>
             <button className='buttons'>Software for Provider</button>
             <button className='buttons'>Facilities</button>
             <Link to="/my-bookings" >
                <button className={`bookingbutton ${isToggle ? "active" : ""}`}>My Bookings</button>
             </Link>
             
        </div>
        <div className='navbarToggle' onClick={toggleNavbar}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </div>
      
    </div>
    </>
  )
}

export default Navbar

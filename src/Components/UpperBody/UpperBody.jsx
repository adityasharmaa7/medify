import React from 'react'
import Navbar from '../DynamicComponents/Navbar/Navbar'
import HeroSection from './HeroSection/HeroSection'
import SearchBox from './SearchBox/SearchBox'
import './UpperBody.css'
import Carousal from './Carousal/Carousal'
import Specialisation from './Specialisation/Specialisation'
import SecondCarousal from './SecondCarousal/SecondCarousal'
function UpperBody() {
  return (
    <div className='upperBodyContainer'>
        <div className='navbar-heroSection-container'>
            <Navbar />
            <HeroSection />
        </div>
        <div className='searchBoxContainer'>
            <SearchBox />
        </div>
        <Carousal />
        <Specialisation />
        <SecondCarousal />
    </div>
  )
}

export default UpperBody

import React from 'react'
import './HeroSection.css'
import DoctorsImage from '../../../Assets/DoctorsImage.png'
function HeroSection() {
  return (
    <div className='heroSection'>
      <div className='heroText'>
        <span id='line1'>Skip the travel! Find Online</span><br />
        <span id='line2'>Medical </span>
        <span id='line3'>Centers</span><br />
        <p id='line4'>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
        <button>Find Centers</button>
      </div>
      <div className='heroImage'>
        <img src={DoctorsImage} alt="Doctors-Image" />
      </div>
    </div>
  )
}

export default HeroSection

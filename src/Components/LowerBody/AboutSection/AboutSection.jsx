import React from 'react'
import './AboutSection.css'
import Icon1 from '../../../Assets/Icon1.png'
import Icon2 from '../../../Assets/Icon2.png'
import Icon3 from '../../../Assets/Icon3.png'
import Icon4 from '../../../Assets/Icon4.png'
function AboutSection() {
  return (
    <div className='about-section-body'>
      <div className='about-section-info'>
        <p id='about-section-line-1'>
        CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
        </p>
        <p id='about-section-line-2'>
        Our Families
        </p>
        <p id='about-section-line-3'>
        We will work with you to develop individualised care 
        plans, including management of chronic diseases. If we 
        cannot assist, we can provide referrals or advice about
         the type of practitioner you require. We treat all 
        enquiries sensitively and in the strictest confidence.
        </p>
      </div>
      <div className='about-section-cards'>
        <div className='card-body-outer'>
            <div className='about-section-card-body' id='about-section-card-one'>
                <div className='about-section-card-inner'>
                    <img src={Icon1} alt="" />
                    <p>5000+</p>
                    <span>Happy Patients</span>
                </div>    
            </div>
            <div className='about-section-card-body' style={{marginTop:"10%"}}>
                <div className='about-section-card-inner'>
                    <img src={Icon2} alt="" />
                    <p>200+</p>
                    <span>Hospitals</span>
                </div>
            </div>
        </div>
        <div className='card-body-outer'>
            <div className='about-section-card-body'>
                <div className='about-section-card-inner'>
                    <img src={Icon3} alt="" />
                    <p>1000+</p>
                    <span>Laboratories</span>
                </div>
                
            </div>
            <div className='about-section-card-body' style={{marginTop:"10%"}}>
                <div className='about-section-card-inner'>
                    <img src={Icon4} alt="" />
                    <p>700+</p>
                    <span>Expert Doctors</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection

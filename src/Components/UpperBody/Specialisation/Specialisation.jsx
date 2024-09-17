import React from 'react'
import './Specialisation.css'
import Drugstore from '../../../Assets/Drugstore.png'
import Stethoscope from '../../../Assets/Stethoscope.png'
import HeartRate from '../../../Assets/Heart Rate.png'
import Mri from '../../../Assets/Heart Rate Monitor.png'
import BloodSample from '../../../Assets/Blood Sample.png'
import Immune from '../../../Assets/Immune.png'
import Xray from '../../../Assets/X-Ray (3).png'
function Specialisation() {
  return (
    <div className='specialisation-container'>
      <p>Find by specialisation</p>
      <div className='specialisation-handles-body'>
        <div className='specialisation-handles'>
            <img src={Drugstore} alt="" />
            <span>Dentistry</span>
        </div>
        <div className='specialisation-handles'>
            <img src={Stethoscope} alt="" />
            <span>Primary Care</span>
        </div>
        <div className='specialisation-handles'>
            <img src={HeartRate} alt="" />
            <span>Cardiology</span>
        </div>
        <div className='specialisation-handles'>
            <img src={Mri} alt="" />
            <span>MRI Resonance</span>
        </div>
        <div className='specialisation-handles'>
            <img src={BloodSample} alt="" />
            <span>Blood Test</span>
        </div>
        <div className='specialisation-handles'>
            <img src={Immune} alt="" />
            <span>Piscologist</span>
        </div>
        <div className='specialisation-handles'>
            <img src={Drugstore} alt="" />
            <span>Laboratory</span>
        </div>
        <div className='specialisation-handles'>
            <img src={Xray} alt="" />
            <span>X-Ray</span>
        </div>
      </div>
      <div className='view-all'>
        <button>View All</button>
      </div>
    </div>
  )
}

export default Specialisation

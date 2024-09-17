import React from 'react'
import DetailImage from '../../../Assets/Detail1.png'
import TickMark from '../../../Assets/TickMark.png'
import './DetailSection.css'
function DetailSection() {
  return (
    <div className='detail-container'>
        <div className='detail-image-container'>
            <img src={DetailImage}/>
        </div>
        <div className='detail-info-container'>
            <p id='detail-info-1'> 
                HELPING PATIENTS FROM AROUND THE GLOBE!!
            </p>
            <span id='detail-info-2'>
                Patient
            </span>
            <span id='detail-info-3'> Caring</span><br />
            <p id='detail-info-4'>Our goal is to deliver quality of care in a courteous, 
                respectful, and compassionate manner. We hope you will 
                allow us to care for you and strive to be the first 
                and best choice for healthcare.
            </p>
            <div className='detail-info-5'>
                <img src={TickMark} alt="" />
                <span>Stay Updated About Your Health</span>
            </div>
            <div className='detail-info-5'>
                <img src={TickMark} alt="" />
                <span>Check Your Results Online</span>
            </div>
            <div className='detail-info-5'>
                <img src={TickMark} alt="" />
                <span>Manage Your Appointments</span>
            </div>
        </div>
    </div>
  )
}

export default DetailSection

import React from 'react'
import DetailSection from './DetailSection/DetailSection'
import './LowerBody.css'
import NewsSection from './NewsSection/NewsSection'
import AboutSection from './AboutSection/AboutSection'
import QnaContainer from './QnaContainer/QnaContainer'
function LowerBody() {
  return (
    <div className='lower-body'>
        <DetailSection />   
        <NewsSection /> 
        <AboutSection />  
        <QnaContainer/>
    </div>
  )
}

export default LowerBody

import React from 'react'
import './NewsSection.css'
import CardImage from '../../../Assets/NewsCardImage.png'
import WriterImage from '../../../Assets/WriterImage.png'
function NewsSection() {
  return (
    <div className='news-section-container'>
        <div className='news-section-heading'>
            <p id='heading-one'>Blog & News</p>
            <p id='heading-two'>Read Our Latest News</p>
        </div>
        <div className='news-section-cards'>
            <div className='card-outer-body'>
                <div className='card-image'>
                    <img src={CardImage} alt="card-image" />
                </div>
                <div className='card-info'>
                    <span className='card-info-title'>Medical</span>
                    <span className='card-info-title'> | </span>
                    <span className='card-info-title'>March 31, 2022</span>
                    <p>6 Tips To Protect Your Mental 
                        Health When You’re Sick
                    </p>
                    <div className='writer'>
                        <img src={WriterImage} alt="" />
                        <span>Rebecca Lee</span>
                    </div>
                </div>
            </div>
            <div className='card-outer-body'>
                <div className='card-image'>
                    <img src={CardImage} alt="card-image" />
                </div>
                <div className='card-info'>
                    <span className='card-info-title'>Medical</span>
                    <span className='card-info-title'>|</span>
                    <span className='card-info-title'>March 31, 2022</span>
                    <p>6 Tips To Protect Your Mental 
                        Health When You’re Sick
                    </p>
                    <div className='writer'>
                        <img src={WriterImage} alt="" />
                        <span>Rebecca Lee</span>
                    </div>
                </div>
            </div>
            <div className='card-outer-body'>
                <div className='card-image'>
                    <img src={CardImage} alt="card-image" />
                </div>
                <div className='card-info'>
                    <span className='card-info-title'>Medical</span>
                    <span className='card-info-title'>|</span>
                    <span className='card-info-title'>March 31, 2022</span>
                    <p>6 Tips To Protect Your Mental 
                        Health When You’re Sick
                    </p>
                    <div className='writer'>
                        <img src={WriterImage} alt="" />
                        <span>Rebecca Lee</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default NewsSection

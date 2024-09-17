import React from 'react'
import './QnaContainer.css'
import QnaImage2 from '../../../Assets/QnaImage2.png'
function QnaContainer() {
  return (
    <div className='QnaContainer'>
        <div className='qna-container'>
            <div className='qna-heading'>
                <p className='qna-heading-one'>Get Your Answer</p>
                <p className='qna-heading-two'>Frequently Asked Questions</p>
            </div>
            <div className='qna-content'>
                <div className='qna-iamge-container'>
                    <img src={QnaImage2} style={{objectFit:"cover"}}/>
                </div>
                <div className='qna-questions-container'>
                    <p>Why choose our medical for your family  <span className='add-icon'>?</span></p>
                    <p>Why we are different from others  <span className='add-icon'>?</span></p>
                    <p>Trusted & experience senior care & love  <span className='add-icon'>?</span></p>
                    <p>How to get appointment for emergency cases  <span className='add-icon'>?</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QnaContainer

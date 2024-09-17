import React from 'react'
import './Footer.css'
import Structure from '../../Assets/Structure.png'
import Structure2 from '../../Assets/Structure2.png'
import Cover from '../../Assets/CoverImage.png'
import GooglePlay from '../../Assets/google_play.png.png'
import AppleStore from '../../Assets/apple_store.png.png'
import LogoImage from '../../Assets/LogoImage.png'
import FaceBook  from '../../Assets/FB.png'
import Twitter from '../../Assets/Twitter.png'
import YouTube from '../../Assets/YouTube.png'
import Pintrest from '../../Assets/Pintrest.png'
function Footer() {
    const arrow = ">";
  return (
    <div className='footer-container'>
        <div className='download-container'>
            <div className='mobile-icon-body'>
                <div className='mobile-logo-container'>
                    <div className='mobile-body-container-1'>
                        <img src={Structure} alt="" id='body'/>
                        <img src={Cover} alt="" id='content' />
                    </div>
                    <div className='mobile-body-container-2'>
                        <img src={Structure2} alt="" id='body2'/>
                        <img src={Cover} alt="" id='content2' />
                    </div>
                </div>
            </div>
            <div className='download-content-body'>
                <p id='download-content-title'>Download the <br /><span id='download-content-title-highlight'>Medify</span> App</p>
                <p id='download-content-text'>Get the link to download the app</p>
                <div className='download-content-input-body'>
                    <input id="download-content-input" placeholder='Enter phone number'/>
                    <button id='download-content-button'>Send SMS</button> 
                </div>
                <div className='download-logo-container'>
                    <div className='download-logo-body'>
                        <img src={GooglePlay} alt="" />
                    </div>
                    <div className='download-logo-body'>
                        <img src={AppleStore} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='footer-end'>
            <div className='footer-end-one'>
                <div className='footer-logo-body'>
                    <img src={LogoImage} alt="" />
                    <span>Medify</span>
                </div>
                <div className='socialmedia-logo'>
                    <img src={FaceBook} alt="" />
                    <img src={Twitter} alt="" />
                    <img src={YouTube} alt="" />
                    <img src={Pintrest} alt="" />
                </div>
            </div>
            <div className='footer-end-two'>
                <div className='footer-handles'>
                    <p><span> {arrow} </span> About Us</p>
                    <p><span> {arrow} </span> Our Pricing</p>
                    <p><span> {arrow} </span> Our Gallery</p>
                    <p><span> {arrow} </span> Appointment</p>
                    <p><span> {arrow} </span> Privacy Policy</p>
                </div>
                <div className='footer-handles'>
                    <p><span> {arrow} </span>Orthology</p>
                    <p><span> {arrow} </span>Neurology</p>
                    <p><span> {arrow} </span>Dental Care</p>
                    <p><span> {arrow} </span>Opthalmology</p>
                    <p><span> {arrow} </span>Cardiology</p>
                </div>
                <div className='footer-handles'>
                    <p><span> {arrow} </span>About Us</p>
                    <p><span> {arrow} </span>Our Pricing</p>
                    <p><span> {arrow} </span>Our Gallery</p>
                    <p><span> {arrow} </span>Appointment</p>
                    <p><span> {arrow} </span>Privacy Policy</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer

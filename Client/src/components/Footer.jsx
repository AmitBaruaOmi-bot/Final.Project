import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>© 2024 Knock-Knock, Inc</p>
                <div className="footer-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>T&C</li>
                        <li><Policy></Policy></li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get in touch</h2>
                    <ul>
                        <li>+351 000 111 222</li>
                        <li>info@knock-knock.com</li>
                    </ul>
                </div>
            </div>
            <p className="footer-copyright">
                Copyright 2024 @ All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
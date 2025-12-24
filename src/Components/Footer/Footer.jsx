import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import Guitar from '../../GSAP/Guitar'

export default function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className="footer-content-left">
        <div> <h2><span class="material-symbols-outlined">
            chef_hat
          </span> Plato</h2>
          <p>Our Mission is to bring you delicios Food , quickly,freshly and conveniently. while supporting our local restaurants</p></div>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+1-938-284-0002</li>
            <li>tomato@123.com</li>
          </ul>
        </div>
      </div>
      <Guitar/>
      <p className='footer-copyright'>Copyright 2020 © Tomato.com - All Right Reserved.</p>
    </div>
  )
}

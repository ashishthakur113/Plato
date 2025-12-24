import React from 'react'
import './Footer.css'
import { GrInstagram , GrLinkedin } from "react-icons/gr";
import { AiFillTwitterCircle } from "react-icons/ai";


export default function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className="footer-content-left">
        <div >
           <h2><span className="material-symbols-outlined">
            chef_hat
          </span> Plato</h2>
          <p>Our Mission is to bring you delicios Food , quickly,freshly and  conveniently. while supporting our local restaurants</p>
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
            <li>plato@123.com</li>
            <div className='social-icons'>
            <li><GrInstagram/></li>
            <li><GrLinkedin/></li>
            <li><AiFillTwitterCircle/></li></div>
          </ul>
        </div>
      </div>
   
      <hr />
      <p className='footer-copyright'>Copyright 2020 © plato.com - All Right Reserved.</p>
    </div>
  )
}

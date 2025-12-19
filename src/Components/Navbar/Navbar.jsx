import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { assets } from "../../assets/assets"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import SearchBar from './SearchBar';




export default function Navbar({ setShowLogin }) {


   const { getTotalCartAmount } = useContext(StoreContext)
   const [menu, setMenu] = useState("Home");



   return (
      <div className='navbar'>
         <Link to="/" className='logo'><span class="material-symbols-outlined">
            chef_hat
         </span>
            <span className='logo-name'>Plato</span></Link>
         <ul className='navbar-menu'>
            <Link to="/" onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
            <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
            <a href='#app-download' onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Mobile-app</a>
            <a href='#footer' onClick={() => setMenu("Contact-us")} className={menu === "Contact-us" ? "active" : ""}>Contact us</a>
         </ul>
         <div className="navbar-right">
            <SearchBar />
            <div className='navbar-search-icon'>
               <Link to="/cart"> <img src={assets.basket_icon} alt="" /></Link>
               <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
            </div>
            <button onClick={() => setShowLogin(true)}>Sign In</button>
         </div>
      </div>
   )
}

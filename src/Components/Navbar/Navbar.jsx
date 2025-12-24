import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { assets } from "../../assets/assets"
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getTotalCartQuantity } from '../../redux-tookit/CartSlice'
import { logout } from '../../redux-tookit/AuthSlice';

export default function Navbar({ setShowLogin }) {

   const { isAuthenticated, user } = useSelector(state => state.auth);
   const cartQty = useSelector(getTotalCartQuantity);
   const [menu, setMenu] = useState("Home");
   const dispatch = useDispatch()

  const handleLogout = () => {
  dispatch(logout());
  dispatch(clearCart());

};


   return (
      <div className='navbar'>
         <Link to="/" className='logo'><span className="material-symbols-outlined">
            chef_hat
         </span>
            <span className='logo-name'>Plato</span></Link>
         <ul className='navbar-menu'>
            <Link to="/" onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
            <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
            <Link to='/aboutus' onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>About Us</Link>
            <a href='#footer' onClick={() => setMenu("Contact-us")} className={menu === "Contact-us" ? "active" : ""}>Contact us</a>
         </ul>
         <div className="navbar-right">
            <SearchBar />
            <div className='navbar-search-icon'>
               <Link to="/cart"> <img src={assets.basket_icon} alt="" /></Link>
               {cartQty > 0 && (
                  <div className="cart-count">
                     {cartQty}
                  </div>
               )}
            </div>
            {isAuthenticated ? (
               <div className="navbar-user">
                  <span className="navbar-username">
                     Hello, {user?.name || "User"} ▾
                  </span>

                  <div className="navbar-dropdown">
                     <Link to="/yourOrder" className="dropdown-item">
                       <button>My Orders</button>
                     </Link>
                     <hr />
                     <button
                        className="dropdown-item logout"
                        onClick={handleLogout}
                     >
                        Logout
                     </button>
                  </div>
               </div>

            ) : (
               <button className='sign-in' onClick={() => setShowLogin(true)}>Sign In</button>
            )}

         </div>
      </div>
   )
}

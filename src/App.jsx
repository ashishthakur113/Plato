import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LoginPopUp from './Components/LoginPopUp/LoginPopUp'
import SearchResult from './Pages/SearchResult/SearchResult'


export default function App() {

  const [showLogin , setShowLogin] = useState(false);

  return (
   <>
   {
    showLogin? <LoginPopUp setShowLogin={setShowLogin}/>:<></>
   }
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
        <Route path='/search' element={<SearchResult/>} />

      </Routes>
    </div>
    <Footer/>
   </>
  )
}

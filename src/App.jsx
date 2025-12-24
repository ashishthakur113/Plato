import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LoginPopUp from './Components/LoginPopUp/LoginPopUp'
import SearchResult from './Pages/SearchResult/SearchResult'
import { ToastContainer , Bounce} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderHistory from './Pages/OrderHistory/OrderHistory'
import AboutPage from './Pages/About/AboutPage'
import Cursor from './GSAP/Cursor'



export default function App() {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    
      {
        showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>
      }
      <div className='app'>
        
        <Cursor/>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={ <Cart /> } />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/search' element={<SearchResult />} />
          <Route path='/yourOrder' element={<OrderHistory/>}/>
          <Route path='/aboutus' element={<AboutPage/>}/>
        </Routes>
      </div>

      <Footer />

      <ToastContainer
        position="top-right" autoClose={2000} hideProgressBar={false}  newestOnTop={false}  closeOnClick={false}  rtl={false}    pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  )
}

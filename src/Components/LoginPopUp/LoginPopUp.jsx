import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
import { RxCross2 } from "react-icons/rx";

export default function LoginPopUp({setShowLogin}) {

    const [currState , setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
        <form className='login-popup-cont'>  
            <div className="login-popup-title">
               <h2>{currState}</h2>
               <RxCross2 onClick={()=>setShowLogin(false)}/>
            </div>
            <div className='login-popup-inputs'>
                {
                    currState === "Login"? <></> :  <input type="text" placeholder='Your Name' required />
                }
             
               <input type="email" placeholder='Your email' required />
               <input type="password" placeholder='Enter Password' required />
            </div>
            <button>{currState==="Sign Up"?"Create account":"Login"}</button>
           <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By Continuing , I agree to the Terms of use & Privacy Policy.</p>
           </div>
           {
            currState ==="Login"?
            <p>Create a new Account ? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p> :
            <p>Already have an account ? <span onClick={()=>setCurrState("Login")}>Login here</span></p>

           }
        </form>
    </div>
  )
}

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import './Cursor.css'
import emoji from '../../public/emoji.png'

export default function Cursor() {

    const cursorRef = useRef(null);

    useEffect(()=>{
        const cursor = cursorRef.current;

        gsap.set(cursor , {xPercent:20 ,yPercent:20});

        const moveCursor=(e)=>{
            gsap.to(cursor , {
                x:e.clientX,
                y:e.clientY,
                duration:0.5,
                rotation: "+=15", 
                ease:"slow(0.7,0.7,false)",
            })
        }
        window.addEventListener("mousemove",moveCursor);

        return()=>{
            window.removeEventListener("mousemove",moveCursor);
        }
    } ,[]);

  return (
    <div className='cursor' ref={cursorRef}>
        <img src={emoji} alt="" />
    </div>
  )
}




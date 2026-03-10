import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

export default function Cursor() {

    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;


        gsap.set(cursor, { xPercent: -50, yPercent: -50 });

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: "power2.out",
            })
        }

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor)
        }
    }, [])

    return (
        <div style={{ position: "fixed", left: "0", zIndex: "9999", pointerEvents: "none" }} ref={cursorRef}>
            <span style={{
                display: "block", height: "28px", width: "28px", background: "rgba(46, 125, 50, 0.15)",
                border: "2px solid #2e7d32", borderRadius: "50%", opacity: "0.9", boxShadow: "0 0 6px rgba(46,125,50,0.4)"
            }}>

            </span>
        </div>
    )
}




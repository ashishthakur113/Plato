import React, { useEffect, useRef } from 'react'
import './Guitar.css'
import gsap from 'gsap'


export default function Guitar() {

    const stringRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const string = stringRef.current;
    const pathEl = pathRef.current;

    const initialPath = `M 10 100 Q 500 100 990 100`;
    const finalPath = `M 10 100 Q 500 100 990 100`;

    const onMove = (e) => {
      const bounds = string.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;

      const path = `M 10 100 Q ${x} ${y} 990 100`;

      gsap.to(pathEl, {
        attr: { d: path },
        duration: 0.2,
        ease: "power3.out",
      });
    };

    const onLeave = () => {
      gsap.to(pathEl, {
        attr: { d: finalPath },
        duration: 0.6,
        ease: "elastic.out(1, 0.2)",
      });
    };

    string.addEventListener("mousemove", onMove);
    string.addEventListener("mouseleave", onLeave);

    return () => {
      string.removeEventListener("mousemove", onMove);
      string.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div id="string" ref={stringRef}>
      <svg width="1000" height="200">
        <path
          ref={pathRef}
          d="M 10 100 Q 500 100 990 100"
          stroke="white"
          fill="transparent"
        />
      </svg>
    </div>
    )
}
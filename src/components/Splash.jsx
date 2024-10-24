"use client";
import { useState,useRef, useEffect } from "react";
import gsap from 'gsap';

const Splash = () => {
  const [loading, setLoading] = useState(true);
  const logoRef = useRef(null);
  useEffect(() => {
    gsap.to(logoRef.current,{
      duration: 2,
      rotation:360,
      opacity: 1,
      ease: "power1.in"
    })

    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="relative top-0 max-w-[1300px] mx-auto p-0 left-0 w-full h-screen flex justify-center items-center z-50 transition-opacity duration-1000 ease-in-out">
        <div className="logo-container ">
          <img ref={logoRef} src="/nazaraB.png" alt="Logo" className="md:w-56 w-40 opacity-0" />
        </div>
      </div>
    );
  }

  return null;
};

export default Splash;

"use client";

import "./preloader.css";
import { useState, useEffect } from "react";


const Preloader = () => {

    const [preloaderExit, setPreloaderExit] = useState(false);

    useEffect(() => {
      document.body.style.overflow = 'hidden';
        setTimeout(() => {
            setPreloaderExit(true);
            document.body.style.overflow = 'visible';
        }, 3000);

    }, [])
    



  return (
    <div className={`fixed inset-0 bg-blue z-[19999] flex justify-center items-center ${preloaderExit && 'hidden'} `}>
        <div className="flex gap-7">
           <div class="pulsating-circle"></div>
            <p className="mt-12 text-4xl font-semibold text-white/80">We Care For You!</p>
 
        </div>
        
    </div>
  )
}

export default Preloader;
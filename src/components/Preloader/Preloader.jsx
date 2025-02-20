"use client";

import "./preloader.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";


const Preloader = () => {

    const [preloaderExit, setPreloaderExit] = useState(false);

    const pathname = usePathname();
    
    if(pathname.includes("blog")){
      return null;
    }

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
           <div className="pulsating-circle"></div>
            <p className="mt-12 text-4xl font-semibold text-white/80">We Care For You!</p>
 
        </div>
        
    </div>
  )
}

export default Preloader;
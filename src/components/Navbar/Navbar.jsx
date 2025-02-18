"use client"

import { PrimaryButton } from ".."
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import "./navabr.css";

const Navbar = () => {


  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (e) => {
    //  console.log(e.target.classList.contains("nav"));
     if(!e.target.classList.contains("nav")){
      setMobileNav(false);
     }
    })

    document.addEventListener("scroll", () => {
      setMobileNav(false);
    })
  }, [mobileNav])
  
  


  return (
    <div className="relative">
      <div className='flex justify-between items-center py-3 px-8 rounded-2xl shadow-[0px_5px_19px_-10px_rgba(0,_0,_0,_0.1)]'>
         <div className='text-2xl font-bold font-raleway'>
          <Link href="/">Magichands.</Link>
          
        </div>
      
        <div className=" max-md:hidden">
          <ul className='flex full-nav items-center gap-7'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#about-us">About</Link></li>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="">Blog</Link></li>
          </ul>
          
        </div>
        <div className="max-md:hidden"><PrimaryButton icon={false} text="Contact Us" /></div>
            
        
        <div className="md:hidden">
          <div className="nav py-1 px-3" onClick={() => setMobileNav((prev) => !prev)}><Image src={`${mobileNav ? '/assets/nav-close-icon.png' : '/assets/nav-open-icon.png'}`} width={24} height={24} alt="Menu icon" className="nav" /></div>
          <div className={` bg-blue absolute -bottom-44 left-0 nav right-0 ${mobileNav ? 'block' : 'hidden'}`}>
            <ul className='flex flex-col nav text-white p-6 pr-12 items-end gap-3'>
              <li className="nav"><Link href="/">Home</Link></li>
              <li className="nav"><Link href="/#about-us">About</Link></li>
              <li className="nav"><Link href="/#services">Services</Link></li>
              <li className="nav"><Link href="">Blog</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
     

    </div>
  )
}

export default Navbar;
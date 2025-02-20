"use client"

import { PrimaryButton } from ".."
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import "./navabr.css";

const Navbar = () => {


  const [mobileNav, setMobileNav] = useState(false);
  const [serviceHover, setServiceHover] = useState(false);

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
  }, [mobileNav]);
  
  


  return (
    <div className="relative">
      <div className='flex justify-between items-center py-3 px-8 rounded-2xl shadow-[0px_5px_19px_-10px_rgba(0,_0,_0,_0.1)]'>
         <div className='text-2xl font-bold font-raleway'>
          <Link href="/"><Image src="/assets/magichands-logo.png" width={180} height={60} alt="Magichands Logo" /></Link>
          
        </div>
      
        <div className=" max-md:hidden">
          <ul className='flex full-nav items-center gap-7'>
            <li className="p-3"><Link href="/">Home</Link></li>
            <li className="p-3"><Link href="/#about-us">About</Link></li>
            <div className=" relative" onMouseEnter={() => setServiceHover(true)} onMouseLeave={() => setServiceHover(false)}>
              <li className="p-3"><Link href="/#services">Services &#11050;</Link>
              </li>
              <div className={`${serviceHover ? 'flex' : 'hidden'} absolute w-[320px] translate-x-[40%] z-50 right-0 py-6 p-3 px-6 bg-blue text-white rounded-3xl flex-col gap-3`}>
                  <Link href="/diagnostic-musculoskeletal-ultrasound">Diagnostic musculoskeletal ultrasound</Link>
                  <Link href="/extracorporeal-shockwave-therapy">Extracorporeal Shockwave Therapy (ESWT)</Link>
                  <Link href="/corticosteroid-injections">Corticosteroid injections</Link>
                  <Link href="/arthrosamid">Hyaluronic Acid Injections for Joints & Soft Tissues</Link>
                  <Link href="/prolotherapy-musculoskeletal-treatment">Prolotherapy & Musculoskeletal Treatment</Link>
                  <Link href="/hyaluronic-acid-injections-for-joints-soft-tissues">Arthrosamid</Link>
                </div>
            </div>
            
            <li className="p-3"><Link href="/blog">Blog</Link></li>
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
              <li className="nav"><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
     

    </div>
  )
}

export default Navbar;
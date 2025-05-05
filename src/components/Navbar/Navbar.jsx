"use client"

import { PrimaryButton } from ".."
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import "./navabr.css";
import { AlertDialogBox } from "./_components/AlertDialogBox";

const Navbar = () => {


  const [mobileNav, setMobileNav] = useState(false);
  const [serviceHover, setServiceHover] = useState(false);
  const [locationHover, setLocationHover] = useState(false);

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
          <Link href="/" className="max-sm:max-w-[50%]"><Image src="/assets/magichands-logo2.png" width={300} height={60} alt="Magichands Logo" className="max-sm:max-w-[78%]" /></Link>
          
        </div>
      
        <div className=" max-lg:hidden">
          <ul className='flex full-nav items-center gap-2'>
            {/* <li className="p-3"><Link href="/">Home</Link></li> */}
            <li className="p-3"><Link href="/#about-us">About</Link></li>
            <li className="z-[1000] relative" onMouseEnter={() => setServiceHover(true)} onMouseLeave={() => setServiceHover(false)}>
              <div className="p-3"><Link href="/#services">Services &#11050;</Link>
              </div>
              <div className={`${serviceHover ? 'flex' : 'hidden'} absolute w-[500px] translate-x-[40%] z-[1000] right-0 py-6 p-3 px-6 bg-blue text-white rounded-3xl justify-between gap-3`}>
                <div className=" flex flex-col gap-3" >
                  <h3 className="text-xl border-b-2 max-w-fit">Clinical</h3>
                  <Link href="/corticosteroid-injections">Corticosteroid injections</Link>
                  <Link href="/hyaluronic-acid-injections-for-joints-soft-tissues">Hyaluronic Acid Injections for Joints & Soft Tissues</Link>
                  <Link href="/ultrasound-guided-injections">Ultrasound-Guided Injections for Joints and Soft Tissues</Link>
                </div>
                <div className=" flex flex-col gap-3">
                  <h3 className="text-lg border-b-2 max-w-fit">Primary care contracts</h3>
                  <Link href="/diagnostic-musculoskeletal-ultrasound">Diagnostic musculoskeletal ultrasound</Link>
                  <Link href="/extracorporeal-shockwave-therapy">Extracorporeal Shockwave Therapy (ESWT)</Link>
                  {/* <Link href="/prolotherapy-musculoskeletal-treatment">Prolotherapy & Musculoskeletal Treatment</Link> */}
                  {/* <Link href="/arthrosamid">Arthrosamid</Link> */}
                  <Link href="/primary-care-fcp">Primary Care FCP Services</Link>
                </div>
                  
                </div>
            </li>
            <li className="p-3"><Link href="/blog">Blogs</Link></li>
            <li className="p-3"><Link href="/#pricing">Pricing</Link></li>
            <li className="p-3"><Link href="/#team">Team</Link></li>
            <li className="z-[100] relative" onMouseEnter={() => setLocationHover(true)} onMouseLeave={() => setLocationHover(false)}>
              <div className="p-3"><Link href="/#appointment">Locations &#11050;</Link></div>
              <div className={`${locationHover ? 'flex' : 'hidden'} absolute w-[150px] translate-x-[10%] items-end z-[1000] right-0 py-6 p-3 px-6 bg-blue text-white rounded-3xl flex-col gap-3`}>
                  <Link href="" onClick={() => setLocationHover(false)}><AlertDialogBox locationName="Cardiff" locationAddress="Step Podiatry Cardiff, 321 Cowbridge Rd E, Cardiff CF5 1JD" /></Link>
                  <Link href="" onClick={() => setLocationHover(false)}><AlertDialogBox locationName="Swindon" locationAddress="Room 5, Simply Gym Swindon West, Chelmsford Road, Swindon, SN5 7HX" /></Link>
                </div>
            </li>
          </ul>
        </div>
        <div className="max-lg:hidden flex gap-7">
          {/* <div className="flex gap-3">
            <Image src="/assets/providers/provider-1.png" width={80} height={50} alt="Accredited provider" />
            <Image src="/assets/providers/provider-4.png" width={50} height={50} alt="Accredited provider" />
          </div> */}
          <PrimaryButton icon={false} text="Contact Us" />
        </div>
            
        
        <div className="lg:hidden">
          <div className="nav py-1 px-3" onClick={() => setMobileNav((prev) => !prev)}><Image src={`${mobileNav ? '/assets/nav-close-icon.png' : '/assets/nav-open-icon.png'}`} width={30} height={30} alt="Menu icon" className="nav" /></div>
          <div className={` bg-blue absolute top-12 left-0 nav right-0 ${mobileNav ? 'block' : 'hidden'}`}>
            <ul className='flex flex-col nav text-white p-6 pr-12 items-end gap-3'>
              <li className="nav"><Link href="/">Home</Link></li>
              <li className="nav"><Link href="/#about-us">About</Link></li>
              <li className="nav"><Link href="/#services">Services</Link></li>
              <li className="nav"><Link href="/blog">Blogs</Link></li>
              <li className="nav"><Link href="/#pricing">Pricing</Link></li>
              <li className="nav"><Link href="/#team">Team</Link></li>
              <li className="nav"><Link href="/#appointment">Locations</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
     

    </div>
  )
}

export default Navbar;
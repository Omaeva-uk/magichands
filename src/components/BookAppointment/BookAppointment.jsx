"use client"

import Image from "next/image";
import "./appointment.css";
import { PrimaryButton } from "..";
import { useState, useEffect } from "react";
import Link from "next/link";
import cardiffLocationImg from "../../../public/assets/appointment/cardiff.png";
import swindonLocationImg from "../../../public/assets/appointment/swindon.png";

const BookAppointment = () => {


    const [result, setResult] = useState("Book an Appointment");
    const [location, setlocation] = useState("cardiff");


    
    

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "09a8a79a-0a9e-42ed-be8f-66b209aea488");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Sent Successfully!");
      alert("You will be contacted back to arrange an appointment within 24 hours!");
      event.target.reset();

    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };




  return (
    <section id="appointment" className="my-24">
        <div className="bg-lighGreen p-6 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-7 justify-between rounded-3xl">
            <div className="grid grid-rows-3 w-full gap-7">
               <div className="overflow-hidden w-full row-span-2 relative rounded-3xl">
                    {/* <Image src="/assets/appointment/map.png" width={400} height={500} alt="Book Appointment Map" /> */}
                    {/* <video preload="metadata" className="max-h-[300px] w-full object-cover scale-[1.28]" autoPlay playsInline muted loop > */}
                        {
                            location === "swindon" ? (
                                <video preload="metadata" key={location} className="max-h-[300px] w-full object-cover scale-[1.28]" autoPlay playsInline muted loop >
                                <source src= "/assets/location-video.mp4" type="video/mp4" />
                                </video>
                            ) : (
                                <video preload="metadata" key={location} className="max-h-[300px] w-full object-cover scale-[1.28]" autoPlay playsInline muted loop >
                                <source src= "/assets/location-video-1.mp4" type="video/mp4" />
                                </video>
                            )
                        }
                        
                    {/* </video> */}
                    <div className="bg-lighGreen text-xs absolute -bottom-1 -right-1 p-3 rounded-2xl"><Link href="https://maps.app.goo.gl/u7AGDc4RinaTUi537" target="_blank"> {location === "swindon" ? <p>📍Room 5, Simply Gym Swindon West, Chelmsford Road, Swindon, SN5 7HX</p> : <p>📍 Step Podiatry Cardiff, 321 Cowbridge Rd E, Cardiff CF5 1JD</p>}</Link></div>
                </div> 
                <div className="row-span-1 grid grid-cols-3 gap-7 ">
                    <div className=" text-lg md:text-3xl font-semibold flex justify-center items-center">Now we serve in two locations!</div>
                    <div onClick={() => setlocation("cardiff")} className={`${location === "cardiff"  && 'border-2 border-green'} cursor-pointer rounded-3xl overflow-hidden bg-[url(/assets/appointment/cardiff.png)] bg-center bg-cover bg-no-repeat text-md flex justify-center p-3 font-semibold items-center`}><p className="bg-white w-fit py-1 px-3 rounded-3xl">Cardiff</p></div>
                    <div onClick={() => setlocation("swindon")} className={`${location === "swindon"  && 'border-2 border-green'} cursor-pointer rounded-3xl overflow-hidden bg-[url(/assets/appointment/swindon.png)] bg-center bg-cover bg-no-repeat text-md flex justify-center p-3 font-semibold items-center`}><p className="bg-white w-fit py-1 px-3 rounded-3xl">Swindon</p></div>
                </div> 
            </div>
           
            <div className="bg-white rounded-3xl overflow-hidden p-6 lg:p-12">
                <form action="" onSubmit={onSubmit} className="h-full flex flex-col">
                    <div className="flex max-md:flex-col justify-between gap-5 mt-2 md:mt-6">
                        <div className="flex-1">
                            <label htmlFor="name">Fullname</label>
                            <input type="text" className="w-full" id="name" name="Fullname" required />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="date">Date</label>
                            <input type="date" className="w-full" id="date" name="Date" min={new Date().toISOString().split('T')[0]} required />
                        </div>
                    </div>
                    
                    <div className="flex max-md:flex-col justify-between gap-5 mt-2 md:mt-6">
                        <div className="flex-1">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="w-full" id="email" name="Email" required />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" className="w-full" id="phone" name="Phone" required/>
                        </div>
                    </div>
                    <div className=" my-2 md:my-6 h-20 md:max-h-[80px]">
                        <label htmlFor="message">Message</label>
                        <input type="text" className="message" id="message" name="message" required/>
                    </div>
                    <button type="submit" className={`bg-green transition-all hover:bg-blue hover:text-white flex justify-center max-sm:mt-12 mt-6 items-center gap-2 px-5 py-3 font-semibold rounded-xl w-full `}>
                            {/* <Image src="/assets/chakra-img.png" width={30} height={30} alt="Magichands button icon" /> */}
                            {result}
                        </button>
                    
                </form>
            </div>
        </div>
    </section>
  )
}

export default BookAppointment;
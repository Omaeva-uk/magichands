"use client"

import Image from "next/image";
import "./appointment.css";
import { PrimaryButton } from "..";
import { useState, useEffect } from "react";

const BookAppointment = () => {


    const [result, setResult] = useState("Book an Appointment");


    
    

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "238a5ab6-c7a5-47ca-8ce2-1641f6ddfe2b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Booking Successfull!");
      event.target.reset();

    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };




  return (
    <section id="appointment" className="my-24">
        <div className="bg-lighGreen p-6 lg:p-12 flex max-lg:flex-col gap-7 justify-center rounded-3xl">
            <div className="overflow-hidden relative rounded-3xl">
                {/* <Image src="/assets/appointment/map.png" width={400} height={500} alt="Book Appointment Map" /> */}
                <video width={500} height={700} preload="metadata" className=" scale-[1.28]" autoPlay playsInline muted loop >
                    <source src="/assets/location-video.mp4" type="video/mp4" />
                </video>
                <div className="bg-lighGreen text-xs absolute -bottom-1 -right-1 p-3 rounded-2xl">Room 5, Simply Gym Swindon West</div>
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
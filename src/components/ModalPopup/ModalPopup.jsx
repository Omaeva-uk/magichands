"use client"


import { ctaData } from "@/data/data";
import { PrimaryButton } from "..";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";


const ModalPopup = () => {

    const [result, setResult] = useState("Book an Appointment");
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {

       setTimeout(() => {
        setModalOpen(true);
       }, 8000);


    }, [])


    

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
    
    <div className={`fixed z-[999] font-raleway text-black inset-0 bg-black/80 ${modalOpen ? 'flex' : 'hidden'} flex justify-center items-start pt-12`}>
       <div className="bg-lighGreen relative p-6 lg:p-12 flex max-lg:flex-col gap-7 justify-center rounded-3xl">
                        <div className="relative rounded-3xl">
                            <Image priority={true} src="/assets/appointment/offer-bg.jpg" width={400} height={500} alt="Book Appointment Map" style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: "30px"}} />
                            <div className=" bg-blue/80 text-white font-lato inset-0 flex flex-col rounded-3xl p-12 justify-between items-start absolute">
                              <div className="flex justify-start gap-5 items-center">
                                <Image src="/assets/modal/modal-offer-icon.png" width={40} height={40} alt="Magichands offer icon" />
                                <p className=" text-xl font-lato font-medium text-center">We care for you</p>
                              </div>
                              <div>
                                <h1 className=" text-2xl max-w-[200px] uppercase text-left font-black">3 Sessions for £130 - Limited Time Offer!</h1>
                              </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-3xl p-6 lg:p-12">
                            <form onSubmit={onSubmit} action="" className="h-full flex flex-col">
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
                   <div className="absolute top-2 right-3" onClick={() => {setModalOpen(false);}} ><Image src='/assets/nav-close-icon.png' width={24} height={24} alt="icon" className="" /></div>
               </div>
    </div>
    
  )
}

export default ModalPopup;
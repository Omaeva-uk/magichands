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
    
    <div className={`absolute lg:fixed z-[999] lg:p-[80px] xl:p-[100px] font-raleway text-black inset-0 bg-black/80 ${modalOpen ? 'flex' : 'hidden'} flex justify-center items-start pt-12`}>
       <div className="bg-lighGreen relative p-6 lg:p-12 flex max-lg:flex-col gap-7 justify-center rounded-3xl">
                        <div className=" md:flex-1 max-sm:h-[500px] rounded-3xl">
                          <div className=" relative h-[100%]">
                          <Image priority={true} src="/assets/modal/offer-main-img.jpg" width={400} height={500} alt="Book Appointment Map" style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: "30px"}} />
                            <div className=" bg-blue/80 text-white font-lato inset-0 flex flex-col rounded-3xl p-12 justify-between items-start absolute">
                              <div>
                              <div className="flex gap-3 mb-3 items-center">
                                  <Image src="/assets/modal/modal-offer-icon1.png" width={40} height={40} alt="Magichands offer icon" />
                                  <p className="">Limited time offer!</p>
                                </div>
                                <div className=" w-full justify-between gap-5 items-center">
                                  <p className=" self-start max-w-[300px] text-2xl font-lato font-semibold">Experience the Power of Ultrasound-Guided Injections!</p>
                                  <p className="mt-3 text-gray-200 max-w-xs">Looking for effective pain relief? Try our Ultrasound-Guided Injections today!</p>
                              </div>
                              </div>
                              
                              <div>
                                <h1 className="text-2xl xl:text-3xl lg:leading-tight max-w-[300px] uppercase leading-tight text-left font-black">1x initial assessment and 2x follow up sessions for £130</h1>
                              </div>
                            </div>
                          </div>
                            
                        </div>
                        <div className="bg-white rounded-3xl md:flex-1 p-6 lg:p-12">
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
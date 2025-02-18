import {Cta, BookAppointment, Testimonial } from "@/components";
import { service1Data } from "../services";
import Image from "next/image";

const page = () => {
  return (
    <div className="pt-16">
      <div>
        <div>
          <div className="grid grid-cols-2 gap-7 items-end">
            <div>
              <p className=" uppercase tracking-widest mb-5">Treatment</p>
              <h1 className="text-5xl leading-tight font-semibold max-w-2xl">
                {service1Data.name} 
              </h1>
            </div>
            <p className="text-lg max-w-3xl leading-normal">{service1Data.para1}</p>
          </div>
          
          <div className="grid mt-12 lg:mt-24 grid-cols-2 gap-7">
            <Image src="/assets/service1/main-img-1.jpg" width={500}  height={500} alt="Service Image" style={{width: "100%", height: "auto", objectFit: "cover", borderRadius: "30px"}} />
            <Image src="/assets/service1/main-img-2.jpg" width={500}  height={500} alt="Service Image" style={{width: "100%", height: "auto", objectFit: "cover",  borderRadius: "30px"}} />
          </div>
        </div>
        
        <div className="mt-12 lg:mt-24 "> 
          
          <div className="grid mt-12 grid-cols-2 lg:grid-cols-5 gap-7">
            {
              service1Data.conditions.map((item, i) => (
                <div key={i} className="bg-lighGreen rounded-3xl p-6">
                  <p>{item}</p>
                </div>
              ))
            }
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-24">
            <p className="text-xl max-w-3xl leading-normal">{service1Data.para2}</p>
            <p className="text-xl max-w-3xl leading-normal">{service1Data.para3}</p>
          </div>
        </div>
        
      </div>
      <Cta />
      <Testimonial />
      <BookAppointment />
    </div>
  )
}

export default page;
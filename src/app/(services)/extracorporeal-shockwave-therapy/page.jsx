import {Cta, BookAppointment, Testimonial } from "@/components";
import { service2Data } from "../services";
import Image from "next/image";
import { INTERNALS } from "next/dist/server/web/spec-extension/request";



const page = () => {
  return (
    <div className="pt-16">
      <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-end">
            <div>
              <p className=" uppercase tracking-widest mb-5">Treatment</p>
              <h1 className="text-5xl leading-tight font-semibold max-w-2xl">
                {service2Data.name} 
              </h1>
            </div>
            <p className="text-lg max-w-3xl leading-normal">{service2Data.para1}</p>
          </div>
          
          <div className="grid mt-12 lg:mt-24 grid-cols-2 gap-7">
            <Image src="/assets/service2/main-img-1.jpg" width={500}  height={500} alt="Service Image" style={{width: "100%", maxHeight: "441px", objectFit: "cover", borderRadius: "30px"}} />
            <Image src="/assets/service2/main-img-2.jpg" width={500}  height={500} alt="Service Image" style={{width: "100%", maxHeight: "441px", objectFit: "cover",  borderRadius: "30px"}} />
          </div>
        </div>
        <div className="mt-12 lg:mt-24 "> 
          <div>
            <h2 className="text-3xl font-medium mt-16 text-gray-900 leading-snug">{service2Data.subsection1.heading2}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-7 gap-7 [&>*:nth-child(even)]:bg-green">
              {
                service2Data.subsection1.list.map(item => (
                  <div key={item.id} className="bg-lighGreen p-12 rounded-xl ">
                    <h3 className="text-2xl mb-3 font-semibold leading-snug">{item.heading3}</h3>
                    <p>{item.para}</p>
                  </div>
                ))
              }
            </div>
            <div>
              <h2 className="text-3xl font-medium mt-16 text-gray-900 leading-snug">{service2Data.subsection2.heading2}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  {
                    service2Data.subsection2.list.map(item => (
                      <div key={item.id} className={`${item.id === 2 ? "bg-green" : item.id === 4 ? "bg-green" : "bg-lighGreen"}  p-12 rounded-xl `}>
                        <h3 className="text-2xl mb-3 font-semibold leading-snug">{item.heading3}</h3>
                        <p>{item.para}</p>
                      </div>
                    ))
                  }
                </div>
                <div className=" rounded-3xl overflow-hidden">
                  <Image src="/assets/service2/main-img-3.jpg" width={500} height={500} alt="Service Image" style={{width: "100%", height: "100%" , objectFit: "cover"}} />
                </div>
              </div>
              
            </div>
            <div>
              <h2 className="text-3xl font-medium mt-16 text-gray-900 leading-snug">{service2Data.subsection3.heading2}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 mt-7  [&>*:nth-child(even)]:bg-green  [&>*:nth-child(odd)]:bg-lighGreen gap-7">
              {
                service2Data.subsection3.list.map((item, i) => (
                  <div key={i} className={`p-12 font-semibold rounded-xl`}>
                    <p>{item}</p>
                  </div>
                ))
              }
            </div>
            </div>
          </div>
          <div>

          </div>
          <p className="text-xl mt-24 max-w-3xl leading-normal">{service2Data.para2}</p>
        </div>
      <Cta />
      <Testimonial />
      <BookAppointment />
    </div>
  )
}

export default page;
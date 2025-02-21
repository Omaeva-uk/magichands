import { service7Data } from "../services";
import Image from "next/image";
import { Cta, Testimonial, BookAppointment } from "@/components";

import React from 'react'

const page = () => {
  return (
    <div className="py-16 ">
      <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-end">
            <div>
              <p className=" uppercase tracking-widest mb-5">Treatment</p>
              <h1 className="text-5xl leading-tight font-semibold max-w-2xl">
                {service7Data.name} 
              </h1>
            </div>
            <p className="text-lg max-w-3xl leading-normal">{service7Data.para1}</p>
          </div>
          <div className="grid mt-12 lg:mt-24 grid-cols-2 auto-rows-[315px] gap-7">
            <Image src="/assets/service5/main-img-1.jpg" width={500}  height={500} alt="Service Image" style={{width: "100%", maxHeight: "100%", objectFit: "cover", borderRadius: "30px"}} />
            <Image src="/assets/service5/main-img-2.jpg" width={500}  height={500} alt="Service Image" style={{width: "100%", maxHeight: "100%", objectFit: "cover", borderRadius: "30px"}} />
          </div>
        </div>
        <div>
            <h2 className="text-3xl font-medium mt-16 text-gray-900 leading-snug">{service7Data.subsection1.heading2}</h2>
            <div className="mt-7 grid grid-cols-1 xl:grid-cols-2 gap-7">
            <div className="grid grid-cols-1 md:grid-cols-2  [&>*:nth-child(even)]:bg-green  [&>*:nth-child(odd)]:bg-lighGreen gap-7">
                    {
                        service7Data.subsection1.list.map((item, i) => (
                        <div key={i} className={`p-12 font-semibold border-2  border-green space-y-3 rounded-xl`}>
                            <h3 className="text-xl font-semibold leading-snug">{item.heading3}</h3>
                            <p>{item.para}</p>
                        </div>
                        ))
                    }
            </div>
            <div>
                <Image src="/assets/service5/main-img-2.jpg" width={500}  height={500} alt="Service Image" style={{width: "100%", maxHeight: "441px", objectFit: "cover", borderRadius: "30px"}} />
            </div>
        </div>
        </div>
        <div>
            <h2 className="text-3xl font-medium mt-16 text-gray-900 leading-snug">{service7Data.heading2}</h2>
            <div className="">
                <h2 className="text-2xl font-medium mt-16 text-gray-900 leading-snug">{service7Data.subsection2.heading2}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-12 [&>*:nth-child(even)]:bg-green  [&>*:nth-child(odd)]:bg-lighGreen gap-7">
                        {
                            service7Data.subsection2.list.map((item, i) => (
                            <div key={i} className={`p-12 font-semibold border-2  border-green space-y-3 rounded-xl`}>
                                <h3 className="text-xl font-semibold leading-snug">{item.heading3}</h3>
                                <p>{item.para}</p>
                            </div>
                            ))
                        }
                </div>
                <h2 className="text-2xl font-medium mt-16 text-gray-900 leading-snug">{service7Data.subsection3.heading2}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 mt-12 lg:max-w-[50%] [&>*:nth-child(even)]:bg-green justify-items-start  [&>*:nth-child(odd)]:bg-lighGreen gap-7">
                
                        {
                            service7Data.subsection3.list.map((item, i) => (
                            <div key={i} className={`p-12 font-semibold border-2  border-green space-y-3 rounded-xl`}>
                                <h3 className="text-xl font-semibold leading-snug">{item.heading3}</h3>
                                <p>{item.para}</p>
                            </div>
                            ))
                        }
                </div>
            </div>
            <div>
            <h2 className="text-3xl font-medium mt-16 text-gray-900 leading-snug">{service7Data.heading3}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-12  [&>*:nth-child(even)]:bg-green justify-items-start  [&>*:nth-child(odd)]:bg-lighGreen gap-7">
                
                        {
                            service7Data.subsection4.map((item, i) => (
                            <div key={i} className={`p-12 font-semibold border-2  border-green space-y-3 rounded-xl`}>
                                <h3 className="text-xl font-semibold leading-snug">{item.heading3}</h3>
                                {
                                    item.list.map((list,i) => (
                                        <p key={i}>{list}</p>
                                    ))
                                }
                                
                            </div>
                            ))
                        }
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-medium mt-16 text-gray-900 leading-snug">{service7Data.subsection5.heading2}</h2>
                <div className="grid grid-cols-1 xl:grid-cols-2 mt-12 gap-7">
                <div>
                    <Image src="/assets/service5/main-img-2.jpg" width={500}  height={500} alt="Service Image" style={{width: "100%", maxHeight: "441px", objectFit: "cover", borderRadius: "30px"}} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2  [&>*:nth-child(even)]:bg-green  [&>*:nth-child(odd)]:bg-lighGreen gap-7">
                        {
                            service7Data.subsection5.list.map((item, i) => (
                            <div key={i} className={`p-12 font-semibold border-2  border-green space-y-3 rounded-xl`}>
                                <p>{item}</p>
                            </div>
                            ))
                        }
                </div>
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-medium mt-16 text-gray-900 leading-snug">{service7Data.subsection6.heading2}</h2>
                <p className="text-lg mt-7 max-w-3xl leading-normal">{service7Data.subsection6.para}</p>
            </div>
        </div>
    </div>
  )
}

export default page;
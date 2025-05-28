import { servicesData } from "@/data/data";
import { service8Data } from "../services";
import Image from "next/image";
import { PrimaryButton } from "@/components";

const page = () => {
  return (
    <div>
         <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-end">
                <div>
                    <p className=" uppercase tracking-widest mb-5">Treatment</p>
                    <h1 className="text-5xl leading-tight font-semibold max-w-2xl">
                        {service8Data.name} 
                    </h1>
                </div>
                <p className="text-lg max-w-3xl leading-normal">{service8Data.para1}</p>
            </div>
            
            <div className="grid mt-12 lg:mt-24 grid-cols-2 gap-7">
                <Image src="/assets/service7/main-img-1.jpg" width={500}  height={500} alt="Service Image" style={{width: "100%", maxHeight: "441px", objectFit: "cover", borderRadius: "30px"}} />
                <Image src="/assets/service7/main-img-2.jpg" width={500}  height={500} alt="Service Image" style={{width: "100%", maxHeight: "441px", objectFit: "cover", borderRadius: "30px"}} />
            </div>
        </div>
        <div className="mt-12 lg:mt-24">
            <h2 className="text-3xl font-medium mt-16 text-gray-900 leading-snug">{service8Data.subsection1.heading2}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-7">
                <div className="grid grid-cols-1 gap-7">
                  {
                    service8Data.subsection1.list.map(item => (
                      <div key={item.id} className={`${item.id === 2 ? "bg-green" : item.id === 4 ? "bg-green" : "bg-lighGreen"} border-2  border-green  p-12 rounded-xl `}>
                        <h3 className="text-2xl mb-3 font-semibold leading-snug">{item.heading3}</h3>
                        <p>{item.para}</p>
                      </div>
                    ))
                  }
                </div>
                <div className=" rounded-3xl overflow-hidden">
                  <Image src="/assets/service7/main-img-3.jpg" width={500} height={500} alt="Service Image" style={{width: "100%", height: "100%" , objectFit: "cover"}} />
                </div>
              </div>
        </div>
        <div className="mt-12 lg:mt-24">
            <h2 className="text-3xl font-medium mt-16 text-gray-900 leading-snug">{service8Data.subsection2.heading2}</h2>
            <div className="mt-7 grid grid-cols-1 lg:grid-cols-2 gap-7">
                <div className=" rounded-3xl overflow-hidden">
                    <Image src="/assets/service7/main-img-4.jpg" width={500} height={500} alt="Service Image" style={{width: "100%", height: "100%" , objectFit: "cover"}} />
                </div>
                <div className=" grid grid-cols-1 gap-7">
                    {
                        service8Data.subsection2.list.map((item, i) => (
                            <div key={item.id} className={`${item.id === 2 ? "bg-green" : item.id === 4 ? "bg-green" : "bg-lighGreen"} border-2  border-green  p-12 rounded-xl `}>
                                <h3 className="text-2xl mb-3 font-semibold leading-snug">{item.heading3}</h3>
                                <p>{item.para}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
        <div className="mt-12 lg:mt-24">
            <h2 className="text-3xl font-medium mt-16 text-gray-900 leading-snug">{service8Data.subsection3.heading2}</h2>
                <div className="grid mt-7 grid-cols-1 md:grid-cols-3 gap-7">
                    {
                        service8Data.subsection3.list.map((item, i) => (
                            <div key={i} className={`${item.id === 2 ? "bg-green" : item.id === 4 ? "bg-green" : "bg-lighGreen"} border-2  border-green  p-12 rounded-xl `}>
                                <h3 className="text-xl md:text-2xl mb-3 font-semibold leading-snug">{item}</h3>
                                
                            </div>
                        ))
                    }
                </div>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-7 justify-between h-[400px] p-12 text-white bg-blue rounded-3xl mb-20">
            <div className=" ">
                    <h3 className="text-2xl lg:text-5xl mt-5">Get in Touch Today!</h3>
                    <p className="text-lg lg:text-2xl mt-5 mb-3 max-w-lg">Transform your practice with our Primary Care FCP services.</p>
                    <p className="max-w-md mb-7">Call us at 07878158530 to learn more and schedule a consultation.</p>
                    <div>
                        <PrimaryButton icon={false} text="Book Now" />
                    </div>
            </div>
            <div className="max-md:hidden relative">
                <Image src="/assets/service7/main-img-5.jpg" layout="fill" alt="Service Image" className=" object-cover object-center rounded-3xl" />
            </div>
        </div>
    </div>
  )
}

export default page;
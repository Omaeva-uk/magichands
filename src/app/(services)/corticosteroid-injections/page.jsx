import { service3Data } from "../services";
import Image from "next/image";
import { Cta, Testimonial, BookAppointment } from "@/components";

const page = () => {
  return (
    <div className="pt-16">
      <div>
          <p className=" uppercase tracking-widest mb-5">Treatment</p>
          <h1 className="text-5xl leading-tight font-semibold max-w-2xl">
            {service3Data.name} 
          </h1>
          <div className="grid mt-12 lg:mt-24 grid-cols-2 gap-7">
            <Image src="/assets/service-img.jpg" width={500}  height={500} alt="Service Image" style={{width: "100%", height: "auto", objectFit: "cover", borderRadius: "30px"}} />
            <Image src="/assets/service-img.jpg" width={500}  height={500} alt="Service Image" style={{width: "100%", height: "auto", objectFit: "cover",  borderRadius: "30px"}} />
          </div>
        </div>
        <div className="mt-12 lg:mt-24">
          <p className="text-xl max-w-3xl leading-normal">{service3Data.para1}</p>
          <h2 className="text-3xl font-medium mt-16 text-gray-900 leading-snug">{service3Data.subsection1.heading2}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-7 ">
          <div className="grid grid-cols-1 gap-7 [&>*:nth-child(even)]:bg-green">
              {
                service3Data.subsection1.list.map(item => (
                  <div key={item.id} className="bg-lighGreen p-12 rounded-xl ">
                    <h3 className="text-2xl mb-3 font-semibold leading-snug">{item.heading3}</h3>
                    <p>{item.para}</p>
                  </div>
                ))
              }
            </div>
            <div className=" rounded-3xl overflow-hidden">
              <Image src="/assets/service-img.jpg" width={100} height={100} alt="Service Image" style={{width: "100%", height: "100%" , objectFit: "cover"}} />
            </div>
          </div>
          <div>
              <h2 className="text-3xl font-medium mt-16 text-gray-900 leading-snug">{service3Data.subsection2.heading2}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-7  [&>*:nth-child(even)]:bg-green  [&>*:nth-child(odd)]:bg-lighGreen gap-7">
              {
                service3Data.subsection2.list.map((item, i) => (
                  <div key={i} className={`p-12 font-semibold rounded-xl`}>
                    <p>{item}</p>
                  </div>
                ))
              }
            </div>
            </div>
            <div>
              <h2 className="text-3xl font-medium mt-16 text-gray-900 leading-snug">{service3Data.subsection3.heading2}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-12">
                <div className=" rounded-3xl overflow-hidden">
                  <Image src="/assets/service-img.jpg" width={100} height={100} alt="Service Image" style={{width: "100%", height: "100%" , objectFit: "cover"}} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 [&>*:nth-child(even)]:bg-green">
                  {
                    service3Data.subsection3.list.map(item => (
                      <div key={item.id} className="bg-lighGreen p-12 rounded-xl ">
                        <h3 className="text-2xl mb-3 font-semibold leading-snug">{item.heading3}</h3>
                        <p>{item.para}</p>
                      </div>
                    ))
                  }
                </div>
                
              </div>
              
            </div>
            <div>
              <h2 className="text-3xl font-medium mt-16 text-gray-900 leading-snug">{service3Data.subsection4.heading2}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12 gap-7 [&>*:nth-child(even)]:bg-green">
              {
                service3Data.subsection4.list.map(item => (
                  <div key={item.id} className="bg-lighGreen p-12 rounded-xl ">
                    <h3 className="text-2xl mb-3 font-semibold leading-snug">{item.heading3}</h3>
                    <p>{item.para}</p>
                  </div>
                ))
              }
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-7">
              <div>
                <h2 className="text-3xl font-medium text-gray-900 mb-3 leading-snug">{service3Data.subsection5.heading2}</h2>
                 <p>{service3Data.subsection5.para}</p>
              </div>
              <div>
                <h2 className="text-3xl font-medium text-gray-900 mb-3 leading-snug">{service3Data.subsection6.heading2}</h2>
                 <p className="mb-3">{service3Data.subsection6.para1}</p>
                 <p>{service3Data.subsection6.para2}</p>
              </div>
            </div>
            <p className="mt-16 max-w-2xl">{service3Data.para2}</p>
        </div>
      <Cta />
      <Testimonial />
      <BookAppointment />
    </div>
  )
}

export default page;
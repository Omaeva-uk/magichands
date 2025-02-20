import { service6Data } from "../services";
import Image from "next/image";
import { Cta, Testimonial, BookAppointment } from "@/components";


const page = () => {
  return (
    <div className="pt-16">
          <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-end">
            <div>
              <p className=" uppercase tracking-widest mb-5">Treatment</p>
              <h1 className="text-5xl leading-tight font-semibold max-w-2xl">
                {service6Data.name} 
              </h1>
            </div>
            <p className="text-lg max-w-3xl leading-normal">{service6Data.para1}</p>
          </div>
              <div className="grid mt-12 lg:mt-24 grid-cols-2 gap-7">
                <Image src="/assets/service6/main-img-1.jpg" width={500}  height={500} alt="Service Image" style={{width: "100%", maxHeight: "441px", objectFit: "cover", borderRadius: "30px"}} />
                <Image src="/assets/service6/main-img-2.jpg" width={500}  height={500} alt="Service Image" style={{width: "100%", maxHeight: "441px", objectFit: "cover", borderRadius: "30px"}} />
              </div>
          </div>
          <div className="mt-12 lg:mt-24">
            <p className="text-xl max-w-3xl mt-3 leading-normal">{service6Data.para2}</p>
            <h2 className="text-3xl font-medium mt-16 text-gray-900 leading-snug">{service6Data.subsection1.heading2}</h2>
            <p className="text-xl max-w-3xl mt-3 leading-normal">{service6Data.subsection1.para}</p>
            <h2 className="text-3xl font-medium mt-16 text-gray-900 leading-snug">{service6Data.subsection2.heading2}</h2>
            <div className="grid mt-7 grid-cols-1 lg:grid-cols-2 gap-7">
              <div className="grid grid-cols-1 sm:grid-cols-2  [&>*:nth-child(even)]:bg-green  [&>*:nth-child(odd)]:bg-lighGreen gap-7">
                    {
                      service6Data.subsection2.list.map((item, i) => (
                        <div key={i} className={`p-12 border-2  border-green font-semibold  space-y-3 rounded-xl`}>
                          <p>{item}</p>
                        </div>
                      ))
                    }
              </div>
              <div className=" rounded-3xl overflow-hidden">
                  <Image src="/assets/service6/main-img-3.jpg" width={500} height={500} alt="Service Image" style={{width: "100%", height: "100%" , objectFit: "cover"}} />
              </div>
            </div>
            <h2 className="text-3xl font-medium mt-16 text-gray-900 leading-snug">{service6Data.subsection3.heading2}</h2>
            <div className="grid mt-7 grid-cols-1 lg:grid-cols-2 gap-7">
              <div className=" rounded-3xl overflow-hidden">
                  <Image src="/assets/service6/main-img-4.jpg" width={500} height={500} alt="Service Image" style={{width: "100%", height: "100%" , objectFit: "cover"}} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2  [&>*:nth-child(even)]:bg-green  [&>*:nth-child(odd)]:bg-lighGreen gap-7">
                    {
                      service6Data.subsection3.list.map((item, i) => (
                        <div key={i} className={`p-12 font-semibold border-2  border-green space-y-3 rounded-xl`}>
                          <h3 className="text-2xl mb-3 font-semibold leading-snug">{item.heading3}</h3>
                          <p>{item}</p>
                        </div>
                      ))
                    }
              </div>
            </div>
            <h2 className="text-3xl font-medium mt-16 mb-7 text-gray-900 leading-snug">{service6Data.subsection4.heading2}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3  [&>*:nth-child(even)]:bg-green  [&>*:nth-child(odd)]:bg-lighGreen gap-7">
                    {
                      service6Data.subsection4.list.map((item, i) => (
                        <div key={i} className={`p-12 font-semibold border-2  border-green space-y-3 rounded-xl`}>
                          <p>{item}</p>
                        </div>
                      ))
                    }
              </div>
            <h2 className="text-3xl font-medium mt-16 mb-7 text-gray-900 leading-snug">{service6Data.subsection5.heading2}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3  [&>*:nth-child(even)]:bg-green  [&>*:nth-child(odd)]:bg-lighGreen gap-7">
                    {
                      service6Data.subsection5.list.map((item, i) => (
                        <div key={i} className={`p-12 font-semibold border-2  border-green space-y-3 rounded-xl`}>
                          <h3 className="text-2xl mb-3 font-semibold leading-snug">{item.heading3}</h3>
                          <p>{item.para}</p>
                        </div>
                      ))
                    }
              </div>
          </div>

      <Cta />
      <Testimonial />
      <BookAppointment />
    </div>
  )
}

export default page;
import { service4Data } from "../services";
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
                {service4Data.name} 
              </h1>
            </div>
            <p className="text-lg max-w-3xl leading-normal">{service4Data.para1}</p>
          </div>
         
          <div className="grid mt-12 lg:mt-24 grid-cols-2 gap-7">
            <Image src="/assets/service4/main-img-1.jpg" width={500}  height={500} alt="Service Image" style={{width: "100%", maxHeight: "441px", objectFit: "cover", borderRadius: "30px"}} />
            <Image src="/assets/service4/main-img-2.jpg" width={500}  height={500} alt="Service Image" style={{width: "100%", maxHeight: "441px", objectFit: "cover", borderRadius: "30px"}} />
          </div>
        </div>
        <div className="mt-12 lg:mt-24">
          <div>
            <h2 className="text-3xl font-medium mt-16 text-gray-900 leading-snug">{service4Data.subsection1.heading2}</h2>
            <p>{service4Data.subsection1.para}</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="">
                <h3 className="text-3xl text-red/60 font-medium mt-16  leading-snug">{service4Data.subsection2.heading2}</h3>
                <div className="grid grid-cols-1 pr-3 md:grid-cols-2 mt-7  [&>*:nth-child(even)]:bg-green  [&>*:nth-child(odd)]:bg-lighGreen gap-7">
                  {
                    service4Data.subsection2.list.map((item, i) => (
                      <div key={i} className={`p-12 border-2  border-green font-semibold rounded-xl`}>
                        <p>{item}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div>
                <h3 className="text-3xl text-red/60 font-medium mt-16  leading-snug">{service4Data.subsection3.heading2}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-7  [&>*:nth-child(even)]:bg-green  [&>*:nth-child(odd)]:bg-lighGreen gap-7">
                  {
                    service4Data.subsection3.list.map((item, i) => (
                      <div key={i} className={`p-12 font-semibold border-2  border-green  space-y-3 rounded-xl`}>
                        <h3 className="text-xl font-semibold leading-snug">{item.heading3}</h3>
                        <p>{item.para}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-24 gap-7">
                  <div>
                    <div>
                      <h3 className="text-3xl font-medium   leading-snug">{service4Data.subsection4.heading2}</h3>
                      <div className="mt-7">
                        {
                          service4Data.subsection4.list.map((item, i) => (
                            <div className="flex gap-3 mb-5 items-start ">
                              <div key={i} className="w-3 h-3 self-center rounded-full mt-1 bg-black/60"></div>
                              <p>{item}</p>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                    <div className="mt-7">
                      <h3 className="text-3xl font-medium  text-gray-900 leading-snug">{service4Data.subsection5.heading2}</h3>
                        <div className="mt-7">
                          {
                            service4Data.subsection5.list.map((item, i) => (
                              <div className="flex gap-3 mb-5 items-start ">
                                <div key={i} className="w-3 self-center rounded-full h-3 mt-1 bg-black/60"></div>
                                <p>{item}</p>
                              </div>
                            ))
                          }
                        </div>
                    </div>
                  </div>
                  <div className="rounded-3xl overflow-hidden">
                        <Image src="/assets/service3/main-img-2.jpg" width={500} height={500} style={{width: "100%", height: "100%", objectFit: "cover"}} />
                  </div>
            </div>
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
              <div>
                <h3 className="text-3xl font-medium mt-16 text-gray-900 leading-snug">{service4Data.subsection4.heading2}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2  mt-7  [&>*:nth-child(even)]:bg-green  [&>*:nth-child(odd)]:bg-lighGreen gap-7">
                  {
                    service4Data.subsection4.list.map((item, i) => (
                      <div key={i} className={`p-12 border-2  border-green font-semibold rounded-xl`}>
                        <p>{item}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-medium mt-16 text-gray-900 leading-snug">{service4Data.subsection5.heading2}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-7  [&>*:nth-child(even)]:bg-green  [&>*:nth-child(odd)]:bg-lighGreen gap-7">
                  {
                    service4Data.subsection5.list.map((item, i) => (
                      <div key={i} className={`p-12 border-2  border-green font-semibold rounded-xl flex items-center gap-7`}>
                        <p>{item}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div> */}
            <div>
              <h2 className="text-3xl font-medium mt-16 text-gray-900 leading-snug">{service4Data.subsection6.heading2}</h2>
              <p>{service4Data.subsection6.para}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div>
                <h3 className="text-3xl font-medium mt-16 text-red/60  leading-snug">{service4Data.subsection2.heading2}</h3>
                <div className="grid grid-cols-1 pr-3 md:grid-cols-2 mt-7  [&>*:nth-child(even)]:bg-green  [&>*:nth-child(odd)]:bg-lighGreen gap-7">
                  {
                    service4Data.subsection2.list.map((item, i) => (
                      <div key={i} className={`p-12 border-2  border-green font-semibold rounded-xl`}>
                        <p>{item}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-medium mt-16 text-red/60  leading-snug">{service4Data.subsection8.heading2}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-7  [&>*:nth-child(even)]:bg-green  [&>*:nth-child(odd)]:bg-lighGreen gap-7">
                  {
                    service4Data.subsection8.list.map((item, i) => (
                      <div key={i} className={`p-12 border-2  border-green font-semibold rounded-xl flex items-center gap-7`}>
                        <p>{item}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-24 gap-7">
                  <div className="rounded-3xl overflow-hidden">
                      <Image src="/assets/service3/main-img-2.jpg" width={500} height={500} style={{width: "100%", height: "100%", objectFit: "cover"}} />
                  </div>
                  <div>
                    <div>
                      <h3 className="text-3xl  font-medium  text-gray-900 leading-snug">{service4Data.subsection9.heading2}</h3>
                      <div className="mt-7">
                        {
                          service4Data.subsection9.list.map((item, i) => (
                            <div className="flex gap-3 mb-5 items-start ">
                              <div key={i} className="w-3 h-3 self-center rounded-full mt-1 bg-black/60"></div>
                              <p>{item}</p>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                    <div className="mt-7">
                      <h3 className="text-3xl  font-medium  text-gray-900 leading-snug">{service4Data.subsection10.heading2}</h3>
                        <div className="mt-7">
                          {
                            service4Data.subsection10.list.map((item, i) => (
                              <div className="flex gap-3 mb-5 items-start ">
                                <div key={i} className="w-3 self-center rounded-full h-3 mt-1 bg-black/60"></div>
                                <p>{item}</p>
                              </div>
                            ))
                          }
                        </div>
                    </div>
                  </div>
                  
            </div>
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
              <div>
                <h3 className="text-3xl font-medium mt-16 text-gray-900 leading-snug">{service4Data.subsection9.heading2}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-7  [&>*:nth-child(even)]:bg-green  [&>*:nth-child(odd)]:bg-lighGreen gap-7">
                  {
                    service4Data.subsection9.list.map((item, i) => (
                      <div key={i} className={`p-12 border-2  border-green font-semibold rounded-xl`}>
                        <p>{item}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-medium mt-16 text-gray-900 leading-snug">{service4Data.subsection10.heading2}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-7  [&>*:nth-child(even)]:bg-green  [&>*:nth-child(odd)]:bg-lighGreen gap-7">
                  {
                    service4Data.subsection10.list.map((item, i) => (
                      <div key={i} className={`p-12 border-2  border-green font-semibold rounded-xl flex items-center gap-7`}>
                        <p>{item}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div> */}
          </div>
        </div>
      <Cta />
      <Testimonial />
      <BookAppointment />
    </div>
  )
}

export default page;
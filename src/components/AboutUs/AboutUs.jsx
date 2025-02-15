import { aboutData } from "@/data/data";
import Image from "next/image";
import "./about.css";



const AboutUs = () => {
  return (
    <section id="about-us" className="">
        <div className="flex max-md:flex-col my-24 gap-7 items-center">
            <div className="flex-1">
                <h2  className="font-raleway font-semibold text-3xl leading-snug md:text-4xl md:leading-snug">{aboutData.heading}</h2>
                <p className="mt-7 max-w-lg text-gray-700">{aboutData.para}</p>
                <div className="grid mt-14 grid-cols-2 gap-7">
                    {
                        aboutData.whyUs.map(item => (
                            <div data-aos="fade-in" key={item.id} className="">
                                <Image src="/assets/chakra-img.png" width={25} height={25} alt="Magichands About Us Image" className=" opacity-[0.5]" />
                                <h3 className="font-raleway text-gray-800 font-medium max-w-[200px] mt-5 mb-3 text-xl">{item.title}</h3>
                                <p className="text-gray-700 max-w-[230px]">{item.para}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex-1 relative">
                <div className="grid gap-7 grid-cols-1 md:grid-cols-2 relative z-10 ">
                    <div className="flex flex-col pt-11 items-center">
                        <div className="flex mb-7 gap-5 rounded-3xl bg-green p-12">
                            <div className="flex-1  max-w-[100px]">
                                <span className="text-2xl text-white font-bold">150+</span>
                                <p className="text-gray-800">Happy Customers</p>
                            </div>
                            <div className=" max-w-[60px]">
                                <span className="text-2xl text-white block font-bold">49+</span>
                                <p className="text-gray-800">Expert Teams</p>
                            </div>
                        </div>
                        <div><Image src="/assets/about/about-us-img-2.png" width={300} height={250} alt="Magichands About Us"  /></div>
                    </div>
                    <div  className="max-md:hidden">
                        <Image src="/assets/about/about-us-img-1.png" width={320} height={600} alt="Magichands About us Image" />
                    </div>
                </div>
                <div className="small-ring-animation absolute top-0 left-[40%] "><Image src="/assets/small-ring.png" width={100} height={100} alt="Magichand circles" /></div>
                <div className="big-ring-animation absolute bottom-0 left-[30%]  "><Image src="/assets/big-ring.png" width={180} height={180} alt="Magichand circles" /></div>
                
            </div>
        </div>
    </section>
  )
}

export default AboutUs;
import Image from "next/image";
import { servicesData } from "@/data/data";


const Services = () => {
  return (
    <section data-aos="fade-up" id="services" className="my-24">
        <div className="flex max-lg:flex-col gap-7">
            <div className="flex-1 md:flex lg:block gap-7 relative">
                <h2 className="font-raleway flex-1 font-semibold text-3xl mb-5 leading-snug md:text-4xl md:leading-snug">{servicesData.heading}</h2>
                <div className="flex-1 rounded-3xl overflow-hidden"><Image src="/assets/services/services-main-1.png" style={{width: "100%" , maxHeight: "350px", objectFit: "cover"}} width={400} height={400} alt="Magichands Services Image" /></div>
                <div className=" absolute -z-10 top-[5%] max-lg:left-0 lg:-right-[15%] "><Image src="/assets/big-ring.png" width={180} height={180} alt="Magichand circles" /></div>
            </div>
            <div className="flex-[1.3] grid gap-7 grid-cols-2 max-md:grid-cols-1 max-lg:mt-5">
                {
                    servicesData.serviceCards.map(item => (
                        <div data-aos="fade-in" key={item.id} className={` ${item.id === 1 ? 'bg-green' : 'bg-lighGreen'} p-6 rounded-3xl `}>
                            <div className="flex items-start justify-between">
                                <Image src={item.img} width={80} height={80} alt="Magichands Services Image" />
                                <h3 className="font-raleway text-right text-gray-800 font-medium max-w-[180px] mt-5 mb-3 text-xl">{item.title}</h3>
                            </div>
                            <div>
                                <p className="text-gray-700 text-right ml-auto max-w-[230px]">{item.para}</p>
                                
                            </div>
                            
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Services;
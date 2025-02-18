import Image from "next/image";
import { servicesData } from "@/data/data";
import Link from "next/link";
import { PrimaryButton } from "..";


const Services = () => {
  return (
    <section data-aos="fade-up" id="services" className="my-24">
        <div className="gap-7">
            <div className="flex-1 md:flex lg:block gap-7 relative">
                <h2 className="font-raleway max-w-xl flex-1 font-semibold text-3xl mb-5 leading-snug md:text-4xl md:leading-snug">{servicesData.heading}</h2>
                {/* <div className="flex-1 rounded-3xl overflow-hidden"><Image src="/assets/services/services-main-1.png" style={{width: "100%" , maxHeight: "350px", objectFit: "cover"}} width={400} height={400} alt="Magichands Services Image" /></div> */}
                <div className=" absolute -z-10 top-[50%] max-lg:left-0 lg:right-[15%] "><Image src="/assets/big-ring.png" width={180} height={180} alt="Magichand circles" /></div>
            </div>
            <div className="grid gap-7 grid-cols-3 max-md:grid-cols-1 mt-24 max-lg:mt-5">
                {
                    servicesData.serviceCards.map(item => (
                        <Link href={item.href} data-aos="fade-in" key={item.id} className={` ${item.id === 1 ? 'bg-green' : 'bg-lighGreen'} hover:border-green hover:border-2 transition-all p-6 rounded-3xl `}>
                            <div className="items-start flex gap-3 justify-between">
                                <Image src={item.img} width={70} height={70} alt="Magichands Services Image" />
                                <h3 className="font-raleway text-right text-gray-800 font-medium max-w-[300px] mt-5 mb-3 text-xl">{item.title}</h3>
                            </div>
                            <div>
                                <p className="text-gray-700 text-right ml-auto max-w-[300px]">{item.para}</p>
                                <button className={` ${item.id === 1 ? 'bg-blue text-white' : 'bg-green'} hover:bg-blue ml-auto mt-5 hover:text-white transition-all flex justify-center items-center gap-2 px-5 py-3 font-semibold rounded-xl`}>
                                    View More
                                </button>

                                
                                
                            </div>
                            
                        </Link>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Services;
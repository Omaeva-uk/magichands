import { pricingData } from "@/data/data";
import Image from "next/image";
import "./pricing.css";

const Pricing = () => {
  return (
    <section id="pricing" className="my-24">
        <h2 data-aos="fade-up" className="font-raleway font-semibold max-w-lg text-3xl leading-snug md:text-4xl md:leading-snug">Discover our treatments with best pricing</h2>
        <div className="grid relative grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-24">
            {
                pricingData.map(item => (
                    <div data-aos="fade-up" key={item.id} className={` relative z-10 ${item.id === 8 ? "p-0" : 'p-12'} ${item.id === 1 ? 'bg-green' : item.id === 3 ? 'bg-green' : item.id === 6 ? "bg-green" : 'bg-lighGreen'} overflow-hidden rounded-3xl `}>
                        {
                            item?.img ? (
                                <Image src={item.img} width={400} height={300} alt="Magic hands pricing image" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                            ) : (
                                <div>
                                 <div><Image src="/assets/chakra-img.png" width={30} height={30} alt="Magichands pricing icon" /></div>
                                <h4 className="mt-5 text-md font-medium mb-3">{item.treatment}</h4>
                                <p className="text-3xl font-semibold">{item.price}</p>
                                {
                                    item?.info && <p className="text-xs">{item.info}</p>
                                }   
                                </div>
                            )
                        }
                        
                    </div>
                ))
            }
            <div className="pricing-small-ring absolute -top-[8%] left-[20%]  "><Image src="/assets/small-ring.png" width={100} height={100} alt="Magichand circles" /></div>
            <div className="pricing-big-ring absolute -bottom-[14%] right-[17%] "><Image src="/assets/big-ring.png" width={180} height={180} alt="Magichand circles" /></div>
        </div>
    </section>
  )
}

export default Pricing;
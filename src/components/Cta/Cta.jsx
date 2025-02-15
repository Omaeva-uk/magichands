import { PrimaryButton } from "..";
import { ctaData } from "@/data/data";
import Image from "next/image";
import "./cta.css";

const Cta = () => {
  return (
    <section data-aos="fade-in" className="my-36">
        <div className="bg-blue text-white flex max-md:flex-col gap-7 max-w-5xl mx-auto max-sm:p-8 max-sm:py-8 p-12 py-16 rounded-3xl rounded-br-[50px] relative">
          
            <div className="flex-1 max-w-xl">
                <h3 className="text-3xl leading-snug max-lg:max-w-sm font-medium">{ctaData.heading}</h3>
                <p className="mt-3 mb-5 max-w-sm text-gray-200">{ctaData.para}</p>
                <div className="text-black"><PrimaryButton icon={false} text="Book Now" textColor="black" /></div>
            </div>
            <div className="flex-1  md:absolute max-lg:right-0 max-lg:top-[9%] right-[8%] -top-[18%]">
                <Image src="/assets/cta/cta-main-img.png" width={400} height={600} alt="Magichands requests to keep your spine healthy" className="md:max-w-[75%] lg:max-w-full"></Image>
            </div>
            <div className=" absolute cta-ring-animate bottom-[0] right-0 "><Image src="/assets/big-ring.png" width={100} height={100} alt="Magichand circles" /></div>
        </div>
    </section>
  )
}

export default Cta;
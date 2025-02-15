import Image from "next/image"
import { PrimaryButton } from ".."

const Hero = () => {
  return (
    <div className="flex max-md:flex-col items-center justify-around px-1 overflow-hidden">
      <div className="flex-1 ml-5">
        <h1 className="text-4xl leading-snug  lg:text-5xl font-light mb-5 max-w-[390px] lg:leading-snug">
          Recover <span className="font-semibold ">Stronger</span> , Move <span className=" font-semibold">Better</span>  with <span className="font-semibold text-green">Magichands</span>  Physiotherapist in the UK!
        </h1>
        <PrimaryButton icon={true} text="Book Your Session Now" />
      </div>
      <div className="flex-1 relative">
        <Image src="/assets/hero/hero-main-img.png" width={500} height={500} alt="Magichand Physiotherapy" className="mx-auto relative z-10" />
        <div className=" absolute top-[16%] left-[23%]"><Image src="/assets/small-ring.png" width={100} height={100} alt="Magichand ring image" /></div>
        <div className=" absolute bottom-0 left-[10%]"><Image src="/assets/small-ring.png" width={100} height={100} alt="Magichand ring image" /></div>
      </div>
    </div>
  )
}

export default Hero
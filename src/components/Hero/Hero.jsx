import Image from "next/image"
import { PrimaryButton } from "..";


const Hero = () => {
  return (
    <div className="flex max-md:flex-col items-center justify-around px-1 overflow-hidden">
      <div className="flex-1 ml-5">
        <div className="flex gap-3 mb-5 items-end">
          <p className="text-gray-600 text-xs">Approved by</p>
          <div className="flex gap-3">
            <Image src="/assets/hero/cpsc.png" width={75} height={60} alt="Accredited Logo" />
            <Image src="/assets/hero/hcpc.png" width={75} height={60} alt="Accredited Logo" />
          </div>
        </div>
        <h1 className="text-4xl leading-snug  lg:text-5xl font-light mb-5 max-w-[390px] lg:leading-snug">
          Recover, Move <span className=" font-semibold">Better</span> with <span className="font-semibold text-green">Magichands</span>  Physiotherapists!
        </h1>
        <div className=" flex flex-col justify-start gap-2">
          <PrimaryButton icon={true} text="Book Your Session Now" />
          <p className="font-medium pl-3 text-md">Or call us directly at <span className="font-semibold">07878158530</span>!</p>
        </div>
        
      </div>
      <div className="flex-1 relative">
        <Image src="/assets/hero/hero-main-img.png" width={500} height={500} alt="Magichand Physiotherapy" className="mx-auto relative -z-[1]" />
        {/* <Image src="https://res.cloudinary.com/dwtlg8q6n/image/upload/v1747127229/hero-main-img_zxrab2.png" width={500} height={500} alt="Magichand Physiotherapy" className="mx-auto relative -z-[1]" /> */}
        <div className=" absolute top-[16%] left-[23%]"><Image src="/assets/small-ring.png" width={100} height={100} alt="Magichand ring image" /></div>
        <div className=" absolute bottom-0 left-[10%]"><Image src="/assets/small-ring.png" width={100} height={100} alt="Magichand ring image" /></div>
      </div>
    </div>
  )
}

export default Hero;
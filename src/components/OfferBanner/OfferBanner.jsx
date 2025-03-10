import Image from "next/image";
import "./offerbanner.css";

const OfferBanner = () => {
  return (
    <div className="bg-blue  text-white text-xs px-12 max-md:pl-5 py-1 overflow-hidden">
      <div className="marquee-effect flex w-full whitespace-nowrap gap-14 justify-between">
        <div className="flex  items-center gap-3">
        <Image src="/assets/hero/offer-icon.png" width={20} height={20} alt="Offer icon for magichands" />
        <p>3 Sessions for £130 - Limited Time Offer!</p>
      </div>
      <div className="flex  items-center gap-3">
        <Image src="/assets/hero/mail-icon.png" width={20} height={20} alt="Offer Icon" />
        <p>info@magichandphysiotherapylimited.co.uk</p>
      </div>
      </div>
      
    </div>
  )
}

export default OfferBanner;
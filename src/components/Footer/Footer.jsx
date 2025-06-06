import { footerData } from "@/data/data";
import Link from "next/link";
import { PrimaryButton } from "..";
import Image from "next/image";



const Footer = () => {
  return (
    <div className=" bg-blue text-white p-6 lg:p-12">
      <div className="flex max-md:flex-col justify-between bg-blue text-white">
        <div className=" sm:max-w-[18rem] lg:max-w-sm">
          <div className='text-2xl mb-3 font-bold font-raleway'>
          <Link href="/"><Image src="/assets/footer-logo.png" width={350} height={60} alt="Magichands Logo" /></Link>
          </div>
          <p className="text-white-500">{footerData.para}</p>
          <div className="text-black flex max-lg:flex-col justify-start items-start lg:items-center gap-5 mt-10">
            <PrimaryButton href="/#services" text="Our Services" />
            <Link href="/#appointment" className="flex items-center text-white gap-5">Book an Appointment <Image src="/assets/green-stroke-arrow.png" width={30} height={20} alt="Book an appointment icon" /></Link>
          </div>
          <div className="flex gap-3 mt-5">
            <Link href="https://www.facebook.com/profile.php?id=61573625049192&sk=about"><Image src="/assets/social/facebook.png" width={30} height={30} alt="Magichands facebook" /></Link>
            <Link href=""><Image src="/assets/social/linkedin.png" width={30} height={30} alt="Magichands facebook" /></Link>
            <Link href="https://www.instagram.com/magichands_physiotherapy_ltd?utm_source=qr&igsh=MW5vdG0wcGl6aXgxbg=="><Image src="/assets/social/instagram.png" width={30} height={30} alt="Magichands facebook" /></Link>
          </div>
          
        </div>
        <div>
          <div className="flex md:flex-col text-gray-400 max-md:mt-7 gap-7">
            {
              footerData.link.map((item, i) => (
                <Link key={item.id} href={item.href}>{item.link}</Link>
              ))
            }
            
          </div>
        </div>
        
        
          
          <div className="max-w-xs xl:max-w-sm text-right text-white-400 max-md:mt-5 flex flex-col max-lg:items-start items-end gap-5">
            <p className="text-left"><span className=" font-bold mr-3">Swindon Location - </span>{footerData.addressSwindon}</p>
            <p className="text-left"><span className=" font-bold mr-3">Cardiff Location - </span>{footerData.addressCardiff}</p>
            <div className="max-sm:flex max-sm:gap-5 sm:space-y-5 items-center w-full">
              <Link href="mailto:info@magichandphysiotherapylimited.co.uk" className="flex items-center gap-3"><Image src="/assets/footer-mail.png" width={30} height={30} alt="Mail us" /><p className="max-sm:hidden">{footerData.mail}</p></Link>
              <Link href="tel:+497878158530" className="flex items-center gap-3"><Image src="/assets/footer-call.png" width={30} height={30} alt="Call us"/><p className="max-sm:hidden">{footerData.contact}</p></Link>
            </div>
            <Link href="/#appointment" className="flex items-center justify-end text-white gap-5">Contact Us <Image src="/assets/green-filled-arrow.png" width={30} height={20} alt="Book an appointment icon" /></Link>
          </div>
        
        
      </div>
      <div className="h-[1px] my-7 bg-white/20 w-full "></div>
      <div className="flex justify-between items-center">
        <p className="text-xs text-white-600">{new Date().getFullYear()} Copyright. All rights reserved</p>
        <p className="text-xs text-white-600">Designed and developed by <Link href="https://www.omaeva.com" className=" underline">Omaeva Ltd UK</Link>.</p>
        <Link href="/privacy-policy" className="text-xs text-white-600">Privacy Policy</Link>
      </div>
    </div>
  )
}

export default Footer;

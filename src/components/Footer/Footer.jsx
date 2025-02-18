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
            Magichands.
          </div>
          <p className="text-gray-500">{footerData.para}</p>
          <div className="text-black flex max-lg:flex-col justify-start items-start lg:items-center gap-5 mt-10">
            <PrimaryButton href="/#services" text="Our Services" />
            <Link href="/#appointment" className="flex items-center text-white gap-5">Book an Appointment <Image src="/assets/green-stroke-arrow.png" width={30} height={20} alt="Book an appointment icon" /></Link>
          </div>
          <div className="text-black flex max-lg:flex-col justify-start items-start lg:items-center gap-5 mt-10">
            <Image src="/assets/csp-logo.png" width={140} height={48} alt="CSP Logo" style={{width: "100%",  height: "100%", objectFit: "cover"}} />
            <Image src="/assets/hcpc-logo.png" width={140} height={48} alt="CSP Logo" style={{width: "100%", height: "100%", objectFit: "cover"}} />
          </div>
        </div>
        <div className="flex max-md:flex-col max-sm:items-end text-gray-400 gap-10">
          <div className="flex md:flex-col max-md:mt-7 gap-7">
            {
              footerData.link.map((item, i) => (
                <Link key={item.id} href={item.href}>{item.link}</Link>
              ))
            }
          </div>
          <div className="max-w-xs xl:max-w-sm text-right flex flex-col items-end gap-5">
            <p>{footerData.address}</p>
            <p>{footerData.mail}</p>
            <p>{footerData.contact}</p>
            <Link href="/#appointment" className="flex items-center justify-end text-white gap-5">Contact Us <Image src="/assets/green-filled-arrow.png" width={30} height={20} alt="Book an appointment icon" /></Link>
          </div>
        </div>
        
      </div>
      <div className="h-[1px] my-7 bg-white/20 w-full "></div>
      <div className="flex justify-between items-center">
        <p className="text-xs text-gray-600">{new Date().getFullYear()} Copyright. All rights reserved</p>
        <p className="text-xs text-gray-600">Designed and developed by <Link href="https://www.omaeva.com" className=" underline">Omaeva Ltd UK</Link>.</p>
        <Link href="/" className="text-xs text-gray-600">Privacy Policy</Link>
      </div>
    </div>
  )
}

export default Footer;
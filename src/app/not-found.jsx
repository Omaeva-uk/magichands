import { Navbar } from "@/components";
import Image from "next/image";
import Link from "next/link";


const NotFound = () => {
  return (
    <div className='bg-lighGreen fixed inset-0 h-screen'>
        
        <div className="pt-32 px-8">
            <div className="max-w-5xl mx-auto text-center">
                <p className="text-2xl text-black/60 mb-5 font-bold">Oops!</p>
                <p className="text-4xl font-medium">This page doesn’t exist.</p>
            </div>
            <div className="relative max-w-2xl mx-auto">
                <div className="flex justify-center items-center">
                   <Image src="/404-page/back-ring.png" width={400} height={400} alt="404 Page" />  
                   <div className=" absolute sm:top-[20%] top-[25%]">
                    <Image src="/404-page/404.png" width={722} height={400} alt="404 Page" />
                    <div className="flex font-medium md:text-3xl text-xl justify-between mt-8">
                        <Link href="/" className=" underline">Go back</Link>
                        <Link href="/" className=" underline">Go Home</Link>
                    </div>
                   </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default NotFound;
import Image from "next/image";
import Link from "next/link";

const PrimaryButton = ({icon, text, width, href}) => {
  return (
    <Link href={`${href ? href : '/#appointment'} `}>
     <button className={`bg-green hover:bg-blue hover:text-white hover:border-green text-black transition-all flex justify-center items-center gap-2 px-5 py-3 font-semibold rounded-xl ${width === 'full' && 'w-full'} `}>
        <Image src="/assets/chakra-img.png" width={30} height={30} alt="Magichands button icon" className={`${icon ? 'block' : 'hidden' }`} />
        {text}
    </button>
    </Link>
   
  )
}

export default PrimaryButton
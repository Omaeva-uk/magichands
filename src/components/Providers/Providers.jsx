import Image from "next/image";

const Providers = () => {
  return (
    <div className="my-12  xl:my-24">
        <h2 className="font-raleway max-w-2xl flex-1 font-semibold text-3xl my-24 leading-snug md:text-4xl md:leading-snug"><span className="text-red">Accredited</span> – Service Providers For</h2>
        <div className="grid grid-cols-5 gap-7">
            <Image src="/assets/providers/provider-1.png" width={120} height={100} alt="Accredited provider" />
            <Image src="/assets/providers/provider-2.png" width={120} height={100} alt="Accredited provider" />
            <Image src="/assets/providers/provider-3.png" width={120} height={100} alt="Accredited provider" />
            <Image src="/assets/providers/provider-4.png" width={120} height={100} alt="Accredited provider" />
            <Image src="/assets/providers/provider-5.png" width={120} height={100} alt="Accredited provider" />
        </div>
    </div>
  )
}

export default Providers;
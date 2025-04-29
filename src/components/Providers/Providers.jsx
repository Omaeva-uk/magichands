import Image from "next/image";

const Providers = () => {
  return (
    <div className="my-12  xl:my-24">
        <h2 className="font-raleway max-w-2xl flex-1 font-semibold text-3xl my-24 leading-snug md:text-4xl md:leading-snug"><span className="text-red">Accredited</span> – Service Providers For</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 max-w-5xl justify-items-center mx-auto gap-9">
            {/* <Image src="/assets/providers/provider-1.png" width={120} height={100} alt="Accredited provider" className="lg:hidden" /> */}
            <Image src="/assets/providers/provider-2.png" width={120} height={100} alt="Accredited provider" />
            <Image src="/assets/providers/provider-3.png" width={120} height={100} alt="Accredited provider" />
            {/* <Image src="/assets/providers/provider-4.png" width={120} height={100} alt="Accredited provider" className="lg:hidden" /> */}
            <Image src="/assets/providers/provider-5.png" width={120} height={100} alt="Accredited provider" />
            <Image src="/assets/providers/provider-6.png" width={150} height={100} alt="Accredited provider" />
            <Image src="/assets/providers/provider-7.jpg" width={150} height={100} alt="Accredited provider" />
            <Image src="/assets/providers/provider-8.png" width={130} height={100} alt="Accredited provider" />
        </div>
    </div>
  )
}

export default Providers;

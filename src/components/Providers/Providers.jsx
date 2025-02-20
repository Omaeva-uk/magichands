import Image from "next/image";

const Providers = () => {
  return (
    <div className="my-12  xl:my-24">
        <p className="text-sm mb-12 text-gray-700 text-center">Accredited Service Providers for</p>
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
import { testimonialData } from "@/data/data";
import Image from "next/image";
import "./testimonial.css"

const Testimonial = () => {
  return (
    <div>
       <h2 data-aos="fade-up" className="font-raleway max-w-xl font-semibold text-3xl leading-snug md:text-4xl md:leading-snug">What Our Clients Say – <span className="text-red">Real Stories</span>, Real Results</h2>
       <div className="flex max-md:flex-col gap-7 mt-24 justify-between">
        <div className="xl:flex-[2] flex-[1.5] grid grid-cols-1 md:grid-cols-2 gap-7">
          {
            testimonialData.testimonialCards.map(item => (
              <div data-aos="fade-in" key={item.id} className={`${item.id === 2 ? 'bg-green' : item.id === 3 ? 'bg-green' : 'bg-lighGreen' } xl:p-12 lg:p-6 p-4 flex flex-col justify-center rounded-3xl `}>
                <div className="flex gap-5 items-center">
                  <Image src={item.avatar} width={40} height={40} alt={`Testimonial by ${item.name}`} />
                  <h3>{item.name}</h3>
                </div>
                <p className="mt-5 max-lg:text-sm max-w-xs ">{item.comment}</p>
              </div>
            ))
          }
        </div>
        <div className="flex-1 flex justify-end relative">
          <Image src="/assets/testimonial/testimonial-main-img.jpg" width={400} height={400} alt="Testimonial section image" style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: "30px"}} />
          <div className="testimonial-big-ring absolute -z-10 top-[0] lg:top-[25%] -left-[15%]  "><Image src="/assets/big-ring.png" width={180} height={180} alt="Magichand circles" /></div>
        </div>
       </div>
    </div>
  )
}

export default Testimonial;
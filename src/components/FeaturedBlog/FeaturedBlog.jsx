import { featuredBlog } from "@/app/blog/data";
import { Cta, Testimonial, BookAppointment } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "..";


const FeaturedBlog = () => {
  return (
    <section className="">
        <h2 className="font-semibold text-3xl leading-snug md:text-4xl md:leading-snug">Featured Blog</h2>
        <div className="grid mt-7 grid-cols-1 md:grid-cols-2 auto-rows-[350px] justify-around gap-3 md:gap-7">
            <div className=" overflow-hidden rounded-3xl">
                <Image src={featuredBlog.cardImg} width={500} height={500} alt="featured image" style={{width: "100%", height: "100%", objectFit: "cover"}} />
            </div>
            <div className="max-w-xl flex justify-center items-center">
                <div>
                   <h1 className="text-2xl font-semibold leading-normal">{featuredBlog.title}</h1>
                <p className="mt-3 mb-5 max-lg:line-clamp-3">{featuredBlog.content}</p>
                <Link href={`/blog/${featuredBlog.slug}`}>
                  <button className={`bg-green hover:bg-blue hover:text-white transition-all flex justify-center items-center gap-2 px-5 py-3 font-semibold rounded-xl`}>
                    Read More
                  </button>
                </Link>
                </div>
                
            </div>
        </div>
        
    </section>
  )
}

export default FeaturedBlog;
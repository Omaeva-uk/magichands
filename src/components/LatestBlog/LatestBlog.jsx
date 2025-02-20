import Image from "next/image";
import { PrimaryButton } from "..";
import Link from "next/link";
import { latestBlog } from "@/app/blog/data";

const LatestBlog = () => {
  return (
    <section className="my-12 xl:my-24">
        <h2 className="font-semibold text-3xl leading-snug md:text-4xl md:leading-snug">Latest Blog</h2>
        <div className="grid mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-y-14">
            {
                latestBlog.map(item => (
                    <Link href={`/blog/${item.slug}`} key={item.id} className="">
                        <div className="rounded-3xl overflow-hidden">
                            <Image src={item.cardImg} width={400} height={300} style={{width: "100%", objectFit: "cover"}} alt="Blog card image" />
                        </div>
                        <div className="mt-3">
                            <h3 className="text-2xl line-clamp-2 font-medium leading-normal">{item.title}</h3>
                            <p className="mt-3 mb-5 line-clamp-3">{item.content}</p>
                            <button className={`bg-green hover:bg-blue hover:text-white transition-all flex justify-center items-center gap-2 px-5 py-3 font-semibold rounded-xl`}>
                                Read more
                            </button>
                        </div>
                    </Link>
                ))
            }
            
        </div>
    </section>
  )
}

export default LatestBlog;
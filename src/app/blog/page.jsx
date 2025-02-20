import { Cta, Testimonial, BookAppointment, PrimaryButton, FeaturedBlog, LatestBlog } from "@/components";
import Image from "next/image";
import { featuredBlog,  } from "./data";



export const metadata = {
  title: "Blogs",
  description: "Magichands Blog Page",
};


const page = () => {
  return (
    <div>
        <FeaturedBlog />
        <LatestBlog />
    <Cta />
    </div>
  )
}

export default page;
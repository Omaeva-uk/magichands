import { Cta } from "@/components";
import { latestBlog, featuredBlog } from "../data";
import Image from "next/image";

export async function generateStaticParams() {
    
    const blogPosts = [
      { id: "diagnostic-ultrasound" },
      { id: "shockwave-therapy" },
      { id: "corticosteroid-relief" },
      { id: "hyaluronic-joints" },
      { id: "prolotherapy-2025" },
      { id: "arthrosamid-treatment" },
      { id: "prp-therapy-2025" },
    ];
  
    return blogPosts.map((post) => ({
      id: post.id, // Matches the [id] segment
    }));
  }

export const generateMetadata = async({params}) => {


    const {id} = await params;
    //console.log(typeof(id))
    //console.log(id);
    var blog;
    var article;
    

    if(id === "diagnostic-ultrasound"){
        article = featuredBlog;
    }else{
        blog = latestBlog.find(item => item.slug === id);
        article = blog;
    }

    return {
        title: article.title,
        description: article.content,
    }
    
  };
  



const page = async ({params}) => {

    const {id} = await params;
    console.log(typeof(id))
    //console.log(id);
    var blog;
    var article;
    

    if(id === "diagnostic-ultrasound"){
        article = featuredBlog.articlePage[0];
    }else{
        blog = latestBlog.find(item => item.slug === id);
        article = blog.articlePage[0];
    }

    console.log(article);

    
    //console.log(blog);
    


  return (
    <div className="mt-12 xl:mt-24">
        <div className="bg-lighGreen h-screen max-h-[500px] p-12">
        <h1 className="font-semibold text-3xl text-center leading-snug md:text-4xl max-w-3xl mx-auto md:leading-snug">{article.title}</h1>
        <div className="flex max-w-6xl max-sm:flex-col max-sm:gap-7 mx-auto justify-between mt-14 items-center">
            <div className="flex justify-between gap-5 items-center">
                <Image src={article.avatar} width={30} height={30} alt={article.author}  />
                <p>{article.author}</p>
            </div>
            <div><p>{article.publishedOn}</p></div>
        </div>
        
        
        </div>
        <div className="-mt-[200px] sm:-mt-[350px]">
           <div className="max-h-[350px] max-w-6xl mx-auto rounded-3xl mt-24 overflow-hidden">
                <Image src={article.articleImg} width={900} height={500} alt="Article page image" style={{width: "100%", maxHeight: "350px", objectFit:"cover", objectPosition: "center"}} />
            </div>
            <div className="max-w-5xl mx-auto space-y-16 mt-12 xl:mt-24 ">
            {
                article.content.map(item => (
                    <p key={item.id} className="text-xl leading-normal mb-7" >{item.para}</p>
                ))
            }
            </div> 
        </div>
        <div className="">
          <Cta />  
        </div>
        
    </div>
  )
}

export default page;
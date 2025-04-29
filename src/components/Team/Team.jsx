import Image from "next/image";
import Link from "next/link";
import { teamData } from "@/data/data";
import { teamData1 } from "@/data/data";

const Team = () => {
  return (
    <div id="team" className="my-24 overflow-hidden">
       <h2 className="font-raleway  flex-1 max-w-sm font-semibold text-3xl my-24 leading-snug md:text-4xl md:leading-snug"><span className="text-red">Meet Our </span>Director & Clinical Lead</h2>
        <div className="bg-lighGreen p-3 sm:p-6 lg:p-12 xl:p-16 rounded-3xl">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-7">
            {
              teamData1.map(item => (
                <div key={item.id} className="p-6 bg-white rounded-3xl">
                <div className="max-md:order-1">
                  <Image src={item.img} width={300} height={500} alt="Magichands team" />
                </div>
                <div>
                  <div className="mt-5">
                    <p className="text-xs">{item.title}</p>
                    <h3 className="mt-1 text-2xl font-bold mb-3">{item.name}</h3>
                    <p className="text-xs">{item.graduations}</p>
                  </div>
                  <div className="my-5">
                    <p>{item.profile}</p>
                    {
                      item.publishings && <div className="mt-5">
                        <p>{item.publishings.para}</p>
                        <Link href={item.publishings.link} className="text-blue underline">Read More</Link>
                      </div>
                    }
                    {
                      item.hobbies && <p className="mt-3">{item.hobbies}</p>
                    }
                    <p></p>
                  </div>
                  <div>
              <h4 className="font-semibold text-xl mb-5">{item.heading2}</h4>
              {
                item.expertise.map((item, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <div className="w-[4px] h-[4px] bg-blue rounded-full"></div>
                    <p key={i}>{item}</p>
                  </div>
                  
                ))
              }
            </div>
                </div>
              </div>
              ))
            }
          </div>
              
            
          {/* <div>
              <h3 className="mt-5 text-2xl font-bold mb-3">{teamData.name}</h3>
              <p className="text-xs">{teamData.graduations}</p>
            </div>
            <div className="my-5">
              <p>{teamData.profile}</p>
            </div>
          </div> */}
          {/* <div className="max-md:order-2">
            <div>
              <h3 className="mt-5 text-2xl font-bold mb-3">{teamData.name}</h3>
              <p className="text-xs">{teamData.graduations}</p>
            </div>
            <div className="my-5">
              <p>{teamData.profile}</p>
            </div>
            <div>
              <h4 className="font-semibold text-xl mb-5">{teamData.heading2}</h4>
              {
                teamData.expertise.map((item, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <div className="w-[4px] h-[4px] bg-blue rounded-full"></div>
                    <p key={i}>{item}</p>
                  </div>
                  
                ))
              }
            </div>
            
          </div> */}
          {/* <div className="max-md:order-1">
            <Image src="/assets/team/team-main.jpg" width={300} height={500} alt="Magichands Director and Head" />
          </div> */}
        </div>
    </div>
  )
}

export default Team;
import Image from "next/image";
import Link from "next/link";
import { teamData } from "@/data/data";

const Team = () => {
  return (
    <div id="team" className="my-24">
       <h2 className="font-raleway  flex-1 max-w-sm font-semibold text-3xl my-24 leading-snug md:text-4xl md:leading-snug"><span className="text-red">Meet Our </span>Director & Clinical Lead</h2>
        <div className="bg-lighGreen p-16 grid gap-7 grid-cols-1 md:grid-cols-2 justify-items-center rounded-3xl">
          <div className="max-md:order-2">
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
            
          </div>
          <div className="max-md:order-1">
            <Image src="/assets/team/team-main.jpg" width={300} height={500} alt="Magichands Director and Head" />
          </div>
        </div>
    </div>
  )
}

export default Team;
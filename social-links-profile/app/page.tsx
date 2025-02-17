import Image from "next/image";
import { DATA } from "./data";

interface ProfileData {
  picsource: string;
  name: string;
  city: string;
  country: string;
  description: string;
  socials: string[];
}


export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Profile data={DATA}/>
    </div>
    
  );
}

function Profile({ data } : { data: ProfileData }) {
  return(
    <div className="leading[150%] bg-gray-800 text-white flex flex-col items-center rounded-lg p-6">
      <Image className="rounded-full size-24 mb-6"
      src={data.picsource}
      alt="profile picture"
      width={176}
      height={176}/>
      <h1 className="text-[24px] font-semibold mb-1">{data.name}</h1>
      <p className="text-green font-semibold text-[14px] mb-6">{data.city}, {data.country}</p>
      <p className="text-[14px] text-gray-300 mb-6">&quot;{data.description}&quot;</p>
      <Socials socials={data.socials}/>
    </div>
  );
}

function Socials({socials} : {socials: string[]}) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {socials.map((name) => (
        <Social key={name} socialname={name} />
      )
    )}
    </div>
  );
}

function Social({socialname}: {socialname: string}) {
  return(
    <div className="hover:bg-green hover:text-gray-800 flex items-center justify-center rounded-lg text-[14px] bg-gray-700 p-3 font-semibold">
      <p>{socialname}</p>
    </div>
   
  )
}

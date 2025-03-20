import Image from "next/image";
import { CLIFFORD, WALTERS, HARMON, ABRAMS, WHITTLE, COLOR_SCHEMES } from "./testimonials";
import { text } from "stream/consumers";

export interface Graduate {
  name: string;
  title: string;
  image: string;
  short: string;
  long: string;
  colorSchemeKey: keyof typeof COLOR_SCHEMES;
}

export default function Home() {
  return (
    <div className="text-[13px] font-barlow bg-gray-200  min-h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 gap-8 p-8 pt-16 lg:py-24
                      lg:grid-cols-4 lg:grid-rows-2 lg:h-1/2 lg:w-3/4">

      <div className="bg-purple-500 rounded-lg relative lg:col-span-2 lg:row-span-1">
       
        <Image 
          className="xl:h-1/3 lg:1/4 w-auto absolute top-0 end-10 z-0 hidden lg:block"
          src="/bg-pattern-quotation.svg" alt="quotation marks"
          width={100}
          height={100} />


       <div className="relative p-8 z-10">
        <Graduate person={CLIFFORD}/></div>
       </div>     

      <div className="bg-grey-500 rounded-lg text-white p-8
                      lg:col-span-1 lg:col-row-span-1">
        <Graduate person={WALTERS}/>
      </div>
      <div className="bg-white rounded-lg text-grey-500 p-8
                      lg:col-span-1 lg:row-start-2 lg:row-span-1">
        <Graduate person={HARMON}/>
      </div>
      <div className="bg-darkblue rounded-lg text-white p-8
                      lg:col-span-2 lg:row-start-2 lg:col-start-2">
        <Graduate person={ABRAMS}/>
      </div>
      <div className="bg-white rounded-lg text-grey-500 p-8
                      lg:row-span-2">
        <Graduate person={WHITTLE}/>
      </div>
    </div>
    </div>
    
  );
}

export function Graduate({ person }: { person: Graduate }) {
  
  const colorScheme = COLOR_SCHEMES[person.colorSchemeKey];

  return(
    <>

      <div className="flex items-center mb-4">
        <Image 
            className={`rounded-full h-8 w-8 mr-4 border-2 ${colorScheme.borderColor}`}           src={person.image} alt={person.name} width={100} height={100} 
        />
        <div className="flex flex-col justify-center">
          <p className={`font-medium ${colorScheme.textColor}`}>{person.name}</p>
          <p className={`${colorScheme.textColorSecondary}`}>
            {person.title}</p>
        </div>
      
      </div>
      
      
      <p className={`font-medium text-xl mb-4 ${colorScheme.textColor}`}>{person.short}</p>
      <p className={`${colorScheme.textColorSecondary}`}>&quot;{person.long}&quot;</p>
    </>
  )
}


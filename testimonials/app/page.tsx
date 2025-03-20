import Image from "next/image";

const COLOR_SCHEMES = {
  purple:{
    bgColor: "bg-purple-500",
    textColor: "text-purple-50",
    textColorSecondary: "text-purple-300",
    borderColor: "border-purple-300",
  },
  grey:{
    bgColor: "bg-grey-500",
    textColor: "text-grey-100",
    textColorSecondary: "text-grey-200",
    borderColor: "border-grey-300",
  },
  darkblue:{
    bgColor: "bg-darkblue",
    textColor: "text-grey-200",
    textColorSecondary: "text-grey-200",
    borderColor: "border-purple-500",
  },
  white:{
    bgColor: "bg-white",
    textColor: "text-grey-500",
    textColorSecondary: "text-grey-400",
    borderColor: "border-white",
  },
}

const CLIFFORD: Graduate ={
  name: "Daniel Clifford",
  title: "Verified Graduate",
  image: "/image-daniel.jpg",
  short: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.",
  long: "I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup.",
  colorSchemeKey: "purple"
}

const WALTERS: Graduate = {
  name: "Jonathan Walters",
  title: "Verified Graduate",
  image: "/image-jonathan.jpg",
  short: "The team was very supportive and kept me motivated",
  long: "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself." ,
  colorSchemeKey: "grey"
}

const HARMON: Graduate = {
  name: "Jeanette Harmon",
  title: "Verified Graduate",
  image: "/image-jeanette.jpg",
  short: "An overall wonderful and rewarding experience",
  long: "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.",
  colorSchemeKey: "white"
}

const ABRAMS: Graduate = {
  name: "Patrick Abrams",
  title: "Verified Graduate",
  image: "/image-patrick.jpg",
  short: "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
  long: "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest.",
  colorSchemeKey: "darkblue"
}

const WHITTLE: Graduate = {
  name: "Kira Whittle",
  title: "Verified Graduate",
  image: "/image-kira.jpg",
  short: "Such a life-changing experience. Highly recommended!",
  long: "Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have.",
  colorSchemeKey: "white"
}

interface Graduate {
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

function Graduate({ person }: { person: Graduate }) {
  
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


'use client';
import Image from "next/image";
import timeframeData from "../public/data.json";
import React from "react";

// Define the structure of the data being imported from the JSON file.

interface timeframeData {
  title: string;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
  };
}


// Mapping of category titles to their respective background color classes, since Tailwind CSS does not support dynamic class names.

const categoryStyles = {
  Work: 'bg-work',
  Play: 'bg-play',
  Study: 'bg-study',
  Exercise: 'bg-exercise',
  Social: 'bg-social',
  'Self Care': 'bg-self-care'
} as const;

export default function Home() {

   const [timeframe, setTimeframe] = React.useState<'daily' | 'weekly' | 'monthly'>('daily');

  return (
    <div className="min-h-screen min-w-screen bg-navy-950 flex items-center justify-center max-w-7xl mx-auto ">
      <div className="grid grid-cols-1 gap-4 
                      md:grid-cols-[repeat(3,minmax(180px,1fr))] md:gap-6
                      xl:grid-cols-[minmax(240px,1fr)_repeat(3,minmax(240px,1fr))] xl:w-[77.5%]
    ">
      <OverviewCard timeframe={timeframe} setTimeframe={setTimeframe}/>

      {
      timeframeData.map(cato => <CategoryCard key={cato.title} cat={cato} timeframe={timeframe}/>)
      }

     
    </div>
    </div>
    
  );
}

// OverviewCard component displaying user information and report options.

function OverviewCard({timeframe, setTimeframe}:{timeframe: 'daily' | 'weekly' | 'monthly', setTimeframe: (value: 'daily' | 'weekly' | 'monthly') => void}){
  const timeframes = ['daily', 'weekly', 'monthly'];

  return(
    <aside className="bg-navy-900 rounded-lg flex flex-col 
                      md:col-span-full
                      xl:col-span-1 xl:row-span-2 xl:aspect-[255/520]">

      <div className="bg-purple-600 flex rounded-lg p-6 items-center tracking-wide 
                      xl:flex-col xl:items-start xl:gap-8 xl:flex-3">
        <div>
          <Image 
          src="/image-jeremy.png"
          alt="Jeremy Robson"
          width={64}
          height={64}
          className="rounded-full border-3 border-white w-18 h-18"
          />
          </div>
        
        <div className="flex flex-col justify-center ml-4 
                        md:items-start
                        xl:ml-0">
          <p className="text-navy-200 text-sm">Report for</p>
          <p className="text-white text-2xl rubik-400
                        xl:text-5xl">Jeremy Robson</p>
        </div>
      </div>

      <div className="flex justify-between text-purple-500 p-6 
                      md:justify-center md:gap-10 
                      xl:flex-col xl:justify-start xl:flex-1 xl:gap-4">
        {timeframes.map((tf) => (
          <p
            key={tf}
            className={tf === timeframe ? 'text-white cursor-pointer' : 'cursor-pointer'}
            onClick={() => setTimeframe(tf as 'daily' | 'weekly' | 'monthly')}
          >
            {tf.charAt(0).toUpperCase() + tf.slice(1)}
          </p>
        ))}
      </div>
    </aside>
  )
}

// Function to format category names to match the icon file naming convention.
function formatCategoryName(category: string): string {
  return category
    .split(' ')
    .map(word => word.charAt(0).toLowerCase() + word.slice(1))
    .join('-');
}

// CategoryCard component displaying individual category data.
function CategoryCard({cat, timeframe}:{cat: timeframeData; timeframe: 'daily' | 'weekly' | 'monthly'}){

  return(
    <div className="rounded-lg overflow-hidden relative flex flex-col min-h-[160px]
                    md:aspect-[188/213]
                    xl:aspect-[255/244]"
      >
      {/* Background section with respective color */}

      <div className={`${categoryStyles[cat.title as keyof typeof categoryStyles]} h-[32%] relative z-0 -mb-2 xl:h-[19%]`}>

        <Image 
        src={`icon-${formatCategoryName(cat.title)}.svg`}
        alt={`${cat.title} icon`}
        width={100}
        height={100}
        className="absolute -top-4 right-4 size-20"
      />
      </div>

    

      <div className="bg-navy-900 inset-x-0 bottom-0 rounded-md text-navy-200 p-4 flex flex-col justify-between z-10 flex-1 xl:p-7 xl:px-8 xl:justify-start xl:gap-3">
        <div className="flex justify-between items-center">
          <p className="text-white font-lg">{cat.title}</p>
          <Image
            src="icon-ellipsis.svg"
            alt="More options"
            width={24}
            height={24}
          />
        </div>
        <div className="flex justify-between items-center md:flex-col md:items-start md:gap-2 xl:gap-4">
          <p className="text-3xl font-light text-white xl:text-6xl">{`${cat.timeframes[timeframe].current} hrs`}</p>
          <p className="text-sm text-navy-500">{`Last Week - ${cat.timeframes[timeframe].previous}hrs`}</p>
        </div>
      </div>
    </div>
  )
}
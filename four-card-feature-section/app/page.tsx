import Image from "next/image";

export default function Home() {
  return (
    <div className="text-grey-500 min-h-screen text-[15px] p-8 xl:p-20 flex flex-col items-center">
      <Header />
      <Cards />
      
    </div>
  );
}

function Header(){
  return(
    <div role="banner" className="flex flex-col text-center mb-10 lg:w-3/10">
      <h2 className="text-2xl lg:text-3xl font-extralight">Reliable, efficient delivery</h2>
      <h1 className="text-grey-500 font-semibold lg:text-3xl text-2xl mb-3">Powered by Technology</h1>
      <p className="font-extralight md:text-l">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
    </div>
  )
}

function Cards(){
  return(
    <div className="flex justify-center ">
    <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:grid-rows-4 md:align-center lg:w-3/4" role="main">
      <div className="md:row-start-2 md:row-span-2 border-t-4 border-cyan p-6 rounded-lg shadow-lg flex flex-col gap-2">
        <Card title="Supervisor" description="Monitors activity to identify project roadblocks" image="/icon-supervisor.svg"/>
        </div>
        <div className="md:col-start-2 md:row-span-2 border-t-4 border-red p-6 rounded-lg shadow-lg flex flex-col gap-2">
          <Card title="Team Builder" description="Scans our talent network to create the optimal team for your project" image="/icon-team-builder.svg"/>
        </div>
        <div className="md:col-start-2 md:row-span-2 border-t-4 border-orange p-6 rounded-lg shadow-lg flex flex-col gap-2">
          <Card title="Karma" description="Regularly evaluates our talent to ensure quality" image="/icon-karma.svg"/>
        </div>
        <div className="md:col-start-3 md:row-start-2 md:row-span-2 border-t-4 border-blue p-6 rounded-lg shadow-lg flex flex-col gap-2">
          <Card title="Calculator" description="Uses data from past projects to provide better delivery estimates" image="/icon-calculator.svg"/>
        </div>
    </div>
    </div>
  )
}

function Card({
  title,
  description,
  image,

}: {
  title: string;
  description: string;
  image: string;
 
}){


  return(
    <>
      <h2 className="font-semibold text-xl text-grey-500">{title}</h2>
      <p className="font-extralight text-grey-500">{description}</p>
      <Image 
        className="self-end m-4 mt-6"
        src={image}
        alt={title}
        width={60}
        height={60}
      />
    </>
  )
}

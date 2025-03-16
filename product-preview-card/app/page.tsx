import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-cream py-6 px-4 min-h-screen flex items-center justify-center"
    role="main">
      <Card />
    </div>
  )
}

function Card() {
  return(
    <div className="bg-white rounded-lg font-montserrat text-grey md:flex md:w-1/3 ">
      <Image 
        className="rounded-t-lg md:hidden"
        src="/image-product-mobile.jpg"
        alt="Product"
        width={686}
        height={480}
      />
      <Image 
        className="rounded-l-lg md:block hidden w-1/2"
        src="/image-product-desktop.jpg"
        alt="Product"
        width={600}
        height={900}
      />
      <CardDetails />
      
    </div>
  )
}

function CardDetails() {
  return(
    <div className="p-7 md:px-8">
      <h2 className="uppercase text-xs tracking-[.4em]">
        perfume
        </h2>
      <h1 className="text-3xl font-bold font-fraunces text-black my-3 md:mr-5 md:mb-5">
        Gabrielle Essence Eau De Parfum
        </h1>
      <p className="text-sm/5.5">
        A floral, solar and voluptuous interpretation composed
        by Olivier Polge, Perfume-Creator for the House of CHANEL.
         </p>
      <div className="flex mt-6 mb-5">
        <p className="text-green-500 font-bold text-3xl font-fraunces">
          $149.99
          </p>
        <p className="line-through align-text-center text-xs flex items-center ml-6">
          $169.99
          </p>
      </div>
      <button className="hover:bg-green-700 bg-green-500 text-white w-full rounded-lg flex items-center justify-center py-3.5 font-semibold text-sm">
        <Image
        className="inline h-4 w-4 mr-3"
        src="/icon-cart.svg"
        alt="Cart Icon"
        width={24}
        height={24}
        />
        <p>
          Add to Cart
          </p>
      </button>
    </div>
  )
}

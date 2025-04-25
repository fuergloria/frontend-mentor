"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Success() {

  const searchParams = useSearchParams();
  const email = searchParams.get("email");

    return(

      <Suspense fallback={<div className="flex justify-center items-center min-h-screen bg-blue-800">Loading...</div>}>

      <div className="flex justify-center items-center min-h-screen bg-blue-800">
        <div className="p-5 mb-8 flex flex-col gap-4 bg-white min-h-screen md:min-h-0 md:h-100 md:w-100 rounded-lg md:p-10">

            <div className="mt-24 md:mt-0">
              <Image
                className="rounded-lg w-12"
                src="/icon-success.svg"
                alt="Illustration-success"
                width={50}
                height={50}
              />
              <h1 className="font-bold text-4xl text-blue-800 my-5">Thanks for subscribing!</h1>
              <p>A confirmation email has been sent to <b>{email}</b>. Please open it and click the button inside to confirm your subscription</p>
            </div>  
                      <Link className="bg-blue-800 text-white rounded-lg p-4 font-semibold w-full 
                      hover:bg-linear-to-r hover:from-watermelon hover:to-red"
                      href="/">Dismiss message</Link>

         </div>
    </div>
        </Suspense>
  
        
    )
}
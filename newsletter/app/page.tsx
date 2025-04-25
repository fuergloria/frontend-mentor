"use client";

import Image from "next/image";
import Link from "next/link";
import {useState, FormEvent} from 'react';
import {useRouter} from 'next/navigation';


export default function Home() {

const [email, setEmail] = useState("");
const [error, setError] = useState("");
const router = useRouter();

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setError("");

  if(!email.trim()){
    setError("Valid email required");
    return;
  }

  if(!validateEmail(email)){
    setError("Valid email required");
    return;
  }

  router.push(`/success?email=${encodeURIComponent(email)}`);

};

  return (
    <div role="main" className="flex justify-center items-center min-h-screen bg-blue-800">

    <div className="flex flex-col md:flex-row lg:w-3/4 md:h-160 bg-white rounded-lg xl:rounded-3xl md:p-6">

      <Image
        className="rounded-lg w-full md:hidden"
        src="/illustration-sign-up-mobile.svg" 
        alt="Illustration-sign-up"      
        width={500}
        height={340}
      />

      <Image
        className="hidden md:block rounded-lg w-1/2 order-2"
        src="/illustration-sign-up-desktop.svg"
        alt="Illustration-sign-up"
        width={500}
        height={340}
      />

      <div className="p-5 w-full md:w-1/2 md:order-1 flex flex-col justify-center md:p-10">

        <h1 className="font-bold text-4xl text-blue-800 mb-4 mt-2 md:text-5xl">Stay updated!</h1>
        
        <p className="mb-4">
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <ul className="icon-list mb-4">
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex justify-between items-center">
              <label className="text-blue-800 font-semibold -mb-1 inline-block" htmlFor="email">Email address</label>
              {error && (<p className="text-red">{error}</p>)}
          </div>

          <input className={`p-4 border rounded-lg border-grey text-grey
                             ${error && ("border-red text-red bg-red/18")}`} 
          id="email" type="email" placeholder="email@company.com" name="email"
                  onChange={(e) => setEmail(e.target.value)}/>

      

          <button className="bg-blue-800 text-white rounded-lg p-4 font-semibold
                              hover:bg-linear-to-r hover:from-watermelon hover:to-red"
           type="submit">Subscribe to monthly newsletter</button>
        </form>
      </div>

      <Link href="/success" className="hidden bg-blue-800 text-white rounded-lg p-4 font-semibold w-full mt-4">Subscribe to monthly newsletter</Link>

    </div>
 
    </div>

    
  );
}


'use client';
import Image from "next/image";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';

export default function Home() {
  return (
    <div className="text-[13px] text-dark-grayish-blue min-h-screen font-manrope bg-light-grayish-blue p-6 flex justify-center items-center">

      <div className="bg-white rounded-lg  my-8 flex flex-col sm:flex-row max-w-xl sm:max-w-3xl shadow-md">

        {/* Image container */}
        <div className="relative sm:w-2/5 h-56 sm:h-auto rounded-t-lg">
          <Image
            src="/drawers.jpg"
            alt="Drawers"
            fill
            className="object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-r-none"
            style={{ objectPosition: "left center" }}
          />
        </div>
        
        {/* Content container */}
        <div className="flex flex-col sm:w-3/5 justify-between">
          <div className="p-8">
            <h1 className="text-xl font-bold text-dark-grayish-blue mb-3">
              Shift the overall look and feel by adding these wonderful touches to furniture in your home
            </h1>
            <p className="text-desaturated-dark-blue">
              Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.
            </p>
          </div>

          <ProfileBar />
        </div>
      </div>

    </div> 
  );
}

function ProfileBar() {
  const [share, setShare] = useState(false);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 639px)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 640px)' });

  const handleShareClick = () => {
    setShare(!share);
  }

  return (
    <div>
      {/* Default profile bar */}
      {(!share || isLargeScreen) && (
        <div className="relative px-8 pb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image 
                src="/avatar-michelle.jpg"
                alt="Michelle Appleton"
                width={40}
                height={40}
                className="rounded-full mr-4"
              />
              <div>
                <h2 className="font-bold text-dark-grayish-blue">Michelle Appleton</h2>
                <p className="text-desaturated-dark-blue">28 Jun 2020</p>
              </div>
            </div>
        
            <div 
              className={`${share && isLargeScreen ? "bg-desaturated-dark-blue" : "bg-light-grayish-blue"} rounded-full p-2 cursor-pointer relative z-10`} 
              onClick={handleShareClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                <path 
                  fill={share && isLargeScreen ? "white" : "#6E8098"} 
                  d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                />
              </svg>

              {/* Share tooltip for desktop */}
              {share && isLargeScreen && (
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-dark-grayish-blue rounded-lg px-6 py-3 z-50 w-60 shadow-md whitespace-nowrap">
                  <div className="flex items-center justify-between">
                    <p className="uppercase text-grayish-blue tracking-widest text-sm mr-3">Share</p>
                    <div className="flex">
                      <a href="#" className="mx-2">
                        <Image
                          src="/icon-facebook.svg"
                          alt="Facebook"
                          width={20}
                          height={20}
                        />
                      </a>
                      <a href="#" className="mx-2">
                        <Image
                          src="/icon-twitter.svg"
                          alt="Twitter"
                          width={20}
                          height={20}
                        />
                      </a>
                      <a href="#" className="mx-2">
                        <Image
                          src="/icon-pinterest.svg"
                          alt="Pinterest"
                          width={20}
                          height={20}
                        />
                      </a>
                    </div>
                  </div>

                  {/* Triangle pointer - Fixed positioning */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-dark-grayish-blue"></div>
                </div>
              )}
            </div>
          </div>	
        </div>
      )}
      
      {/* Mobile share bar */}
      {share && isSmallScreen && (
        <div className="flex items-center justify-between bg-dark-grayish-blue px-8 py-4 rounded-b-lg">
          <div className="flex items-center">
            <p className="uppercase text-grayish-blue tracking-widest text-sm mr-3">Share</p>
            <div className="flex">
              <a href="#" className="mx-2">
                <Image
                  src="/icon-facebook.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
              </a>
              <a href="#" className="mx-2">
                <Image
                  src="/icon-twitter.svg"
                  alt="Twitter"
                  width={20}
                  height={20}
                />
              </a>
              <a href="#" className="mx-2">
                <Image
                  src="/icon-pinterest.svg"
                  alt="Pinterest"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
          
          <div 
            className="bg-desaturated-dark-blue rounded-full p-2 cursor-pointer" 
            onClick={handleShareClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
              <path 
                fill="white" 
                d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
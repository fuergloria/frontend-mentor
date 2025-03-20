// Purpose: Contains the data for the testimonials section of the website.
import { Graduate } from "./page"; // Import the Graduate interface

export const COLOR_SCHEMES = {
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

export const CLIFFORD: Graduate ={
    name: "Daniel Clifford",
    title: "Verified Graduate",
    image: "/image-daniel.jpg",
    short: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.",
    long: "I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup.",
    colorSchemeKey: "purple"
}

export const WALTERS: Graduate = {
    name: "Jonathan Walters",
    title: "Verified Graduate",
    image: "/image-jonathan.jpg",
    short: "The team was very supportive and kept me motivated",
    long: "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself." ,
    colorSchemeKey: "grey"
}

export const HARMON: Graduate = {
    name: "Jeanette Harmon",
    title: "Verified Graduate",
    image: "/image-jeanette.jpg",
    short: "An overall wonderful and rewarding experience",
    long: "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.",
    colorSchemeKey: "white"
}

export const ABRAMS: Graduate = {
    name: "Patrick Abrams",
    title: "Verified Graduate",
    image: "/image-patrick.jpg",
    short: "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    long: "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest.",
    colorSchemeKey: "darkblue"
}

export const WHITTLE: Graduate = {
    name: "Kira Whittle",
    title: "Verified Graduate",
    image: "/image-kira.jpg",
    short: "Such a life-changing experience. Highly recommended!",
    long: "Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have.",
    colorSchemeKey: "white"
}
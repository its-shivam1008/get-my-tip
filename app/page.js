"use client"
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import { Tranquiluxe, Velustro } from "uvcanvas"

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div>
        <div className="h-screen bg-green-400" id="home">
          {/* <Velustro /> */}
        </div>
        <div className="md:bg-gradient-to-r from-transparent min-[0px]:max-md:bg-white min-[0px]:max-md:bg-opacity-60 md:grid md:grid-cols-2 md:gap-3  absolute top-0 md:to-white h-screen">
        <div className="col-start-2 flex flex-col space-y-4 items-center justify-center min-[0px]:max-md:pt-20 text-center p-5">
          <div className="space-y-5">
            <div className="text-5xl">Get your <div className="text-blue-600">Tip !</div> Now</div>
            <div><div  className="text-blue-600">"Get Me a Tip" </div>is a platform where creators can share their work and connect with supporters. Fans can contribute small amounts of money to help creators continue doing what they love, whether it's writing, art, or music. It's like a virtual tip jar for online content! 😊</div>
          </div>
          <div className="relative inline-flex  group">
            <div
                className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
            </div>
            <button href="#" title="Hit me!"
                className="relative inline-flex items-center justify-center px-5 py-2 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button">Give a tip
            </button>
          </div>
        </div>
      </div>
      </div>
      <div id="features" className="md:h-screen h-fit ">
        <Features/>
      </div>
      <div id="lol" className="md:h-screen h-fit relative">
        <Testimonials/>
        <Link href="#home" title="Back to top" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-[100px] px-3 py-2 text-center text-2xl absolute bottom-3 right-3">▲</Link>
      </div>
      
</div>
  );
}

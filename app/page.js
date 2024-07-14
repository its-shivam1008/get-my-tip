"use client"

import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import { Tranquiluxe, Velustro } from "uvcanvas"
import { useState } from "react";
import { fetchUserByUsername } from "@/actions/donePaymentFetch";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';

export default function Home() {
  const [isSearch, setIsSearch] = useState(false);
  const [searchBox, setSearchBox] = useState({});
  const handleChange = (e) => {
    setSearchBox({...searchBox,[e.target.name]: e.target.value} );
    // console.log(searchBox)
  }
  const router = useRouter();
  
  const handleClick = () => {
    if (isSearch) {
      // Run function abc when "search" is clicked
      alert("hello");
    } else {
      // Toggle to search bar
      setIsSearch(true);
    }
  };

  const handleClickSearch = ()=>{
    // alert(searchBox.search);
      findingUserAndRedirecting(searchBox.search);
  }

  const findingUserAndRedirecting = async (username) => {
    const u = await fetchUserByUsername(username);
    if(u.error=="No user found with this email address"){
      toast.error(`${username} not exist`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      toast.info('Check the username and try again', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      }else{
        toast('Please wait, redirecting...', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      router.push(`/profile/tip/${u.username}`);
    }
  };

  return (
    <>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    <div className="overflow-x-hidden">
      <div>
        <div className="h-screen bg-green-400" id="home">
          <Velustro />
        </div>
        <div className="md:bg-gradient-to-r from-transparent min-[0px]:max-md:bg-white min-[0px]:max-md:bg-opacity-60 md:grid md:grid-cols-2 md:gap-3  absolute top-0 md:to-white h-screen">
          <div className="col-start-2 flex flex-col space-y-4 items-center justify-center min-[0px]:max-md:pt-20 text-center p-5">
            <div className="space-y-5">
              <div className="text-5xl">Get your <div className="text-blue-600">Tip !</div> Now</div>
              <div><div className="text-blue-600">&quot;Get Me a Tip&quot;</div>is a platform where creators can share their work and connect with supporters. Fans can contribute small amounts of money to help creators continue doing what they love, whether it's writing, art, or music. It's like a virtual tip jar for online content! 😊</div>
            </div>
            <div >
              <div className="relative inline-flex group">
                <div
                  className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
                ></div>
                <div>
                  {!isSearch ? (
                    <button
                      onClick={handleClick}
                      className="relative inline-flex items-center justify-center px-5 py-2 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                      role="button" title="Hit me!"
                    >
                      Give a tip
                    </button>
                  ) : (
                    <div className="relative inline-flex items-center justify-center px-5 py-2 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                      <input
                        type="text"
                        placeholder="Username of creator"
                        value={searchBox.search}
                        onChange={handleChange}
                        name="search"
                        className="bg-transparent border-none focus:ring-0 focus:outline-none"
                      />
                      <button
                        onClick={handleClickSearch}
                        className="ml-2 text-white" title="Search"
                      >
                        Search
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="features" className="h-fit ">
        <Features />
      </div>
      <div id="lol" className="h-fit relative">
        <Testimonials />
        <Link href="#home" title="Back to top" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-[100px] px-3 py-2 text-center text-2xl absolute bottom-3 right-3">▲</Link>
      </div>
    </div>
    </>
  );
}

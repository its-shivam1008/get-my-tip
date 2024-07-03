"use client";
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Tranquiluxe } from "uvcanvas"
import Image from 'next/image';
const page = () => {
    const session = {
        user:{
            name:"Shivam",
            image:"laosn",
            email:"hbdh@gami.com"
        }
    }
  return (
    <div className='md:h-screen w-full min-[0px]:max-md:h-fit py-10'>
      <div className='md:absolute w-full'>
        <div className='h-[15vh] w-full mt-14'>
          <Tranquiluxe />
        </div>
        <div className='md:grid md:grid-cols-2 md:gap-4 min-[0px]:max-md:flex-col'>
          <div className='p-4 text-center mx-auto space-y-8'>
            <div className='space-y-3'>
              <div className='text-2xl font-bold'>
                Support Me !
              </div>
              <div className='rounded-[12px] space-y-1 p-5 bg-blue-300 bg-opacity-40 backdrop-blur-xl shadow-2xl'>
                <form action="" className='space-y-8'>
                    <div>
                        <label htmlFor="name">Name : </label>
                        <input placeholder='Sumit' className='h-10 w-[250px] px-2 focus:outline-blue-400 rounded-[12px]' type="text" id='name' name='name' required/>
                    </div>
                    <div>
                        <label htmlFor="message">Message : </label>
                        <input placeholder='say something...' className='h-10 w-[250px] px-2 focus:outline-blue-400 rounded-[12px]' type="text" id='message' name='message' required/><br />
                    </div>
                    <div>
                        <label htmlFor="amount">Amount : </label>
                        <input placeholder='₹100' className='h-10 w-[250px] px-2 focus:outline-blue-400 rounded-[12px]' type="text" id='amount' name='amount' required/><br />
                    </div>
                    <div className='flex-wrap flex space-x-2'>
                        <div className='cursor-pointer w-fit rounded-[12px] p-3 bg-slate-300 bg-opacity-40 backdrop-blur-2xl shadow-2xl'>₹10</div>
                        <div className='cursor-pointer w-fit rounded-[12px] p-3 bg-slate-300 bg-opacity-40 backdrop-blur-2xl shadow-2xl'>₹20</div>
                        <div className='cursor-pointer w-fit rounded-[12px] p-3 bg-slate-300 bg-opacity-40 backdrop-blur-2xl shadow-2xl'>₹50</div>
                        <div className='cursor-pointer w-fit rounded-[12px] p-3 bg-slate-300 bg-opacity-40 backdrop-blur-2xl shadow-2xl'>₹100</div>
                        <div className='cursor-pointer w-fit rounded-[12px] p-3 bg-slate-300 bg-opacity-40 backdrop-blur-2xl shadow-2xl'>₹500</div>
                        <div className='cursor-pointer w-fit rounded-[12px] p-3 bg-slate-300 bg-opacity-40 backdrop-blur-2xl shadow-2xl'>₹1000</div>
                    </div>
                    <button className='rounded-[12px] bg-blue-500 hover:bg-white border-2 border-blue-500 text-white hover:text-blue-500 font-bold transition-colors duration-700 p-3 w-full'>Tip now!</button>
                </form>
              </div>
            </div>
          </div>
          <div className='p-5 flex flex-col'>
          <div className="rounded-full flex justify-center">
              {/* <Image className='rounded-full' width={150} height={150} src={session.user.image}/> */}
            </div>
            <div className='mx-auto'>
              <div className='mt-5 p-5 flex justify-center my-auto rounded-[12px] space-y-1 bg-slate-300 bg-opacity-40 backdrop-blur-xl shadow-2xl'>
                <div>
                  <div className='text-center'>User info</div>
                  <hr />
                  <div>Name: {session.user.name}</div>
                  <div>email: {session.user.email}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default page

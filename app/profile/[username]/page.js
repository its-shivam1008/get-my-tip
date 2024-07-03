"use client";
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Tranquiluxe } from "uvcanvas"
import Image from 'next/image';
const page = () => {
    const { data: session} = useSession()
    const router = useRouter();
    useEffect(() => {
      if(!session){
        router.push('/login');
      }
    }, [])
  if(session){
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
                Top supporters
              </div>
              <div className='rounded-[12px] space-y-1 p-3 bg-slate-300 bg-opacity-40 backdrop-blur-xl shadow-2xl'>
                <div className='flex space-x-1'>
                  <Image src="profile.svg" alt="Profileimg" width={20} height={20}/> <span>aman donated</span><span className='folt-bold'> ₹20 </span><span>with a message: </span><span>"Mesage is that you're cute."</span>
                </div>
                <div className='flex space-x-1'>
                  <Image src="profile.svg" alt="Profileimg" width={20} height={20}/> <span>aman2 donated</span><span className='folt-bold'> ₹20 </span><span>with a message: </span><span>"Mesage is that you're cute."</span>
                </div>
                <div className='flex space-x-1'>
                  <Image src="profile.svg" alt="Profileimg" width={20} height={20}/> <span>aman3 donated</span><span className='folt-bold'> ₹20 </span><span>with a message: </span><span>"Mesage is that you're cute."</span>
                </div>
                <div className='flex space-x-1'>
                  <Image src="profile.svg" alt="Profileimg" width={20} height={20}/> <span>aman4 donated</span><span className='folt-bold'> ₹20 </span><span>with a message: </span><span>"Mesage is that you're cute."</span>
                </div>
              </div>
            </div>
            <div>
              <div className='font-bold flex space-x-1 py-5 px-3 w-fit mx-auto text-center bg-blue-300 bg-opacity-50 backdrop-blur-xl shadow-xl rounded-[12px]'>
                  <div className='text-3xl text-black'>Earnings :</div>
                  <div className='text-3xl text-green-500'>₹ 433,454</div>
              </div>
            </div>
          </div>
          <div className='p-5 flex flex-col'>
          <div className="rounded-full flex justify-center">
              <Image className='rounded-full' width={150} height={150} src={session.user.image}/>
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
}
export default page

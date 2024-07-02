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
    <div className='h-screen w-full '>
      <div className='absolute w-full'>
        <div className='h-[15vh] w-full mt-14'>
          {/* <Tranquiluxe /> */}
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div>Payments made By</div>
          <div className='p-5 flex flex-col'>
          <div className="rounded-full justify-end flex">
              <Image className='rounded-full' width={150} height={150} src={session.user.image}/>
            </div>
            <div className='flex flex-grow mx-auto my-auto justify-center items-center'>
              <div className='p-4 flex justify-center my-auto rounded-[12px] w-fit bg-white bg-opacity-40 backdrop-blur-lg'>
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

"use client";
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Tranquiluxe } from "uvcanvas"
import Image from 'next/image';
import { useState } from 'react';
import { fetchDonePayment, fetchUser } from '@/actions/donePaymentFetch';
const Page = () => {
    const { data: session} = useSession()
    const [userSession, setUserSession] = useState({})
    const router = useRouter();
    let [userInfo, setUserInfo] = useState([])
    let [sum, setSum] = useState(0)
    const getData =async (params) =>{
      let user = await fetchDonePayment(session.user.email);
      let userDetail = await fetchUser(session.user.email);
      setUserSession(userDetail);
      setUserInfo(user);
      console.log(userInfo)
      let num = 0;
      for(let ele of user){
        num = num + ele.amount
      }
      setSum(num);
    }
    useEffect(() => {
      if(!session){
        router.push('/login');
      }else{
        getData();
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
              <div className='w-auto rounded-[12px] overflow-x-hidden overflow-y-auto h-60 space-y-2 p-4 bg-slate-300 bg-opacity-40 backdrop-blur-xl shadow-2xl'>
              { userInfo.length>0 &&
                userInfo.map(function(donator,i) {
                  return (<div key={i} className='flex space-x-1'>
                  <span>{donator.from_name} donated</span><span className='folt-bold'> ₹{(donator.amount)/100} </span><span>with a message: </span><span>"{donator.message}"</span>
                </div>)
                })}
               {
                userInfo.length == 0 && <div className="flex justify-center items-center font-bold text-2xl">No tips are found</div>
               }
              </div>
            </div>
            <div>
              <div className='font-bold flex space-x-1 py-5 px-3 w-fit mx-auto text-center bg-blue-300 bg-opacity-50 backdrop-blur-xl shadow-xl rounded-[12px]'>
                  <div className='text-3xl text-black'>Earnings :</div>
                  <div className='text-3xl text-green-500'>₹ {sum/100}</div>
              </div>
            </div>
          </div>
          <div className='p-5 flex flex-col'>
          <div className="rounded-full mx-auto w-auto border-blue-500 border-2 size-40  overflow-hidden">
              <img className='rounded-full object-cover size-40' width={128} height={128} src={userSession.profilepic}/>
            </div>
            <div className='mx-auto'>
              <div className='mt-5 p-5 flex justify-center my-auto rounded-[12px] space-y-1 bg-slate-300 bg-opacity-40 backdrop-blur-xl shadow-2xl'>
                <div>
                  <div className='text-center'>User info</div>
                  <hr />
                  <div>Name : {userSession.name}</div>
                  <div>Email : {userSession.email}</div>
                  <div>Username : {userSession.username}</div>
                  <div>Razorpay Id : {userSession.razorpayid}</div>
                  <div>Razorpay Secret : {userSession.razorpaysecret}</div>
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
export default Page

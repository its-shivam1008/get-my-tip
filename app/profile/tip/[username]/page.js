"use client";
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Tranquiluxe } from "uvcanvas"
import { useState } from 'react';
import Image from 'next/image';
const page = () => {
    const session = {
        user:{
            name:"Shivam",
            image:"laosn",
            email:"hbdh@gami.com"
        }
    }
    const [paymentForm, setPaymentForm] = useState({}) ;
    const handleChange = (e) =>{
        setPaymentForm({...paymentForm, [e.target.name]:e.target.value})
    }
    const handleClick = (e)=>{
        e.preventDefault()
        setPaymentForm({...paymentForm, amount: e.target.value});
        console.log(paymentForm);
    }
    const handlePay = (e) => {
      e.preventDefault();
      console.log(paymentForm);
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
                        <input placeholder='Sumit' onChange={handleChange} value={paymentForm.name}  className='h-10 w-[250px] px-2 focus:outline-blue-400 rounded-[12px]' type="text" id='name' name='name' required/>
                    </div>
                    <div>
                        <label htmlFor="message">Message : </label>
                        <input placeholder='say something...' onChange={handleChange} value={paymentForm.message} className='h-10 w-[250px] px-2 focus:outline-blue-400 rounded-[12px]' type="text" id='message' name='message' required/><br />
                    </div>
                    <div>
                        <label htmlFor="amount">Amount : </label>
                        <input placeholder='₹100' onChange={handleChange} value={paymentForm.amount} className='h-10 w-[250px] px-2 focus:outline-blue-400 rounded-[12px]' type="text" id='amount' name='amount' required/><br />
                    </div>
                    <div className='flex-wrap flex '>
                        <button onClick={handleClick} value={10} className='visited:text-white font-bold cursor-pointer w-fit m-1 rounded-[12px] p-3 bg-slate-300 bg-opacity-40 backdrop-blur-2xl shadow-2xl'>₹10</button>
                        <button onClick={handleClick} value={20} className='visited:text-white font-bold cursor-pointer w-fit m-1 rounded-[12px] p-3 bg-slate-300 bg-opacity-40 backdrop-blur-2xl shadow-2xl'>₹20</button>
                        <button onClick={handleClick} value={50} className='visited:text-white font-bold cursor-pointer w-fit m-1 rounded-[12px] p-3 bg-slate-300 bg-opacity-40 backdrop-blur-2xl shadow-2xl'>₹50</button>
                        <button onClick={handleClick} value={100} className='visited:text-white font-bold cursor-pointer w-fit m-1 rounded-[12px] p-3 bg-slate-300 bg-opacity-40 backdrop-blur-2xl shadow-2xl'>₹100</button>
                        <button onClick={handleClick} value={500} className='visited:text-white font-bold cursor-pointer w-fit m-1 rounded-[12px] p-3 bg-slate-300 bg-opacity-40 backdrop-blur-2xl shadow-2xl'>₹500</button>
                        <button onClick={handleClick} value={1000} className='visited:text-white font-bold cursor-pointer w-fit m-1 rounded-[12px] p-3 bg-slate-300 bg-opacity-40 backdrop-blur-2xl shadow-2xl'>₹1000</button>
                    </div>
                    <button onClick={handlePay} className='rounded-[12px] bg-blue-500 hover:bg-white border-2 border-blue-500 text-white hover:text-blue-500 font-bold transition-colors duration-700 p-3 w-full'>Tip now!</button>
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

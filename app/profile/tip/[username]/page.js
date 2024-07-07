"use client";
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Tranquiluxe } from "uvcanvas"
import { useState } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import { initiate } from '@/actions/useraction'

const page = () => {
  // const session = {
  //     user:{
  //         name:"Shivam",
  //         image:"laosn",
  //         email:"hbdh@gami.com"
  //     }
  // }
  const [paymentForm, setPaymentForm] = useState({});
  const handleChange = (e) => {
    setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value })
  }
  const handleClick = (e) => {
    e.preventDefault()
    setPaymentForm({ ...paymentForm, amount: e.target.value });
    console.log(paymentForm);
  }

  const Pay = async (amount) => {
    let a = await initiate(amount, session?.user.name, paymentForm);
    let order_id = a.id
    var options = {
      "key": process.env.KEY_ID, // Enter the Key ID generated from the Dashboard
      "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Get me a tip!", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": `${process.env.URL}/api/razorpay`,
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  }

const handlePay = (e) => {
    e.preventDefault();
    console.log(paymentForm);
    Pay(paymentForm.amount)
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
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
                      <input placeholder='Sumit' onChange={handleChange} value={paymentForm.name} className='h-10 w-[250px] px-2 focus:outline-blue-400 rounded-[12px]' type="text" id='name' name='name' required />
                    </div>
                    <div>
                      <label htmlFor="message">Message : </label>
                      <input placeholder='say something...' onChange={handleChange} value={paymentForm.message} className='h-10 w-[250px] px-2 focus:outline-blue-400 rounded-[12px]' type="text" id='message' name='message' required /><br />
                    </div>
                    <div>
                      <label htmlFor="amount">Amount : </label>
                      <input placeholder='₹100' onChange={handleChange} value={paymentForm.amount} className='h-10 w-[250px] px-2 focus:outline-blue-400 rounded-[12px]' type="text" id='amount' name='amount' required /><br />
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
    </>
  )
}
export default page

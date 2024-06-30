import React from 'react'
import { Novatrix } from 'uvcanvas'
const page = () => {
  return (
    <div>
      <div className='md:h-screen min-[0px]:max-md:h-[150vh]'>
        <Novatrix />
      </div>
      <div className='absolute h-screen min-[0px]:max-md:h-[150vh] w-full bg-gradient-to-b from-transparent to-white bg-opacity-50 top-0  flex justify-center items-center'>
        <div className=' p-5 rounded-[12px] backdrop-blur-2xl bg-slate-200 shadow-2xl bg-opacity-70'>
            <div className='space-y-5'>
                <div className='text-center text-3xl font-bold text-blue-400'>Dashboard</div>
                <form className='space-y-4' action="">
                    <label htmlFor="name">Name : </label>
                    <input placeholder='Sanjay' className='h-10 w-[250px] px-2 focus:outline-blue-400 rounded-[12px]' type="text" id='name' name='name' required/><br />
                    <label htmlFor="username">Username : </label>
                    <input className='h-10 w-[250px] px-2 focus:outline-blue-400 rounded-[12px]' type="text" id='username' name='username' placeholder='get your username or update it' required/><br />
                    <label htmlFor="email">Email : </label>
                    <input placeholder='abc@gamil.com' className='h-10 w-[250px] px-2 focus:outline-blue-400 rounded-[12px]' type="email" id='email' name='email' required/><br />
                    <label htmlFor="password">Password : </label>
                    <input className='h-10 w-[250px] px-2 focus:outline-blue-400 rounded-[12px]' type="password" id='password' name='password' required/><br />
                    <label htmlFor="payId">Razorpay Id : </label>
                    <input className='h-10 w-[250px] px-2 focus:outline-blue-400 rounded-[12px]' type="text" id='payId' name='payId' required/><br />
                    <label htmlFor="paySecret">Razorpay secret : </label>
                    <input className='h-10 w-[250px] px-2 focus:outline-blue-400 rounded-[12px]' type="text" id='paySecret' name='paySecret' required/>
                </form>
                <div className='flex justify-center'>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save Info</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page

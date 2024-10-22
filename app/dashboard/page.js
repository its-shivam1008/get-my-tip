"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Novatrix } from 'uvcanvas';
import { fetchUser } from '@/actions/donePaymentFetch';
import { updateUser } from '@/actions/updateUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
const Page = () => {
  const { data: session, status, update } = useSession();
  const router = useRouter();

  const [changeVar, setChangeVar] = useState({});
  const handleChange = (e) => {
    setChangeVar({...changeVar, [e.target.name]: e.target.value});
  }

  const getData = async() =>{
    const u = await fetchUser(session.user.email);
    setChangeVar(u);
  }

  useEffect(() => {
    if(!session){
      router.push('/login');
    }else{
      getData();
    }
  }, [])
  
  if(status === 'loading'){
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
          <div className="h-screen flex justify-center items-center text-4xl font-bold">Loading</div>
      </>
  )
  }


  const showToastAndHandleSubmit = (e) => {
    toast.promise(handleSubmit(e), {
      pending: 'Updating...',
      success: 'Updated successfully 👌',
      error: 'Cannot update 🤯'
    });
  }
  
  const handleSubmit = async(e) => {
    update();
    let a = await updateUser(e, session.user.name);
  }

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
    <div>
      <div className='md:h-screen min-[0px]:max-md:h-[150vh]'>
        <Novatrix />
      </div>
      <div className='absolute h-screen min-[0px]:max-md:h-[150vh] w-full md:bg-gradient-to-b md:from-transparent md:to-white md:bg-opacity-50 top-0  flex justify-center items-center'>
        <div className='p-5 rounded-[12px] min-[0px]:max-md:backdrop-blur-sm backdrop-blur-2xl bg-slate-200 shadow-2xl bg-opacity-70'>
            <div className='space-y-5'>
                <div className='text-center text-3xl font-bold text-blue-400'>Dashboard</div>
                <form className='space-y-4' action={showToastAndHandleSubmit}>
                    <label htmlFor="name">Name : </label>
                    <input onChange={handleChange} placeholder='Sanjay' className='h-10 w-[250px] px-2 focus:outline-blue-400 rounded-[12px]' type="text" id='name' name='name' value={changeVar.name} required/><br />
                    <label htmlFor="username">Username : </label>
                    <input onChange={handleChange} className='h-10 w-[250px] px-2 focus:outline-blue-400 rounded-[12px]' type="text" id='username' name='username' placeholder='get your username or update it' value={changeVar.username} required autoComplete='username'/><br />
                    <label htmlFor="profilepic">Profile image : </label>
                    <input onChange={handleChange} className='h-10 w-[250px] px-2 focus:outline-blue-400 rounded-[12px]' type="text" id='profilepic' name='profilepic' placeholder='get your username or update it' value={changeVar.profilepic} required autoComplete='profilepic'/><br />
                    {/* <label htmlFor="email">Email : </label>
                    <input onChange={handleChange} placeholder='abc@gamil.com' className='h-10 w-[250px] px-2 focus:outline-blue-400 rounded-[12px]' type="email" id='email' name='email' value={changeVar.email} required/><br /> */}
                    <label htmlFor="password">Password : </label>
                    <input onChange={handleChange} className='h-10 w-[250px] px-2 focus:outline-blue-400 rounded-[12px]' type="password" id='password' name='password' value={changeVar.password} required autoComplete='current-password'/><br />
                    <label htmlFor="payId">Razorpay Id : </label>
                    <input onChange={handleChange} className='h-10 w-[250px] px-2 focus:outline-blue-400 rounded-[12px]' type="text" id='razorpayid' name='razorpayid' value={changeVar.razorpayid} required/><br />
                    <label htmlFor="razorpaysecret">Razorpay secret : </label>
                    <input onChange={handleChange} className='h-10 w-[250px] px-2 focus:outline-blue-400 rounded-[12px]' type="text" id='razorpaysecret' name='razorpaysecret' value={changeVar.razorpaysecret} required/>
                
                <div className='flex justify-center'>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save Info</button>
                </div>
              </form>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Page

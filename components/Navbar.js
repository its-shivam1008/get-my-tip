"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { redirect } from 'next/navigation'
const Navbar = () => {
    const { data: session } = useSession()
    const [optionsCss, setoptionsCss] = useState(false)
    const [showDropDown, setShowDropDown] = useState(false)
    const handleClick = () =>{
        setoptionsCss(!optionsCss);
    }
    const profilePage = () =>{
        redirect(`/profile/${session.user.name.split(' ')[0]}`)
    }
    
    return (
        <nav className='z-50 flex h-14 justify-around bg-white bg-opacity-30 backdrop-blur-2xl absolute w-full top-0 items-center'>
            <div>
                <Link href='/' className='text-2xl font-bold'>Logo</Link>
            </div>
            <div className='md:hidden flex space-x-2 items-center'>
                <div><Image src='./search.svg' width={30} height={30} alt='search icon'/></div>
                <div onClick={handleClick} className='flex-col space-y-1 bg-gray-700 hover:cursor-pointer bg-opacity-15 p-2 rounded-md'>
                    <div className="bg-white h-1 rounded-xl w-7"></div>
                    <div className="bg-white h-1 rounded-xl w-7"></div>
                    <div className="bg-white h-1 rounded-xl w-7"></div>
                </div>
            </div>
            <ul className={`${optionsCss?"min-[0px]:max-md:visible min-[0px]:max-md:absolute min-[0px]:max-md:top-[112px] min-[0px]:max-md:mx-auto min-[0px]:max-md:text-center min-[0px]:max-md:w-screen min-[0px]:max-md:space-y-4 min-[0px]:max-md:bg-white min-[0px]:max-md:bg-opacity-30  min-[0px]:max-md:backdrop-blur-3xl":"hidden"} md:flex md:items-center md:space-x-5`}>
                <li className='hover:text-blue-600 hover:transition-colors hover:duration-500'><Link href='/#features'>Features</Link></li>
                <li className='hover:text-blue-600 hover:transition-colors hover:duration-500'><Link href='/contact'>Contact</Link></li>
                <li className='hover:text-blue-600 hover:transition-colors hover:duration-500'><Link href='/services'>Services</Link></li>
            </ul>
            <div className={`${optionsCss?"min-[0px]:max-md:visible min-[0px]:max-md:absolute min-[0px]:max-md:top-[56px] min-[0px]:max-md:py-2 min-[0px]:max-md:mx-auto min-[0px]:max-md:text-center min-[0px]:max-md:w-screen min-[0px]:max-md:space-y-4 min-[0px]:max-md:bg-white min-[0px]:max-md:bg-opacity-30 min-[0px]:max-md:backdrop-blur-3xl":"hidden"} md:flex md:justify-center md:items-center`}>
                <div>
                    {!session && <Link href="/login" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">LogIn as Creator</Link>}
                </div>
                <div>
                    {session && <div>
                                <button id="dropdownDefaultButton" onClick={() => setShowDropDown(!showDropDown)} data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.name}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>
                                </button>
                                <div id="dropdown" className={`z-10 ${showDropDown?"":"hidden"} absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <a href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <button onClick={profilePage} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left">Profile</button>
                                    </li>
                                    <li>
                                        <button onClick={()=>{signOut()}} className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</button>
                                    </li>
                                    </ul>
                                </div>

                                </div>
                    // <button onClick={()=>{signOut()}} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Logout</button>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar

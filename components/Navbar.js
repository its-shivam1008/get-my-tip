"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
const Navbar = () => {
    const [optionsCss, setoptionsCss] = useState(false)
    const handleClick = () =>{
        setoptionsCss(!optionsCss);
    }
    const { data: session } = useSession()
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
                    {session && <button onClick={()=>{signOut()}} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Logout</button>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar

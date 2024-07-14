import React from 'react'
import { Tranquiluxe, Velustro } from "uvcanvas"
const Testimonials = () => {
    return (
        <div id='testimonials' className='py-16'>
            <div className="flex justify-center  p-4">
                <div className="flex flex-col justify-center items-center ">
                    <div className="text-stone-600  font-medium">Testimonials</div>
                    <div className="text-blue-400 text-3xl md:text-5xl font-medium">What Our Clients Say</div>
                    <div className="text-stone-600 my-4 md:font-medium text-center w-3/4 md:w-1/2">We place huge value on our
                        relationships and have seen the benefit they bring to our business. Customer feedback is vital in
                        helping Get-my-tip.</div>
                    <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">

                        <div className="overflow-hidden w-full m-4 flex justify-center rounded-lg  md:w-[33%] px-8">

                            <div className="flex flex-col md:flex-row items-center justify-center  ">
                                <div className="  items-center justify-center flex py-2">
                                    <div className="flex flex-col  items-center justify-center text-center">
                                        <img src="./profile.svg" alt="" width="150px" className="rounded-full" />
                                        <div className="text-stone-500  m-2"> Get-My-Tip has completely transformed the way I interact with my fans. The seamless integration with Razorpay makes receiving tips so easy and secure. I love how I can customize my profile and track my earnings effortlessly. Highly recommend it to all content creators!</div>
                                        <div className="font-bold text-blue-400">— Priya Sharma</div>
                                        <div className="text-sm font-medium text-stone-500 hover:text-blue-400"><a href="#">YouTube Creator</a></div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="overflow-hidden w-full m-4 flex justify-center rounded-lg  md:w-[33%] px-8">

                            <div className="flex flex-col md:flex-row items-center justify-center  ">
                                <div className="  items-center justify-center flex py-2">
                                    <div className="flex flex-col  items-center justify-center text-center">
                                        <img src="./profile.svg" alt="" width="150px" className="rounded-full" />
                                        <div className="text-stone-500  m-2">As a digital artist, connecting with my supporters is crucial. Get-My-Tip provides a straightforward way for my fans to show their appreciation. The real-time notifications and detailed analytics help me understand my audience better. It&apos;s a must-have tool for anyone serious about their online presence.</div>
                                        <div className="font-bold text-blue-400">- Emily Watson</div>
                                        <div className="text-sm font-medium text-stone-500 hover:text-blue-400"><a
                                            href="#">Digital Artist</a></div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="overflow-hidden w-full m-4 flex justify-center rounded-lg  md:w-[33%] px-8">

                            <div className="flex flex-col md:flex-row items-center justify-center  ">
                                <div className="  items-center justify-center flex py-2">
                                    <div className="flex flex-col  items-center justify-center text-center">
                                        <img src="./profile.svg" alt="" width="150px" className="rounded-full" />
                                        <div className="text-stone-500  m-2">Thanks to Get-My-Tip, I&apos;ve seen a significant increase in both fan engagement and tips. The platform is user-friendly, and the secure payment processing through Razorpay gives my fans peace of mind. It&apos;s been a fantastic addition to my content creation toolkit.</div><div className="font-bold text-blue-400">— Ananya Verma</div>
                                        <div className="text-sm font-medium text-stone-500 hover:text-blue-400"><a href="#">Instagram Influencer</a></div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials

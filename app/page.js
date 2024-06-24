import Image from "next/image";
import { Tranquiluxe, Velustro } from "uvcanvas"

export default function Home() {
  return (
    <div className="overflow-x-hidden">
    <div className="w-screen overflow-hidden min-h-[100vh]">
      <Velustro />
    </div>
    <div className="bg-gradient-to-r from-transparent grid grid-cols-2 gap-3 via-white absolute top-0 w-screen to-white min-h-screen overflow-x-hidden">
    <div className="col-start-2 flex flex-col space-y-4 items-center justify-center text-center p-5">
      <div className="space-y-5">
        <div className="text-5xl">Get your <div className="text-blue-600">Tip !</div> Now</div>
        <div><div  className="text-blue-600">"Get Me a Tip" </div>is a platform where creators can share their work and connect with supporters. Fans can contribute small amounts of money to help creators continue doing what they love, whether it's writing, art, or music. It's like a virtual tip jar for online content! 😊</div>
      </div>
      <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign up!</button>
    </div>
  </div>
</div>
  );
}

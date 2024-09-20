import React from 'react'
import BigCircle from "./Images/blue-circle.png"
import Desktop from "./Images/desktop.png"
import Short2 from "./Images/short2.png"
import Short1 from "./Images/short1.png"
import Short3 from "./Images/short3.png"

import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className="border-2 border-blue-700 flex flex-column justify-between px-[10%] items-center h-[500px]">
      <div className="border-2 border-blue-700 flex flex-column w-[50%] h-[90%] justify-center items-center">
        <div className="border-2 border-grey-700 flex flex-col w-[70%] h-[80%]">

          <h1 className="text-4xl font-bold text-black">
            Run your <span className="text-[green]">
             payroll </span>
            <span className="text-4xl font-bold text-[gold]"> easily </span>
            in
            <span className="text-4xl font-bold text-red-700"> seconds</span>
          </h1>

          <p className="text-sm text-black mt-[15px]" >We’ve built an all-inclusive simple solution for individual and businesses to manage staff, pay salaries, bills, and relevant taxes all at once.</p>
          <div className="border-2 border-[#11453B] bg-[#11453B] px-[40px] rounded-[40px] text-[14px] flex text-[white] w-fit mt-4 self-center"> 
          Start Using Free, Forever
        </div>
        </div>
      </div>

      <div className="border-2 border-blue-700 flex flex-column w-[50%] h-[90%] relative">
        <Image src={BigCircle} alt="big circle" className="w-[100%] h-[100%]" />
        <Image src={Desktop} alt="Desktop" className="w-[100%] h-[80%] absolute right-[-150px] top-[47px]" />
        <Image src={Short2} alt="short1" className="w-[250px] h-[100px] absolute top-[-25px] left-[60px]" />
        <Image src={Short1} alt="short1" className="w-[250px] h-[100px] absolute top-[150px] right-[400px]" />
        <Image src={Short3} alt="short1" className="w-[250px] h-[100px] absolute bottom-[30px] right-[300px]" />
      </div>
    </div>

  )
}

export default HeroSection
import Image from "next/image";
import React from "react";
import Banana from "./Images/logo.png";

export const NavBar = () => {
  return (
    // <div className='bg-red-100 text-green-300 text-xl h-[50px] border-t-2 border-t-green-600 border-l-4 border-l-blue-600 rounded-md'>
    //   hello nathaniel
    // </div>

    <div className="border-2 border-red-500 h-[50px] flex flex-row w-full justify-between px-[10%] items-center">
      <div className="border-2 border-green-200 flex flex-row w-[60%] justify-between">
        <Image src={Banana} className="w-[122px] h-[32px]" />
        <div className="flex flex-row gap-[30px] text-[#00000090] text-[14px]">
          <p>Individual</p>
          <p>Business</p>
          <div>Pricing</div>
          <p>Set your payroll</p>
        </div>
      </div>

      <div className="border-2 border-blue-700 flex flex-row w-[40%] justify-end gap-10">
        <div className="border-2 border-[#11453B] px-[40px] rounded-[40px] text-[14px] flex items-center text-[#11453B] cursor-pointer">
          Login
        </div>
        <div className="border-2 border-[#11453B] bg-[#11453B] px-[40px] rounded-[40px] text-[14px] flex items-center text-[white]">
          Register
        </div>
      </div>
    </div>
  );
};

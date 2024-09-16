import Image from "next/image";
import React from "react";
import Logo from "./logo.png";

export const NavBar = () => {
  return (
    // <div className='bg-red-100 text-green-300 text-xl h-[50px] border-t-2 border-t-green-600 border-l-4 border-l-blue-600 rounded-md'>
    //   hello ndaniel
    // </div>

    <div className="border-2 border-red-500 h-[50px] flex flex-row w-full justify-between px-[10%] items-center">
      <div className="border-2 border-green-200 flex flex-row w-[60%] justify-between">
        <Image src={Logo} className="w-[122px] h-[32px]" />
        <div className="flex flex-row gap-[30px]">
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
          <p>Item 4</p>
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

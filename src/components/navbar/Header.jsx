import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <div className="bg-blue-200/50 h-[110px] flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-[210px] bg-white h-[110px] flex justify-center items-center">
          <h1 className="font-extrabold text-[62px] text-blue-300">P</h1>
        </div>
        <div className="header-one"></div>
      </div>
      <div className="flex gap-4 items-center pr-5">
        <button className="flex px-3 items-center gap-3 h-11 bg-white text-black text-[16px] rounded-[4px] font-semibold">
          <span className="w-9 h-9 rounded-full bg-green-400">
            <img
              src="./user.jpg"
              className="w-full h-full object-cover overflow-hidden rounded-full"
              alt=""
              srcset=""
            />
          </span>
          <span>XYZ Enterprises Pvt Ltd.</span>
        </button>
        <button className="flex px-3 items-center gap-3 h-11 bg-white text-black text-[16px] rounded-[4px] font-semibold">
          <span>
            <IoIosArrowDown />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Button = ({ color, title, link }) => {
  return (
    <button
      className={`rounded-[8px] font-bold flex items-center gap-3 text-center px-2 py-1 text-[14px] w-fit ${color} text-black`}
    >
      {title}
      <IoIosArrowRoundForward size={22} />
    </button>
  );
};

export default Button;

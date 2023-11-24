import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail, MdStorage } from "react-icons/md";
import Button from "../button/Button";

const PlanCard = ({ item }) => {
  const { name, rate, discount, details, bg } = item;

  return (
    <div className="bg-white p-6 rounded-md shadow-md break-words overflow-hidden">
      <div className="flex flex-col gap-1">
        <h2 className="text-[22px] font-bold">{name}</h2>
        <p className="text-[14px] strikethrough w-fit">{rate}/m</p>
        <span className="text-[18px] font-semibold">
          ${"  "}
          {discount}/m
        </span>
        <Button color={bg} title={"Get check"} />
        {/* <button className="rounded-[8px] flex items-center gap-3 text-center px-2 py-1 text-[14px] w-fit bg-yellow-600/30 text-black">
          get started <IoIosArrowRoundForward size={22} />
        </button> */}
      </div>
      <div className="w-full border-b-[1px] border-gray-400/50 mt-5"></div>
      <div className="flex flex-col gap-1 mt-3">
        <p className="text-[14px]">what you will get :</p>
        <div className="flex items-center gap-2">
          <div className="w-fit">
            <FaRegUser size={12} />
          </div>
          <p className="text-[16px] font-semibold">{details?.user}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-fit">
            <MdStorage size={12} />
          </div>
          <p className="text-[16px] font-semibold">{details?.storage}</p>
        </div>
        <div className="flex items-center gap-2 break-words">
          <div className="w-fit">
            <MdOutlineEmail size={12} />
          </div>
          <p className="text-[16px] font-semibold">{details?.support}</p>
        </div>
        <div className="flex items-center">
          <span className="w-[16px]"></span>
          <span className="underline text-[16px] font-semibold tracking-wider text-gray-800">
            Explore Features
          </span>
          <IoMdArrowDropright color="blue" size={22} />
        </div>
      </div>
    </div>
  );
};

export default PlanCard;

import React from "react";
// import { IoMdDoneAll } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail, MdStorage, MdDoneAll } from "react-icons/md";
import Button from "../button/Button";

const PlanCardSecond = ({ item }) => {
  const { name, details, bg, description, features, btnText } = item;

  return (
    <div className="bg-white p-6 flex items-center justify-between rounded-md shadow-md">
      <div className="flex flex-col gap-1 w-[60%]">
        <span
          className={`rounded-[14px] font-semibold flex items-center gap-3 text-center px-2 py-1 text-[14px] w-fit ${bg} text-black`}
        >
          {"hhhhh"}
        </span>
        <h2 className="text-[22px] font-bold">{name}</h2>
        <p className="text-[14px] w-fit mb-3">{description}</p>
        <Button color={bg} title={btnText} />
      </div>
      <div className="flex flex-col gap-1 mt-3 w-[40%]">
        <p className="text-[12px]">what you will get :</p>
        {details?.user && (
          <div className="flex items-center gap-2">
            <FaRegUser size={12} />
            <p className="text-[16px] font-semibold">{details?.user}</p>
          </div>
        )}
        {details?.storage && (
          <div className="flex items-center gap-2">
            <MdStorage size={12} />
            <p className="text-[16px] font-semibold">{details?.storage}</p>
          </div>
        )}
        {details?.support && (
          <div className="flex items-center gap-2">
            <MdOutlineEmail size={12} />
            <p className="text-[16px] font-semibold">{details?.support}</p>
          </div>
        )}
        {features && (
          <div className="flex gap-2 break-words">
            <MdDoneAll size={42} className="" />
            <p className="text-[16px] font-semibold break-words">{features}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanCardSecond;

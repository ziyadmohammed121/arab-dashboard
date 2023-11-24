import React from "react";
import { FaPuzzlePiece, FaQuestion } from "react-icons/fa";
import { MdDashboard, MdOutlineContactMail } from "react-icons/md";
import { PiFlowerTulipDuotone } from "react-icons/Pi";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const navLinks = [
    { title: "Dashboard", link: "/", icon: <MdDashboard /> },
    { title: "Perks", link: "/perks", icon: <PiFlowerTulipDuotone /> },
    { title: "Addons", link: "/addons", icon: <FaPuzzlePiece /> },
    { title: "FAQ", link: "/faq", icon: <FaQuestion /> },
    { title: "Support", link: "/support", icon: <MdOutlineContactMail /> },
  ];

  return (
    <div className="h-screen w-[210px] flex flex-col pr-8 bg-white shadow-new">
      <div className="w-[210px] mb-5 h-[140px] flex flex-col justify-center items-center">
        <div className="w-[80px] h-[80px] rounded-full bg-green-500">
          <img
            src="./user.jpg"
            className="w-full h-full object-cover overflow-hidden rounded-full"
            alt=""
            srcset=""
          />
        </div>
        <h2 className="font-semibold text-[18px]">Ram Mohan</h2>
        <p className="text-[12px]">rammohan@gmail.com</p>
      </div>
      <div className="flex flex-col gap-8">
        {navLinks.map((item, id) => {
          return (
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-200/90 gap-2 flex items-center shadow-md rounded-[4px] px-3 py-2 text-[18px] font-semibold"
                  : "bg-white gap-2 hover:bg-blue-200/90 flex items-center hover:border-none rounded-[4px] px-3 py-2 text-[18px] font-semibold border-[1px]"
              }
              key={id}
            >
              {item.icon} {item.title}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;

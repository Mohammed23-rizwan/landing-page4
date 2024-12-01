import clsx from "clsx";
import { useState } from "react";
import { AiOutlineDribbble } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { SiBehance } from "react-icons/si";

const NavBar = () => {
  const [data, setdata] = useState(false);
  console.log(data);
  return (
    <div className="w-full relative h-14 bg-[#ffffff37] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="flex items-center h-full px-10 justify-between">
        <div className="Logo">
          <h2 className="text-lg font-[700]">
            HO<span className="text-[#828282]">AX</span>
          </h2>
        </div>
        <div className="hidden md:flex lg:flex items-center gap-4">
          <ul className="flex gap-4">
            <li className="uppercase text-sm cursor-pointer text-[#828282]">
              Home
            </li>
            <li className="uppercase text-sm cursor-pointer text-[#828282]">
              About
            </li>
            <li className="uppercase text-sm cursor-pointer text-[#828282]">
              Service
            </li>
            <li className="uppercase text-sm cursor-pointer text-[#828282]">
              Blog
            </li>
            <li className="uppercase text-sm cursor-pointer text-[#828282]">
              Contact
            </li>
          </ul>
          <ul className="flex gap-2">
            <li className="cursor-pointer">
              <AiOutlineDribbble />
            </li>
            <li className="cursor-pointer">
              <SiBehance />
            </li>
            <li className="cursor-pointer">
              <FaTwitter />
            </li>
          </ul>
        </div>
        <div className="block md:hidden asbolute top-0 right-0 z-10">
          <div>
            <RxHamburgerMenu
              className="cursor-pointer text-lg"
              onClick={() => {
                setdata(!data);
              }}
            />
          </div>
          <div
            className={clsx(
              "w-[50%] h-screen bg-white fixed top-0 right-0 flex justify-evenly items-center flex-col",
              data && "translate-x-0",
              data || "translate-x-full"
            )}
          >
            <div>
              <IoCloseOutline
                className="text-2xl"
                onClick={() => {
                  setdata(!data);
                }}
              />
            </div>
            <div className="">
              <ul className="flex flex-col gap-4">
                <li className="uppercase text-sm cursor-pointer text-[#828282]">
                  Home
                </li>
                <li className="uppercase text-sm cursor-pointer text-[#828282]">
                  About
                </li>
                <li className="uppercase text-sm cursor-pointer text-[#828282]">
                  Service
                </li>
                <li className="uppercase text-sm cursor-pointer text-[#828282]">
                  Blog
                </li>
                <li className="uppercase text-sm cursor-pointer text-[#828282]">
                  Contact
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex gap-5 text-xl">
                <li className="cursor-pointer">
                  <AiOutlineDribbble />
                </li>
                <li className="cursor-pointer">
                  <SiBehance />
                </li>
                <li className="cursor-pointer">
                  <FaTwitter />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

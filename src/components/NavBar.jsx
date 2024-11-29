import { AiOutlineDribbble } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { SiBehance } from "react-icons/si";

const NavBar = () => {
  return (
    <div className="w-full h-12 bg-[#ffffff37] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
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
      </div>
    </div>
  );
};

export default NavBar;

import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

const FooterSa = () => {
  return (
    <div className="w-full h-[350px] bg-black flex-col flex justify-center items-center text-white">
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-center text-4xl border border-[#828282] w-[50%]">
          HO<span className="text-[#828282]">AX</span>
        </h2>
        <p className="text-sm mt-2 tracking-[4px]">Creative digital media</p>
      </div>
      <div className="mt-10">
        <ul className="flex gap-10">
          <li>
            <FaBehance />
          </li>
          <li>
            <FaDribbble />
          </li>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <RiLinkedinFill />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterSa;

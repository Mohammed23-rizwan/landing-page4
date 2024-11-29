import img1 from "../assets/images/pics/1.jpg";
import img2 from "../assets/images/pics/2.jpg";
import img3 from "../assets/images/pics/3.jpg";
import img4 from "../assets/images/pics/4.jpg";
import img5 from "../assets/images/pics/5.jpg";
import img6 from "../assets/images/pics/6.jpg";
import img7 from "../assets/images/pics/7.jpg";
import img8 from "../assets/images/pics/8.jpg";
import img9 from "../assets/images/pics/9.jpg";
import img10 from "../assets/images/pics/10.jpg";

const MainSa = () => {
  return (
    <div className="mt-10 w-[90%]">
      <div className="pt-4">
        <h2 className="text-2xl uppercase tracking-[4px]"> Latest Works</h2>
      </div>
      <div className="flex justify-center mt-10">
        <ul className=" flex gap-1">
          <li className="capitalize text-sm w-[90px] h-[30px] rounded-full border-[2px] border-black bg-white flex justify-center items-center cursor-pointer">
            photo
          </li>
          <li className="capitalize text-sm w-[90px] h-[30px] rounded-full border-[2px] border-black bg-black text-white flex justify-center items-center cursor-pointer">
            Graphics
          </li>
          <li className="capitalize text-sm w-[90px] h-[30px] rounded-full border-[2px] border-black bg-black text-white flex justify-center items-center cursor-pointer">
            Web
          </li>
        </ul>
      </div>
      <div className="my-10 w-full lg:h-[450px] grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 lg:grid-rows-4 md:grid-rows-1 grid-rows-9 gap-1">
        <div className="lg:row-span-2 lg:col-span-1 md:col-span-2 md:row-span-3 col-span-2 row-span-9 overflow-hidden rounded-[5px]">
          <div className="overflow-hidden w-full h-full">
            <img
              src={img1}
              alt=""
              className="w-full h-full bg-center bg-cover hover:scale-150	ease-in-out duration-500 transition"
            />
          </div>
        </div>
        <div className="row-span-1 overflow-hidden  rounded-[5px]">
          <div className="overflow-hidden w-full h-full">
            <img
              src={img2}
              alt=""
              className="w-full h-full bg-center bg-cover hover:scale-150	ease-in-out duration-500 transition"
            />
          </div>
        </div>
        <div className="row-span-2 overflow-hidden  rounded-[5px]">
          <div className="overflow-hidden w-full h-full">
            <img
              src={img3}
              alt=""
              className="w-full h-full bg-center bg-cover hover:scale-150	ease-in-out duration-500 transition"
            />
          </div>
        </div>
        <div className="col-span-2 row-span-2 md:row-span-3 overflow-hidden  rounded-[5px]">
          <div className="overflow-hidden w-full h-full">
            <img
              src={img4}
              alt=""
              className="w-full h-full bg-center bg-cover hover:scale-150	ease-in-out duration-500 transition"
            />
          </div>
        </div>
        <div className="md:row-span-2 row-span-2 overflow-hidden  rounded-[5px]">
          <div className="overflow-hidden w-full h-full">
            <img
              src={img5}
              alt=""
              className="w-full h-full bg-center bg-cover hover:scale-150	ease-in-out duration-500 transition"
            />
          </div>
        </div>
        <div className="md:row-span-3 row-span-1 overflow-hidden  rounded-[5px]">
          <div className="w-full h-full overflow-hidden">
            <img
              src={img10}
              alt=""
              className="w-full h-full bg-center bg-cover hover:scale-150	ease-in-out duration-500 transition"
            />
          </div>
        </div>
        <div className="row-span-2 overflow-hidden  rounded-[5px]">
          <div className="overflow-hidden w-full h-full">
            <img
              src={img8}
              alt=""
              className="w-full h-full bg-center bg-cover hover:scale-150	ease-in-out duration-500 transition"
            />
          </div>
        </div>
        <div className="row-span-2 overflow-hidden  rounded-[5px]">
          <div className="overflow-hidden w-full h-full">
            <img
              src={img9}
              alt=""
              className="w-full h-full bg-center bg-cover hover:scale-150	ease-in-out duration-500 transition"
            />
          </div>
        </div>
        <div className="row-span-2 overflow-hidden  rounded-[5px]">
          <div className="overflow-hidden w-full h-full">
            <img
              src={img6}
              alt=""
              className="w-full h-full bg-center bg-cover hover:scale-150	ease-in-out duration-500 transition"
            />
          </div>
        </div>
        <div className="md:col-span-2 md:row-span-2 row-span-2 col-span-1 overflow-hidden  rounded-[5px]">
          <div className="overflow-hidden w-full h-full">
            <img
              src={img7}
              alt=""
              className="w-full h-full bg-center bg-cover hover:scale-150 ease-in-out duration-500 transition object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSa;

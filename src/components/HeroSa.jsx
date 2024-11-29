import img1 from "../assets/images/2.jpg";

const hero = () => {
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full absolute top-0 right-0 blur-[1px] z-[-1]">
        <img src={img1} alt="" className="bg-center bg-cover w-full h-full" />
      </div>
      <div className="flex h-full flex-col md:pt-40 px-10 pt-20">
        <div className="md:text-5xl lg:text-5xl text-sm">
          <h2 className="tracking-[4px] uppercase text-[#828282]">Hello!</h2>
          <p className="my-2 uppercase flex gap-2 tracking-[4px]">
            We are{"   "}
            <h2 className="uppercase">
              ho<span className="text-[#828282]">ax</span>
            </h2>
          </p>
          <p className="md:text-sm text-[12px] text-[#828282] tracking-[4px] capitalize">
            creative digital media
          </p>
        </div>
        <div className="w-full flex justify-center md:pt-32 pt-10 lg:mb-0 md:mb-20">
          <button className="bg-[#141215] text-sm text-white md:w-[150px] w-[100px] md:h-[32px] h-[25px] rounded-full capitalize">
            Hire Us Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default hero;

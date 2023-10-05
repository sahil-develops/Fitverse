import React from "react";
import Lottie from "lottie-react";
import Reels from "../../assets/Lottie/reels.json";
import Youtube from "../../assets/Lottie/youtube.json";
import SaaS from "../../assets/Lottie/SaaS.json";
import SVG from "../../assets/SVG/svg";
import '/blob.svg'

const Plans = () => {
  return (
    <div className="py-20 flex justify-center items-center relative font-Montserrat flex-col gap-20  z-[1]" >
      <div>
  <img src="/blob.svg" alt="" className="absolute left-10 top-60  z-[-1] lg:flex hidden"  />
  <img src="/blob3.svg" alt="" className="absolute  -right-10 bottom-10 z-[-1] lg:flex hidden"  />
  <img src="/blob4.svg" alt="" className="absolute  left-2 bottom-48 z-[-1] lg:flex hidden"  />
      </div>
      <div className="flex justify-center items-center flex-col font-Montserrat text-white lg:px-0 px-10 text-center">
        <h1 className="font-semibold lg:text-5xl sm:text-3xl text-2xl sm:px-0">
          Choose your plan
        </h1>
        <p className="font-normal lg:text-xl sm:text-sm">
          {" "}
          Choose a plan that’s tailored for you, we’ve got you covered with a
          variety
        </p>
      </div>
      <div className="flex lg:flex-row flex-col justify-evenly items-center gap-16">
        <div className="bg-[#181818] flex justify-center items-center flex-col px-20 py-10 rounded-2xl gap-10">
          <div className="text-center">
          <h1 className="font-semibold lg:text-2xl sm:text-xl text-sm text-white">
        Content Creators
          </h1>
          <p className="font-normal text-sm text-white">
            {" "}
            Short Form Content : Reels & Shorts
          </p>
          </div>

          <div>
            <Lottie animationData={Reels} className="w-40" />
          </div>

          <div className="flex justify-center items-center flex-col text-white">
          <p className="font-Montserrat font-bold text-[22px]">$79/Reel</p>
          <p className="font-Montserrat font-bold text-[22px]">$79/Monthly</p>

          </div>
        </div>

        <div className="bg-[#181818] flex justify-center items-center flex-col px-20 py-14 rounded-2xl gap-10">
          <div className="text-center"> 
          <h1 className="font-semibold lg:text-2xl sm:text-xl text-sm text-white">
          Content Creators
          </h1>
          <p className="font-normal text-sm text-white">
            {" "}
            Long Form Content : Youtube Videos
          </p>
          </div>

          <div>
            <Lottie animationData={Youtube} className="w-40" />
          </div>

          <div className="flex justify-center items-center flex-col text-white">

          <p className="font-Montserrat font-bold text-[22px]">$4,499/Monthly</p>

          </div>
        </div>

        <div className="bg-[#181818] flex justify-center items-center flex-col px-20 py-14 rounded-2xl gap-10">
          <div className="text-center">
          <h1 className="font-semibold lg:text-2xl sm:text-xl text-sm text-white">
          AI | WEB3 | SaaS
          </h1>
          <p className="font-normal text-sm text-white">
            {" "}
            Unlimited Monthly Subscription Package: 
          </p>
          </div>

          <div>
            <Lottie animationData={SaaS} className="w-40" />
          </div>

          <div className="flex justify-center items-center flex-col text-white">
   
          <p className="font-Montserrat font-bold text-[22px]">$4,499/Month</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;

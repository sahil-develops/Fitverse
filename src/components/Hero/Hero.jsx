import React from "react";
import Video from "../../assets/Lottie/Video.json";

import Lottie from "lottie-react";
const Hero = () => {
  return (
    <>
      <section className="relative z-[1] ">
       
<div>
  <img src="/blueCircle.svg" alt="" className="absolute -z-[1] -left-96 -top-40  lg:flex sm:hidden"  />
  <img src="/greenCircle.svg" alt="" className="absolute -z-[1] -left-[380px] -top-16  lg:flex hidden"  />
  <img src="/blueCircle2.svg" alt="" className="absolute -z-[1] -left-10 -top-10  lg:flex hidden"  />
</div>
        <div className=" mx-auto flex flex-wrap items-center justify-center z-10 lg:flex-row sm:flex-col-reverse lg:px-10 px-8  py-14 ">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 flex flex-col justify-start gap-8">
            <div className="title-font font-semibold lg:text-5xl sm:text-4xl text-2xl font-Montserrat text-white leading-relaxed">
              <span>Videos are complex.</span> <br />
              <span>Let us craft them for you.</span>
            </div>
            <p className="leading-normal font-normal  text-white font-Montserrat">
              Turning videos into viewer/lead magnets, we handle everything –
              from scripting, editing to stunning after effects. Consistently
              impress with eye catchy, viral-ready content.
            </p>
            <div className="">
              <button className="bg-[#E0DDFF] px-9 py-2 rounded-full text-[#181818] font-semibold font-Montserrat lg:text-xl sm:text-base">
                Book a call
              </button>
            </div>
          </div>
          <div className="lg:w-2/6 md:w-1/2  rounded-lg p-8 sm:flex hidden flex-col   ">
            <Lottie animationData={Video} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

import Lottie from "lottie-react";
import React from "react";
import Revise from "../../assets/Lottie/Revise.json";
import Community from "../../assets/Lottie/Community.json";
import Rocket from "../../assets/Lottie/Rocket.json";
const Features = () => {
  return (
    <div className="flex justify-center items-center py-14 flex-col">
      <div className="flex justify-center flex-col items-center lg:gap-7 gap-4 ">
        <h1 className="font-Montserrat font-semibold text-white lg:text-[64px] sm:text-[32px] text-2xl">
          Perks of working with us.
        </h1>
        <p className="font-Montserrat font-normal text-white lg:text-xl sm:text-base text-sm">
          Transforming videos, setting new standards.
        </p>
      </div>
      <div>
     
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-28 gap-10 md:space-y-0">
              <div>
                <div className="flex flex-col  justify-center items-center mb-4  ">
                  <Lottie animationData={Revise} className="w-40" />
                  <h3 className="text-base  dark:text-white font-Inter">
                    Multiple revisions - One at a time.
                  </h3>
                </div>
              </div>
              <div>
                <div className="flex flex-col justify-center items-center  ">
                  <Lottie animationData={Rocket} className="w-40" />
                  <h3 className="text-base  dark:text-white font-Inter">
                    Super Fast Delivery
                  </h3>
                </div>
              </div>
              <div>
                <div className="flex flex-col justify-center items-center ">
                  <Lottie animationData={Community} className="w-40" />
                  <h3 className=" text-base dark:text-white font-Inter">
                    Invite your whole team
                  </h3>
                </div>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
};

export default Features;

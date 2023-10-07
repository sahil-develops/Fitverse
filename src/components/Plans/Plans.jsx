import React, { useState } from "react";
import Lottie from "lottie-react";
import Reels from "../../assets/Lottie/reels.json";
import Youtube from "../../assets/Lottie/youtube.json";
import SaaS from "../../assets/Lottie/SaaS.json";
import "/blob.svg";
import { motion } from "framer-motion";
import Button from "../Button/Button";

const Plans = () => {
 
  return (
    <div className="py-20 flex justify-center items-center relative font-Montserrat flex-col gap-20     z-[1]">
      <div>
        <img
          src="/blob.svg"
          alt=""
          className="absolute left-10 top-60  z-[-1] lg:flex hidden"
        />
        <img
          src="/blob3.svg"
          alt=""
          className="absolute  -right-10 bottom-10 z-[-1] lg:flex hidden"
        />
        <img
          src="/blob4.svg"
          alt=""
          className="absolute  left-2 bottom-48 z-[-1] lg:flex hidden"
        />
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
      <div className="flex lg:flex-row flex-col justify-evenly items-center gap-16 ">
        <motion.div
          className="bg-[#181818] flex justify-center items-center flex-col lg:py-0 py-10 lg:px-20 px-10 lg:h-[450px] sm:h-72 rounded-2xl gap-10 group transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-center">
            <h1 className="font-semibold lg:text-2xl sm:text-xl text-sm text-white">
              Content Creators
            </h1>
            <p className="font-normal sm:text-sm text-xs text-white">
              Long Form Content: Youtube Videos
            </p>
          </div>

          <motion.div
            className="group-hover:hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.95 }}
          >
            <Lottie animationData={Youtube} className="w-40" />
          </motion.div>

          <motion.div
            className="flex justify-center items-center flex-col text-white group-hover:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-Montserrat font-bold lg:text-[22px] sm:text-sm ">
              $4,499/Monthly
            </p>
          </motion.div>

          <motion.div
            className="hidden group-hover:block text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
          >
            <ul className="text-white font-Montserrat list-disc">
              <li>Lorem ipsum Lorem Ipsum</li>
              <li>Lorem ipsum Lorem Ipsum</li>
              <li>Lorem ipsum Lorem Ipsum</li>
              <li>Lorem ipsum Lorem Ipsum</li>
            </ul>
            <div className="pt-2">
              <div className="py-5">
                <p className="font-Montserrat font-bold text-[22px] text-white py-2 ">
                  $4,499/Monthly
                </p>
              </div>
             <Button text='Browse more' />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-[#181818] flex justify-center items-center flex-col lg:py-0 py-10 lg:px-20 px-10 lg:h-[450px] sm:h-72 rounded-2xl lg:gap-10 gap-8 group transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-center">
            <h1 className="font-semibold text-2xl  text-white">
              Content Creators
            </h1>
            <p className="font-normal sm:text-sm text-xs text-white">
              Long Form Content: Youtube Videos
            </p>
          </div>

          <motion.div
            className="group-hover:hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.8 }}
          >
            <Lottie animationData={Reels} className="w-40" />
          </motion.div>

          <motion.div
            className="flex justify-center items-center flex-col text-white gap-2 group-hover:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-Montserrat font-bold lg:text-[22px] sm:text-sm ">$79/Reel</p>
            <p className="font-Montserrat font-bold lg:text-[22px] sm:text-sm  ">
              $999/Monthly
            </p>
          </motion.div>

          <motion.div
            className="hidden group-hover:block text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
          >
            <ul className="text-white font-Montserrat list-disc">
              <li>Lorem ipsum Lorem Ipsum</li>
              <li>Lorem ipsum Lorem Ipsum</li>
              <li>Lorem ipsum Lorem Ipsum</li>
              <li>Lorem ipsum Lorem Ipsum</li>
            </ul>
            <div className="pt-2 text-white">
              <div className="py-5">
                <p className="font-Montserrat font-bold text-[22px] ">
                  $79/Reel
                </p>
                <p className="font-Montserrat font-bold text-[22px] ">
                  $999/Monthly
                </p>
              </div>
             <Button text='Browse more' />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-[#181818] flex justify-center items-center flex-col lg:py-0 py-10 lg:px-20 px-10 lg:h-[450px] sm:h-72 rounded-2xl gap-10 group transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-center">
            <h1 className="font-semibold lg:text-2xl sm:text-xl text-sm text-white">
              Content Creators
            </h1>
            <p className="font-normal sm:text-sm text-xs text-white">
              Long Form Content: Youtube Videos
            </p>
          </div>

          <motion.div
            className="group-hover:hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
          >
            <Lottie animationData={SaaS} className="w-40" />
          </motion.div>

          <motion.div
            className="flex justify-center items-center flex-col text-white group-hover:hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-Montserrat font-bold lg:text-[22px] sm:text-sm ">
              $4,499/Monthly
            </p>
          </motion.div>

          <motion.div
            className="hidden group-hover:block text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
          >
            <ul className="text-white font-Montserrat list-disc">
              <li>Lorem ipsum Lorem Ipsum</li>
              <li>Lorem ipsum Lorem Ipsum</li>
              <li>Lorem ipsum Lorem Ipsum</li>
              <li>Lorem ipsum Lorem Ipsum</li>
            </ul>
            <div className="pt-2">
              <div className="py-5">
                <p className="font-Montserrat font-bold text-[22px] text-white py-2 ">
                  $4,499/Monthly
                </p>
              </div>
            <Button text='Browse more' />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="text-center">
      <Button text='Browse  more' />
      </div>
    </div>
  );
};

export default Plans;

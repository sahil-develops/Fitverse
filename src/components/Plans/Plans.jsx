import React from "react";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import Lottie from "lottie-react";
import Reels from "../../assets/Lottie/reels.json";
import Youtube from "../../assets/Lottie/youtube.json";
import SaaS from "../../assets/Lottie/SaaS.json";

const PlanSection = ({ title, description, animationData, prices }) => {
  const planVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-[#181818] flex justify-center items-center flex-col lg:py-0 py-10 lg:px-20 px-10 lg:h-[450px] sm:h-72 rounded-2xl gap-10 group transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={planVariants}
    >
      <div className="text-center">
        <h1 className="font-semibold lg:text-2xl sm:text-xl text-sm text-white">
          {title}
        </h1>
        <p className="font-normal sm:text-sm text-xs text-white">
          {description}
        </p>
      </div>

      <motion.div
        className="group-hover:hidden"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 1.5 }}
      >
        <Lottie animationData={animationData} className="w-40" />
      </motion.div>

      <motion.div
        className="flex justify-center items-center flex-col text-white group-hover:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
      >
        {prices.map((price, index) => (
          <p
            key={index}
            className="font-Montserrat font-bold lg:text-[22px] sm:text-sm"
          >
            {price}
          </p>
       ) )}
      </motion.div>

      <motion.div
        className="hidden group-hover:block text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 1.2 }}
      >
        <ul className="text-white font-Montserrat list-disc">
          <li>Lorem ipsum Lorem Ipsum</li>
          <li>Lorem ipsum Lorem Ipsum</li>
          <li>Lorem ipsum Lorem Ipsum</li>
          <li>Lorem ipsum Lorem Ipsum</li>
        </ul>
        <div className="pt-2">
          <div className="py-5">
            {prices.map((price, index) => (
              <p
                key={index}
                className="font-Montserrat font-bold text-[22px] text-white py-2"
              >
                {price}
              </p>
            ))}
          </div>
          <Button text="Browse more" />
        </div>
      </motion.div>
    </motion.div>
  );
};
const Plans = () => {
  return (
    <div className="py-20 flex justify-center items-center relative font-Montserrat flex-col gap-20 z-[1]">
      {/* ... other code ... */}
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
        <PlanSection
          title="Content Creators"
          description="Long Form Content: Youtube Videos"
          animationData={Youtube}
          prices={["$4,499/Monthly"]}
        />
        <PlanSection
          title="Content Creators"
          description="Long Form Content: Youtube Videos"
          animationData={Reels}
          prices={["$79/Reel", "$999/Monthly"]}
        />
        <PlanSection
          title="Content Creators"
          description="Long Form Content: Youtube Videos"
          animationData={SaaS}
          prices={["$4,499/Monthly"]}
        />
      </div>
      <div className="text-center">
        <Button text="Browse more" />
      </div>
    </div>
  );
};

export default Plans;

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const Timeline = () => {
  const [openElement, setOpenElement] = useState(null);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [elementText, setElementText] = useState({
    "01.": "Content Creators",
    "02.": "AI/WEB3 companies",
    "03.": "SaaS companies", // You can add more elements and their corresponding text here
  });

  const handleClick = (elementNumber) => {
    if (openElement === elementNumber) {
      setOpenElement(null);
    } else {
      setOpenElement(elementNumber);
    }
  };
  const handleMouseEnter = (elementNumber) => {
    setHoveredElement(elementNumber);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };

  return (
    <div className="flex justify-start items-center lg:px-0 px-10 max-w-7xl mx-auto  w-full text-white py-10 font-Montserrat ">
      <div>
        <p className="">| Our Use Cases</p>
        <p className=" font-semibold lg:text-4xl sm:text-2xl text-xl whitespace-nowrap">
          Your business is at the <br />
          Centre of our Process.
        </p>
        <div className="flex flex-col justify-start items-start gap-5 w-full py-10 font-Montserrat  ">
          {["01.", "02.", "03."].map((elementNumber) => (
            <motion.div
      
              key={elementNumber}
              className={`bg-[#3F3F3F] rounded-lg ${
                hoveredElement !== elementNumber ? "lg:w-40 sm:w-32 " : "w-auto "
              } whitespace-nowrap group cursor-pointer transition-all duration-700 flex items-center justify-start`}
              onMouseEnter={() => handleMouseEnter(elementNumber)}
              onMouseLeave={handleMouseLeave}
            >
              <motion.p
                    initial={{ y: 0 }}
                    animate={{ y: -20 }}
                    exit={{ y: 0}}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", delay: 0.8 }}
                className={`block lg:text-7xl sm:text-3xl text-2xl lg:p-[20px] p-8 text-transparent bg-clip-text bg-gradient-to-b from-[#6db0b7] to-[#3F3F3F] ${
                  hoveredElement !== elementNumber ? "opacity-100 block" : "opacity-0 hidden" 
                } bg-[#3F3F3F]`}
              
              >
                {elementNumber}
              </motion.p>
              <AnimatePresence>
                {hoveredElement === elementNumber && (
                  <motion.p
               
                    className={`lg:text-7xl sm:text-3xl text-2xl lg:p-[20px] p-7 text-white block bg-clip-text bg-gradient-to-b from-[#6db0b7]  bg-[#3F3F3F]`}
                  >
                    {elementText[elementNumber]}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        <img
          src="./blob5.svg"
          alt=""
          className="w-96 absolute right-1 -bottom-[100rem] lg:block hidden"
        />
      </div>
    </div>
  );
};

export default Timeline;

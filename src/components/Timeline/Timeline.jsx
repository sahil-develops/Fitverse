import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

const Timeline = () => {
  const [openElement, setOpenElement] = useState(null);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [elementText, setElementText] = useState({
    "01.": 'Content Creators',
    "02.": 'AI/WEB3 companies',
    "03.": 'SaaS companies', // You can add more elements and their corresponding text here
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
    <div className="flex justify-around items-center px-2 overflow-hidden w-full text-white py-10 font-Montserrat ">
      <div>
        <p className="">| Our Use Cases</p>
        <p className=" font-semibold text-4xl whitespace-nowrap">
          Your business is at the <br />
          Centre of our Process.
        </p>
        <div className="flex flex-col justify-start items-start gap-5 w-full py-10 font-Montserrat ">
        {["01.", "02.", "03."].map((elementNumber) => (
        <div
          key={elementNumber}
          className={`bg-[#3F3F3F] rounded-lg ${hoveredElement !== elementNumber ? "w-48" : "w-auto"} group cursor-pointer transition-all duration-700 flex items-center justify-start`}
          onMouseEnter={() => handleMouseEnter(elementNumber)}
          onMouseLeave={handleMouseLeave}
        >
      
          <p className={` block sm:text-8xl  text-5xl lg:p-[20px] p-7  text-transparent bg-clip-text bg-gradient-to-b from-[#6db0b7] to-[#3F3F3F]  ${hoveredElement !== elementNumber ? "opacity-100" :"opacity-0 "} transition-all duration-300 bg-[#3F3F3F]`}>
            {elementNumber}
          </p>
          <AnimatePresence>
            {hoveredElement === elementNumber && (
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: -100 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.2 }}
                className={`sm:text-6xl text-5xl lg:p-[20px] p-7 text-white block bg-clip-text bg-gradient-to-b from-[#6db0b7]  bg-[#3F3F3F]`}
              >
                {elementText[elementNumber]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      ))}
        </div>
      </div>
      <div>
        <img
          src="./blob5.svg"
          alt=""
          className="w-96 absolute right-1 -bottom-[100rem] sm:block hidden"
        />
      </div>
    </div>
  );
};

export default Timeline;

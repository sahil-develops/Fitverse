import React, { useState } from 'react';

const Timeline = () => {
  const [openElement, setOpenElement] = useState(null);
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

  return (
    <div className="flex justify-around items-center px-2 overflow-hidden w-full text-white py-10 font-Montserrat">
      <div>
        <p className="">| Our Use Cases</p>
        <p className=" font-semibold text-4xl whitespace-nowrap">
          Your business is at the <br />
          Centre of our Process.
        </p>
        <div className="flex flex-col justify-start items-start gap-5 py-10 font-Montserrat">
          {["01.", "02.", "03."].map((elementNumber) => (
            <div
              key={elementNumber}
              className={`bg-[#3F3F3F] rounded-lg group cursor-pointer transition-all duration-300 ${
                openElement === elementNumber ? 'text-white' : ''
              }`}
              onClick={() => handleClick(elementNumber)}
            >
              <p
                className={`sm:text-8xl text-5xl lg:p-[30px] p-7 ${
                  openElement === elementNumber ? 'text-white' : 'text-transparent'
                } bg-clip-text bg-gradient-to-b from-[#6db0b7] transition-all duration-200 to-[#3F3F3F] group-hover:text-black export group-hover:bg-[#3F3F3F]`}
              >
                {openElement === elementNumber ? elementText[elementNumber] : elementNumber}
              </p>
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

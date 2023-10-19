import React, { useState } from "react";

import { motion } from "framer-motion";

const Dropdown = ({
  Values,
  title,
  onChange,
  name,
  selectedOption,
  isViewSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => setIsOpen((prev) => !prev);

  const nameShortner = (string, length) => {
    return string.length > length ? string.slice(0, length) + "..." : string;
  };

  return (
    <div
      className={`flex flex-col gap-3   ${
        !isViewSelect
          ? "w-[90%] sm:w-[30%] md:w-[calc(100%/6-10px)] xl:w-[calc(100%/6-14px)] "
          : "w-auto"
      } `}
    >
      {!isViewSelect && (
        <p className="text-sm font-semibold font-Inter md:whitespace-nowrap">
          {" "}
          {title} <span className="text-red-500">*</span>
        </p>
      )}
      <div
        onClick={toggleDropDown}
        className={`bg-white relative border w-full  text-[#aaa5a2] text-sm rounded  block px-1.5 ${
          isViewSelect
            ? "xl:px-3 py-1.5 font-medium flex items-center border-[#DAE3EE] justify-center gap-1.5 "
            : "xl:px-4 py-3 border-[#E8E7E4]"
        }`}
      >
        {/* default option selected */}
        <p
          className={`text-base cursor-pointer ${
            isViewSelect && "text-[#262D38]"
          } font-normal  text-start rounded-lg `}
        >
          {nameShortner(selectedOption, 15)}
        </p>

        {/* dropdown arrow */}
        <img
          className={`transition-all  ${
            isViewSelect ? "" : "right-4 absolute top-1/2 -translate-y-1/2"
          }  duration-200 cursor-pointer ${
            isOpen ? "rotate-180" : "rotate-0"
          } `}
          src={'/drop-down.svg'}
          alt=""
        />

        {/* dropdown */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className={`rounded w-full  max-h-[300px]  shadow  drop-shadow-md overflow-y-auto scroll absolute z-[9999_!important] top-[105%] right-0 border-neutral-100 border  bg-white p-2 `}
          >
            {Values.map((opt, index) => (
              <>
                <p
                  key={index}
                  onClick={() =>
                    isViewSelect
                      ? onChange(opt.includes("Table") ? "list" : "grid")
                      : onChange(name, opt )
                  }
                  className={`text-base ${
                    isViewSelect && "text-[#262D38]"
                  } text-ellipsis break-all  cursor-pointer font-normal text-start rounded-lg px-2 py-1`}
                >
                  {nameShortner(opt, 15)}
                </p>
                <hr
                  className={`w-full border last:hidden border-neutral-100 `}
                />
              </>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
import React, { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="  w-full z-20 top-0 left-0 lg:px-12 px-5 pt-5 ">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4">
        <p className="flex items-center justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8  w-10"
            viewBox="0 0 59 49"
            fill="none"
          >
            <path
              d="M47.6112 1.06079H4L26.6097 15.9122M47.6112 1.06079L55.6524 16.9538L41.9352 26.596M47.6112 1.06079L26.6097 15.9122M11.8519 47.8885L4 31.9008L17.3777 22.4407M11.8519 47.8885H55.6524L33.0426 32.8469M11.8519 47.8885L33.0426 32.8469M33.0426 32.8469L17.3777 22.4407M33.0426 32.8469L41.9352 26.596M26.6097 15.9122L17.3777 22.4407M26.6097 15.9122L41.9352 26.596"
              stroke="#D9D9D9"
              stroke-width="2"
            />
          </svg>
          <span className="self-center font-Jost text-2xl font-semibold whitespace-nowrap dark:text-white">
            edit
          </span>
        </p>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white font-Jost font-medium rounded-full lg:text-base sm:text-sm text-xs lg:px-6 px-5 lg:py-1 py-0 border border-[#92929280] text-center mr-3 md:mr-0 dark:bg-[#92929280] "
          >
            Log-In/Sign-Up
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100  "
            aria-controls="navbar-sticky"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between gap-10 w-full md:flex md:w-auto md:order-1 ${
            isMobileMenuOpen ? "" : "hidden"
          }`}
        >
          {/* <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label> */}
          <div className="relative  ">
            <input
              type="search"
              className={`block lg:w-96 md:w-80 sm:w-40 w-full ${isMobileMenuOpen ? "mt-5 " : "my-0"}  transition-all font-Jost px-4 py-2 text-sm rounded-full  border border-[#92929280] focus:border-[#92929280]  dark:bg-[#92929280]  dark:placeholder-[#8d8d8d] dark:text-white`}
              placeholder="Search for services, video formats etc."
            />
            <button
              type="submit"
              className="text-white absolute right-5 bottom-2.5 font-medium rounded-lg text-sm"
            >
              <svg
                className="w-4 h-4 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col font-Jost p-4 md:p-0 mt-4 text-base font-normal rounded-lg  md:flex-row md:space-x-8 md:mt-0  ">
            <li>
              <p
                className="block py-2 pl-3 pr-4 text-white md:p-0"
                aria-current="page"
              >
                Benefits
              </p>
            </li>
            <li>
              <p className="block py-2 pl-3 pr-4 text-white rounded   md:p-0 ">
                About Us
              </p>
            </li>
            <li>
              <p className="block py-2 pl-3 pr-4 text-white rounded md:p-0 ">
                Services
              </p>
            </li>
            <li>
              <p className="block py-2 pl-3 pr-4  rounded md:p-0 text-white ">
                Blog
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

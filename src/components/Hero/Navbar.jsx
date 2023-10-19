import React, { useState,useEffect } from 'react';
import Modal from '../Modal/Modal'
function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  }  
  // Add a useEffect to handle the scrolling behavior
  useEffect(() => {
    if (showModal) {
      // When the modal is open, disable scrolling on the body element
      document.body.style.overflow = "hidden";
    } else {
      // When the modal is closed, enable scrolling on the body element
      document.body.style.overflow = "auto";
    }
  
    // Cleanup the effect when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);
return (
    <nav className="bg-white ">
      {showModal && <Modal closeModal={closeModal} />}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto lg:px-20 sm:px-10 px-5 py-5">
      
          <img
            src="./fitverse.png"
            className="sm:h-12 h-8 "
            alt="fitverse Logo"
          />
         
        
        <div className="flex md:order-2 lg:gap-5 sm:gap-3 gap-1">
            <button className='font-Inter font-medium text-black'  onClick={()=>{setShowModal(true)}}>Login</button>
          <button
            type="button"
            className="text-white bg-[#B01CD4] font-Inter font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
          onClick={()=>{setShowModal(true)}}
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            onClick={()=>{toggleNav}}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden "
            aria-controls="navbar-cta"
            aria-expanded={isNavOpen}
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
          className={`items-start justify-between w-full md:flex md:w-auto md:order-1 ${
            isNavOpen ? '' : 'hidden'
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 font-Inter md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <a
                href="#"
                className="block py-2  text-black"
                aria-current="page"
              >
                Membership
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2  text-black font-medium"
              >
                Location
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2  text-black font-medium"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2  text-black font-medium"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

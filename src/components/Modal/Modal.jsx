import React, { useState } from "react";
const Modal = ({ closeModal }) => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div className="">
      <div
        id="authentication-modal"
        tabindex="-1"
        aria-hidden="true"
        className=" z-50  fixed inset-0 touch-none  backdrop-blur-lg  lg:px-0 px-5 flex justify-center items-center"
      >
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700 w-[500px] bg-white  relative p-5 rounded-xl  ">
          <div className="absolute right-5 top-5">
            <button
              onClick={() => {
                closeModal();
                console.log("CLicked");
              }}
            >
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios/50/multiply.png"
                alt="multiply"
              />
            </button>
          </div>
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center  justify-center"
            id="myTab"
            role="tablist"
          >
            <li className="mr-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "profile"
                    ? "border-[#B01CD4]"
                    : "border-transparent"
                }`}
                id="profile-tab"
                onClick={() => handleTabClick("profile")}
                role="tab"
                aria-controls="profile"
                aria-selected={activeTab === "profile" ? "true" : "false"}
              >
                Login
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 ${
                  activeTab === "dashboard"
                    ? "border-[#B01CD4]"
                    : "border-transparent"
                } `}
                id="dashboard-tab"
                onClick={() => handleTabClick("dashboard")}
                role="tab"
                aria-controls="dashboard"
                aria-selected={activeTab === "dashboard" ? "true" : "false"}
              >
                Signup
              </button>
            </li>
          </ul>

          <div id="myTabContent">
            <div
              className={`p-4   ${
                activeTab === "profile" ? "block" : "hidden"
              }`}
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              {/* Profile Section */}

              <div className="w-full md:mt-0 sm:max-w-md xl:p-0 text-black font-Inter">
                <div className="p-1 space-y-4 md:space-y-0 ">
                  <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label
                        for="email"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#FAFAFA]"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="password"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#FAFAFA]"
                        required
                      />
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          aria-describedby="terms"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 text-black"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          for="terms"
                          className="font-light text-gray-500 dark:text-gray-300"
                        >
                          {" "}
                          <a className="font-medium text-[#747474]" href="#">
                            Remember Me
                          </a>
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full text-black border border-[#B01CD4] hover:bg-[#B01CD4] hover:text-white transition-all duration-500 lg:p-3 p-1 rounded-lg"
                    >
                      Submit
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                      Don't have an account?
                      <a
                        onClick={() => handleTabClick("dashboard")}
                        href="#"
                        className="font-medium text-black"
                      >
                        {" "}
                        Sign in here
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div
              className={`p-4  ${
                activeTab === "dashboard" ? "block" : "hidden"
              }`}
              id="dashboard"
              role="tabpanel"
              aria-labelledby="dashboard-tab"
            >
              <div className="w-full md:mt-0 sm:max-w-md xl:p-0 text-black font-Inter">
                <div className="p-1 space-y-4 md:space-y-0 ">
                  <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label
                        for="email"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="text"
                        id="email"
                        className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#FAFAFA]"
                        placeholder="Mark Zuckerberg"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="email"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#FAFAFA]"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="password"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#FAFAFA]"
                        required
                      />
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          aria-describedby="terms"
                          type="checkbox"
                          className="w-4 h-4 border  rounded bg-[#B01CD4] text-white"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          for="terms"
                          className="font-light text-gray-500 dark:text-gray-300"
                        >
                          {" "}
                          <a className="font-medium text-[#747474]" href="#">
                            I accept the terms and conditions
                          </a>
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full text-black border border-[#B01CD4] hover:bg-[#B01CD4] hover:text-white transition-all duration-500 lg:p-3 p-1 rounded-lg"
                    >
                      Create an account
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                      Alread have an account ?
                      <a
                        onClick={() => handleTabClick("profile")}
                        href="#"
                        className="font-medium text-black"
                      >
                        {" "}
                        Log in here
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React, { useState } from "react";
import downarrow from "../../assets/Images/downarrow.png";
import { motion } from "framer-motion";
const Faq = () => {
  const accordionData = [
    {
      id: 1,
      title: "What is Netflix?",
      desc: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      id: 2,
      title: "How much does Netflix cost?",
      desc: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦2,900 to ₦4,400 a month. No extra costs, no contracts.",
    },
    {
      id: 3,
      title: "Where can I watch?",
      desc: "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      id: 4,
      title: "How do I cancel?",
      desc: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null); // Close the active accordion
    } else {
      setActiveIndex(index); // Open the clicked accordion
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 py-10 w-full ">
      <h1 className="text-white font-Montserrat font-semibold lg:text-6xl md:text-4xl sm:text-2xl text-xl">
        FAQ's
      </h1>
      <div className="flex justify-center flex-col gap-10 py-8 max-w-5xl  sm:w-3/4 w-11/12 ">
        {accordionData.map((data, index) => (
          <div
            key={data.id}
            className=" flex justify-start items-start flex-col transition-all duration-75 w-full "
          >
            <div
              className="cursor-pointer w-full transition-all duration-200"
              onClick={() => toggleAccordion(index)}
            >
              <h1 className="text-white  text-left  font-Montserrat text-2xl font-medium bg-[#3f3f3f] rounded-full px-5 py-2 flex justify-between items-center ">
                {data.title}

                <img
                  src={downarrow}
                  alt=""
                  className={`${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  } transition-all duration-300`}
                />
              </h1>
            </div>

            {activeIndex === index && (
              <motion.p
                className="text-white  mx-5 py-6 rounded-sm "
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.6 }}
              >
                {data.desc}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

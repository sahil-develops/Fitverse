import React,{useState} from "react";
import Modal from "../Modal/Modal";
const Fade = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  } 
  return (
    <div
      style={{ backgroundImage: `url(/Rectangle.png)` }}
      className="z-10  lg:bottom-[90%] bottom-[95%] absolute bg-[#FAFAFA]/90 lg:h-[300px] h-[500px]  w-full  "
    >
         {showModal && <Modal closeModal={closeModal} />}
      <div className=" font-medium text-xl text-center font-Inter  w-full h-full flex lg:flex-row flex-col gap-5 lg:px-0 px-5 justify-center items-center ">
        <span  onClick={()=>{setShowModal(true)}} className="underline font-semibold cursor-pointer">
          Create an account{" "}
        </span>
        &nbsp;to see the full list of gyms and their amenities.
      </div>
    </div>
  );
};

export default Fade;

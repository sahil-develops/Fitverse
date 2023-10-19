import { motion } from 'framer-motion';
import React from 'react'

const Card = ({title, description,image,rating,key}) => {
    const nameShortner = (string, length) => {
        return string.length > length ? string.slice(0, length) + "..." : string;
      };
  return (
    <div>
        
        <motion.div
       initial={{ opacity: 0, y: 10 }}
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: 10 }}
       transition={{ duration: 0.2 }}
        key={key} className="max-w-lg rounded overflow-hidden shadow-lg font-Inter">
  <img className="w-[400px] h-[200px] " src={image}  alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 flex justify-between items-center">
    <div className='lg:text-lg sm:text-sm '>{title}</div>
    <div className="">
    <span className="inline-block bg-[#B01CD4] font-Inter capitalize rounded-full px-3 py-1 text-sm font-semibold text-white  mb-2">Rating {rating}</span>
  </div>
        </div>
    <p className="text-gray-700 text-base">
   {nameShortner(description, 100)}
    </p>
    <button className='py-3 flex items-center justify-center gap-2 hover:text-lg  font-medium transition-all duration-1000 '>Read more <img width="20" height="20" src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/3200/external-right-arrow-user-interface-kmg-design-outline-color-kmg-design.png" alt="right--v1" className='py-2 hover:ml-2 transition-all duration-300 '/></button>
  </div>
  
</motion.div>

    </div>
  )
}

export default Card
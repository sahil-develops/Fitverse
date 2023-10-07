import React from 'react'

const Button = ({text}) => {
  return (
    <button className="bg-[#E0DDFF] hover:bg-[#7e73f3af]  hover:text-white transition-all duration-300 px-9 py-2 rounded-full text-[#181818] font-semibold font-Montserrat lg:text-xl sm:text-base">
 {text}
  </button>
  )
}

export default Button
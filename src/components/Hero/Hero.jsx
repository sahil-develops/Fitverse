import React from 'react'
import Navbar from './Navbar'
import Filters from './Filters'

const Hero = () => {
  return (
    <div className='w-full z-10'>
<Navbar  />  
<div className='flex justify-center items-center sm:min-h-[40vh] min-h-[30vh]  flex-col gap-6'>
<h1 className='text-black font-bold lg:text-5xl sm:text-3xl text-xl  font-Inter lg:w-1/2 w-4/5 text-center'>Listings, Fit verse, Gym Passes & Gym Membership</h1>
<p className='text-[#00000099] font-medium font-Inter lg:text-xl sm:text-lg text-sm sm:px-0 px-4 text-center '> View All the amenities, equipment's and review of the centers near you.</p>
</div>
<Filters  />
    </div>
  )
}

export default Hero
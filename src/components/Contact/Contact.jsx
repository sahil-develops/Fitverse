import React from 'react'
import Button from '../Button/Button'

const Contact = () => {
  return (
    <div>
        <section className="z-[1] relative ">
            <img src="/square.svg" alt="" className="absolute -left-60 bottom-[55%] z-[-1] lg:flex hidden"  />
            <img src="/square2.svg" alt="" className="absolute -left-20 bottom-40  z-[-1] lg:flex hidden"  />
            <img src="/circle.svg" alt="" className="absolute -left-8 bottom-96 z-[-1] lg:flex hidden"  />
            <img src="/whitecircle.svg" alt="" className="absolute bottom-96 left-1 z-[-1] lg:flex hidden"  />
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-4xl overflow-hidden">
      <h2 className=" lg:text-4xl sm:text-3xl text-2xl  font-semibold text-center font-Montserrat dark:text-white">Contact</h2>
      <p className="mb-8 lg:mb-16 font-normal text-center text-white sm:text-sm text-xs font-Montserrat">Turning videos into viewer/lead magnets, we handle everything – from scripting, editing to stunning after effects. Consistently impress with eye catchy, viral-ready content.</p>
      <form action="#" className="space-y-8 bg-[#111111] px-10 py-5 flex flex-col rounded-xl   ">
        <div className='flex sm:flex-row flex-col w-full sm:justify-between justify-stretch sm:items-start sm:gap-0 gap-5'>
          <div>
              <label for="email" className="block text-sm font-medium font-Montserrat text-white py-4">First Name</label>
              <input type="email"  className="shadow-sm w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Rohan" required/>
          </div>
          <div>
              <label for="subject" className="block  text-sm font-medium font-Montserrat text-white py-4">Last Name</label>
              <input type="text"  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Joshi" required/>
          </div>

          <div>
              <label for="subject" className="block  text-sm font-medium font-Montserrat text-white py-4">Email</label>
              <input type="email"  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="rohanjoshi@gmail.com" required/>
          </div>
        </div>
          <div>
              <label for="subject" className="block  text-sm font-medium font-Montserrat text-white py-4">Your Website</label>
              <input type="text"  className="block p-3  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="www.google.com" required/>
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block  text-sm font-medium font-Montserrat text-white py-4">Your message</label>
              <textarea  rows="6" cols="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Write a meesage"></textarea>
          </div>
          <div className='text-center'>
         <Button text='Submit'  />

          </div>
      </form>
  <img src="/square.svg" alt="" className="absolute -right-10 bottom-5 z-[-1] lg:flex hidden"  />
            <img src="/circle.svg" alt="" className="absolute  -right-48 bottom-40  z-[-1] lg:flex hidden"  />
            <img src="/square2.svg" alt="" className="absolute -right-10 bottom-80 z-[-1] lg:flex hidden"  />
  </div>
</section>
<div className='flex justify-center items-center text-white py-8 font-Montserrat'>
<p>Crafted with ❤️ By <a href='https://syntaxerreur.com/' target='_blank' className='font-bold'>Syntax Erreur</a></p>
</div>
    </div>
  )
}

export default Contact
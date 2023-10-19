import React, {useState} from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Fade from './components/Fade/fade'

function App() {

  return (
    <>
      <div className="flex justify-center relative items-center flex-col w-full dark:bg-[#FAFAFA] ">
    
     <Hero  />
  
     <div className='relative'>
     <Fade/>  
     <Footer />
     </div>
    </div>
    </>
  )
}

export default App

import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import './App.css'
import Features from './components/Features/Features'
import Grid from './components/Grid/Grid'
import Plans from './components/Plans/Plans'
import Faq from './components/FAQ/Faq'
import Timeline from './components/Timeline/Timeline'
import Contact from './components/Contact/Contact'

function App() {


  return (
    <>
      <div className="flex justify-center items-center flex-col w-full dark:bg-black">
      <Navbar />
      <Hero />
      <Features />  
      <Grid />
      <Timeline />
      <Plans />
      <Faq  />
      <Contact />
    </div>
    </>
  )
}

export default App

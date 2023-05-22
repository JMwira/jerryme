import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Me from './Components/Me'
import Contact from './Components/Contact'
import Skills from './Components/Skills'

function App() {
  return (
    <>
      <div className='bg-white w-screen h-auto' >
        <div><Header/></div>
        <div id="home" className='mt-[30px]' >
          <Banner/>
        </div>
        <div id="skills" className='mt-[30px]' >
          <Skills/>
        </div>
        <div id="about" className='mt-[30px]' >
          <Me/>
        </div>
        <div id="contact" className='w-full h-auto text-invert py-10 bg-primary'>
          <Contact/>
        </div>
        {/* <div id="home" className='w-full h-[600px] bg-blue-300' ></div>
        
        <div id="experience" className='w-full h-[600px] bg-blue-600'></div>
         */}
      </div>
    </>
  )
}

export default App

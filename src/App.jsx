import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'

function App() {
  return (
    <>
      <div className='bg-white w-screen' >
        <Header/>        
        {/* <div id="home" className='w-full h-[600px] bg-blue-300' ></div>
        <div id="about" className='w-full h-[600px] bg-blue-300' ></div>
        <div id="experience" className='w-full h-[600px] bg-blue-600'></div>
        <div id="contact" className='w-full h-[600px] bg-blue-300'></div> */}
      </div>
    </>
  )
}

export default App

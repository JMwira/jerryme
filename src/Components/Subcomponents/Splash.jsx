import React from 'react'
import logo from '../../assets/jerryme.png'
import './styles/spin.css'
import {RiChatSmile2Line} from 'react-icons/ri'

const Splash = () => {
  return (
    <div className='z-50 bg-white items-center justify-center bg-opacity-70 fixed w-[100%] h-[100%] top-0 left-0 backdrop-blur-sm' >
      <div className='flex items-center flex-col justify-center h-[100%]' >
        <div className='flex flex-col justify-center items-center gap-x-2 text-primary font-bold text-sm' >
            <RiChatSmile2Line className='text-xl' />
            <span className='text-xl' >Hey, welcome at jerryMe</span>
        </div>
        {/* <img src={logo} className='w-[150px] md:w-[250px]' /> */}
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
  )
}

export default Splash

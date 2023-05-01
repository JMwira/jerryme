import React from 'react'
import Logo from "../assets/jerryme.png"
import {AiFillHome} from "react-icons/ai"
import {BsPersonBadgeFill, BsBriefcaseFill, BsPeopleFill} from "react-icons/bs"

const Header = () => {
  return (
    <div className='w-full flex items-center justify-between font-Quicksand px-10 py-5 '>
      <img src={Logo} className='w-[100px] object-cover '/>
      <ul className='flex text-blue-950 ' >
        <li className='px-2 flex items-center' >
            <AiFillHome className='pr-2 text-xl'/>
            Home</li>
        <li className='px-2 flex items-center'>
            <BsPersonBadgeFill className='pr-2 text-xl'/>
            About me</li>
        <li className='px-2 flex items-center'>
            <BsBriefcaseFill className='pr-2 text-xl'/>
            my work</li>
        <li className='px-2 flex items-center'>
            <BsPeopleFill className='pr-2 text-xl'/>
            Contact</li>
      </ul>
    </div>
  )
}

export default Header

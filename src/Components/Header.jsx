import React, {useState} from 'react'
import Logo from "../assets/jerryme.webp"
import {AiFillHome} from "react-icons/ai"
import {BsPersonBadgeFill, BsBriefcaseFill, BsPeopleFill, BsGithub, BsDownload} from "react-icons/bs" 
import {RiCloseLine, RiToggleFill, RiToggleLine} from "react-icons/ri"
import {TiThMenu} from "react-icons/ti"
import {Link} from "react-scroll"
import { ImDownload } from 'react-icons/im'
const Header = () => {
  const [toggle, setToggle] = useState(false)
  const gitCheck = ()=>{
    window.location.assign('https://github.com/JMwira')
  }
  return (
    <div className={toggle?'bg-white shadow-md z-40 w-full flex flex-col items-center justify-between font-Quicksand px-[7%] top-0 py-5 fixed':'bg-white shadow-md z-50 w-full flex items-center justify-between font-Quicksand px-[7%] top-0 py-5 fixed'}>
      <div className={toggle?'justify-between w-full flex items-center':'justify-between w-full flex items-center md:w-fit'} >
        {
          toggle
          ?
          <RiCloseLine className='md:hidden text-xl' onClick={()=>{setToggle(!toggle)}} />
          :
          <TiThMenu className='md:hidden text-xl' onClick={()=>{setToggle(!toggle)}} />
        }
        <img src={Logo} className='w-[100px] object-cover '/>
        <div className='flex gap-x-2 items-center' >
          <BsGithub onClick={gitCheck} className='md:hidden text-xl' />
        </div>
      </div>
      <ul className={toggle?'flex flex-col gap-y-4 mt-4 w-full':'hidden md:flex text-primary '} >
        <Link onClick={()=>setToggle(!toggle)} smooth offset={-100} spy={true} to={'home'} className='px-2 flex items-center' activeClass='active' >
            <AiFillHome className='pr-2 text-xl'/>
            <span>Home</span>
        </Link>
        <Link onClick={()=>setToggle(!toggle)} smooth offset={-70} spy={true} to={'skills'} className='px-2 flex items-center' activeClass='active' >
            <BsPersonBadgeFill className='pr-2 text-xl'/>
            <span>Skills</span>
        </Link>
        <Link onClick={()=>setToggle(!toggle)} smooth offset={-70} spy={true} to={'about'} className='px-2 flex items-center' activeClass='active' >
            <BsBriefcaseFill className='pr-2 text-xl'/>
            <span>my work</span>
        </Link>
        <Link onClick={()=>setToggle(!toggle)} smooth offset={-70} spy={true} to={'contact'} className='px-2 flex items-center' activeClass='active'>
            <BsPeopleFill className='pr-2 text-xl'/>
            <span>Contact</span>
        </Link>
      </ul>
      
    </div>
  )
}

export default Header

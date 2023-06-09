import React from 'react'
import {MdLocationPin, MdEmail, MdLocalPhone, MdPhone} from "react-icons/md"
import {ImLinkedin} from "react-icons/im"
import {FaTwitter, FaLinkedinIn} from "react-icons/fa"
import { useState } from 'react'

const Contact = () => {
  
  const[Contact, setContact] = useState({
      email:'',
      message:''
  })
  const sendEmail = (e)=>{
    e.preventDefault();
    window.location.href='mailTo:jaymwira@gmail.com?body='+Contact.message
  }
  const contactEmail = (e)=>{
    e.preventDefault();
    window.location.href='mailTo:jaymwira@gmail.com'
  }

  const handleChange=(e)=>{
      let value = e.target.value;
      setContact({message:value})
  }

  return (
    <div className='w-[90%] sm:w-[85%] flex flex-col mx-auto justify-center items-center' >
      <span className='text-4xl font-light text-center' >Hey there<br/>I would like to hear from you</span>
      <div className='text-gray-400 w-full flex flex-col gap-x-2 pt-8 items-start' >
        
        <div className='flex-1 mx-auto w-[90%] sm:w-[70%] text-center' >
            <span className='font-light text-sm' >
              Do you have a project in mind? or just an enquiry?
              <br/>
              Contact me by filling this form or straight linking to my social media
            </span>
            <div className='flex flex-col gap-y-2 mt-5 text-sm font-light' >
                {/* <input className='text-center py-2 bg-transparent border-b-2 px-2' placeholder='email' /> */}
                <textarea onChange={handleChange} className='text-center py-2 bg-transparent rounded-sm border-[1px] px-2 min-h-[100px] max-h-[100px]' placeholder='enter your message here' />
                <button onClick={sendEmail} className='bg-invert p-2 px-10 text-primary rounded-full w-[200px] mx-auto mt-5' >Send</button>
            </div>
        </div>
        <div className='gap-y-[100px] sm:gap-y-0 sm:flex mx-auto pb-6 flex-row gap-x-8 font-light' >            
            <div className='flex items-start gap-x-2 mt-5'>
                <div className='bg-gray-200 rounded-full text-primary p-2'><MdLocationPin className='text-lg'/></div>
                <div className='flex flex-col'>
                    <span>Kampala/ Uganda</span>
                </div>
            </div>  
            <div className='flex items-start gap-x-2 mt-5'>
                <div className='bg-gray-200 rounded-full text-primary p-2'><MdEmail className='text-lg'/></div>
                <div className='flex flex-col' onClick={contactEmail}>
                    <span className=''>jaymwira@gmail.com</span>
                </div>
            </div>
            <div className='flex items-start gap-x-2 mt-5'>
                <div className='bg-gray-200 rounded-full text-primary p-2'><MdPhone className='text-lg'/></div>
                <div className='flex flex-col'>
                    <span>+256 743 946 392</span>
                </div>
            </div>
        </div>
        
      </div>
      <div className='flex border-t-[1px] w-[100%] text-center mt-5 pt-7 text-gray-500 border-gray-600' >
        <div className='mx-auto flex gap-x-2 items-center mt-0' >
                <span>&copy; mr!Perfect</span>
                <FaTwitter className='text-xl'/>
                <FaLinkedinIn className='text-xl'/>
                <MdEmail onClick={contactEmail} className='text-xl'/>
        </div>
      </div>
    </div>
  )
}

export default Contact

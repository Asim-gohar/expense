import React from 'react'
import Link from 'next/link';
import {FaWhatsapp , FaFacebookF , FaTwitter , FaYoutube , FaInstagram, FaLinkedinIn ,FaPhoneVolume} from 'react-icons/fa'
import { TbMailOpenedFilled } from "react-icons/tb";

function ContactUs() {  
  return (
    <section className=' top-0 left-0 bg-gradient-to-r from-black to-gray-300 lg:h-12 w-full'>
        <div className='text-white flex lg:pt-3 lg:pl-40 '>
  <span className='border-l border-white h-6 ml-2 pl-3 text-26A1F8'></span>
    <p className='border-r border-white h-6 mr-2 pr-3'><Link href="https://www.facebook.com/profile.php?id=100036069652618&mibextid=ZbWKwL"><FaFacebookF className='text-m' /></Link></p>
    <p className='border-r border-white h-6 mr-2 pr-3'><Link href="https://api.whatsapp.com/send?phone=923079664615"><FaWhatsapp className='text-m' /></Link></p>
    <p className='border-r border-white h-6 mr-2 pr-3'><FaTwitter className='text-m' /></p>
    <p className='border-r border-white h-6 mr-2 pr-3'><FaYoutube className='text-m' /></p>
    <p className='border-r border-white h-6 mr-2 pr-3'><Link href="https://instagram.com/asimbutt3349?igshid=NGVhN2U2NjQ0Yg=="><FaInstagram className='text-m' /></Link></p>
    <p className='border-r border-white h-6 mr-2 pr-3'> <Link href='https://www.linkedin.com/in/asim-butt-5b03182a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FaLinkedinIn className='text-m' /></Link></p>
    <p className='flex ml-20 text-sm'><FaPhoneVolume className='text-sm ' />+923079664615</p>
    <p className='align-center border-l border-white h-full ml-4 pl-4 flex text-sm'><TbMailOpenedFilled className='text-sm align-centre mr-1' />asimbutt9664@gmail.com</p>
    
    <p className='pl-20 text-lg align-right'><button className='align-center border border-white border-2 text-white  bg-transparent  rounded-3xl bg-blend-screen shadow-slate-600'>
    <a href="#" className='p-3 text-xs align-center'>
      Projects
    </a>
  </button></p>
  </div>
  </section>
  )
}

export default ContactUs
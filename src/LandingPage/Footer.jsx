import React from 'react';
import { BsInstagram, BsTwitter, BsLinkedin, BsFacebook } from "react-icons/bs";


const Footer = () => {
  return (
    <div className='w-screen text-gray-400 bg-black h-[100%]'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 p-18 gap-8'>
        <div>
          <h3 className='text-2xl font-semibold text-white'>About</h3>
          <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
          <div className='flex flex-col gap-2 mt-4'>
            <p>321 Street, California,  </p>
            <p>USA +012 123 45678</p>
            <p>info@sample.com</p>
          </div>
          <div className='flex items-center gap-4 mt-4'>
            <BsFacebook className='w-10 h-10 p-2 text-white border rounded-md bg-primary hover:bg-transparent hover:border-primary border-primary' size={25}/>
            <BsInstagram className='w-10 h-10 p-2 text-white border rounded-md bg-primary hover:bg-transparent hover:border-primary border-primary' size={25}/>
            <BsTwitter className='w-10 h-10 p-2 text-white border rounded-md bg-primary hover:bg-transparent hover:border-primary border-primary' size={25}/>
            <BsLinkedin className='w-10 h-10 p-2 text-white border rounded-md bg-primary hover:bg-transparent hover:border-primary border-primary' size={25}/>
          </div>
        </div>
        <div className='mt-4 sm:mt-0'>
          <h3 className='text-2xl font-semibold text-white'>Quick Links</h3>
          <ul className='flex flex-col gap-4 font-medium'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Trainers</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className='flex flex-col gap-6'>
          <h3 className='text-2xl font-semibold text-white'>Newsletter</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <input className='px-6 py-3 rounded-full' type="text" placeholder='Enter Your Email' />
          <button className='px-4 py-2 font-semibold text-white rounded-full border-2-primary bg-primary hover:border-2 hover:border-primary hover:bg-transparent w-[150px]'>Subscribe</button>
        </div>
      </div>
      <div className='mt-4 border-t-[2px] border-gray-500 p-6 text-center'>
        <p className='font-semibold text-gray-300'>Created By <span className='font-semibold text-primary'>Dewmini Vidanapathirana</span> All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
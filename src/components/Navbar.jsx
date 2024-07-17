import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='w-screen p-6 text-white bg-black'>
      <div className='max-w-[90%] mx-auto flex justify-between items-center'>
        <div className='flex items-center w-24 cursor-pointer'>
</div>
         
        <div className='flex'>
          <ul className='flex gap-6 px-4 py-2 text-xl font-semibold'>
            <li className='text-gray-400 cursor-pointer hover:text-primary'>HOME</li>

            <li className='text-gray-400 cursor-pointer hover:text-primary'>ABOUT</li>

            <li className='text-gray-400 cursor-pointer hover:text-primary'>SERVICES</li>

            <li className='text-gray-400 cursor-pointer hover:text-primary'>TRAINERS</li>

            <li className='text-gray-400 cursor-pointer hover:text-primary'>PRICES</li>

            <li className='text-gray-400 cursor-pointer hover:text-primary'>BLOGS</li>
            <button className='px-6 py-2 text-2xl font-semibold text-white rounded-full bg-primary'>Join Us</button>
          </ul>


        </div>
       
      </div>

    </div>
  )
}

export default Navbar
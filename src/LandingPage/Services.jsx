import React from 'react'
import { CgGym } from "react-icons/cg";

function Services() {
  return (
    <div className='w-screen h-auto bg-gray-100 py-14 '>
      <div className=' w-[90%] h-auto  mx-auto py-8'>
        <p className='text-4xl font-bold text-center text-primary'>Services</p>
        <p className='py-4 text-4xl font-bold text-center text-black'>Which Services We Offer</p>
        <p className='text-center'>At our gym, we pride ourselves on offering the best facilities and experienced trainers to ensure you have a rewarding fitness experience.</p>
        <div className='grid grid-cols-2 gap-4 py-8 mx-auto '>
          <div className='flex items-center gap-6 p-3 text-4xl font-semibold text-center bg-gray-200'>
            <div className='p-4 bg-orange-200 rounded-full'>
              <CgGym size={80}/>
            </div>
            <div>
              <h2 className='py-4 text-4xl font-bold'>Body Building</h2>
              <p className='text-xl text-left'>Bodybuilding is a popular fitness pursuit that focuses on building muscle size, strength, and definition.
              If you're interested in bodybuilding, a gym is an ideal environment to support your goals. 
              </p>

            </div>
          </div>
          <div className='flex items-center gap-6 p-3 text-4xl font-semibold text-center bg-gray-200'>
            <div className='p-4 bg-orange-200 rounded-full'>
              <CgGym size={80}/>
            </div>
            <div>
              <h2 className='py-4 text-4xl font-bold'>Body Building</h2>
              <p className='text-xl text-left'>Bodybuilding is a popular fitness pursuit that focuses on building muscle size, strength, and definition.
              If you're interested in bodybuilding, a gym is an ideal environment to support your goals. 
              </p>

            </div>
          </div>
          <div className='flex items-center gap-6 p-3 text-4xl font-semibold text-center bg-gray-200'>
            <div className='p-4 bg-orange-200 rounded-full'>
              <CgGym size={80}/>
            </div>
            <div>
              <h2 className='py-4 text-4xl font-bold'>Body Building</h2>
              <p className='text-xl text-left'>Bodybuilding is a popular fitness pursuit that focuses on building muscle size, strength, and definition.
              If you're interested in bodybuilding, a gym is an ideal environment to support your goals. 
              </p>

            </div>
          </div>
          <div className='flex items-center gap-6 p-3 text-4xl font-semibold text-center bg-gray-200'>
            <div className='p-4 bg-orange-200 rounded-full'>
              <CgGym size={80}/>
            </div>
            <div>
              <h2 className='py-4 text-4xl font-bold'>Body Building</h2>
              <p className='text-xl text-left'>Bodybuilding is a popular fitness pursuit that focuses on building muscle size, strength, and definition.
              If you're interested in bodybuilding, a gym is an ideal environment to support your goals. 
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
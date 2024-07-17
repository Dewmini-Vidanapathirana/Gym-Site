import React from 'react'

function Trainers() {
  return (
    <div className='w-screen h-screen py-24 bg-white'>
      <div className='w-[90%] h-[90%]  mx-auto '>
        <div >
          <h1 className='text-4xl font-bold text-center text-primary'>Our Trainers</h1>
          <p className='py-6 text-4xl font-bold text-center'>Meet out Experience Trainers</p>
          <p className='py-4 text-center'>Consult with a fitness professional  to design a training plan tailored to your goals. A well-rounded program typically includes compound exercises such as 
            bench presses, shoulder presses, and rows</p>
        </div>
        <div className='grid grid-cols-3 gap-4 p-8 mx-auto '>
           
        <div className='bg-gray-200'>
        <img src="https://media1.popsugar-assets.com/files/thumbor/ukZgw3rgE8g7wQdCawpJnyaQkU4/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/12/21/805/n/1922729/tmp_utWXA8_d27ced2e1cb6db0b_GettyImages-946365998.jpg" alt="" />
        <h1 className='p-2 text-2xl font-bold '>Alex Helina</h1>
        <p className='p-2 text-2xl font-semibold'>Women's Physique</p>
        </div>
        <div className='bg-gray-200'>
        <img src="https://images.pexels.com/photos/864903/pexels-photo-864903.jpeg?cs=srgb&dl=bodybuilding-dumbbells-gym-864903.jpg&fm=jpg" alt="" />
        <h1 className='p-2 text-2xl font-bold '>John Williynsom</h1>
        <p className='p-2 text-2xl font-semibold'>Men's Bodybuilding</p>
        </div>
        <div className='bg-gray-200'>
        <img src="https://cdn8.dissolve.com/p/D187_254_012/D187_254_012_1200.jpg" alt="" />
        <h1 className='p-2 text-2xl font-bold '>Joys Ben</h1>
        <p className='p-2 text-2xl font-semibold'>Men's Physique</p>
        </div>
        </div>
        </div>
      </div>
  )
}

export default Trainers
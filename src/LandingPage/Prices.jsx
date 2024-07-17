import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";

function Prices() {
  return (
    <div className='w-screen h-auto bg-gray-100 py-14 '>
    <div className='text-center max-w-[1200px] mx-auto p-4'>
    <h1 className='text-4xl font-bold text-center text-primary'>Our Prices</h1>
        <h1 className='p-4 text-4xl font-bold '>Join Suitable Plan</h1>
        <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor labore ex id facilis
            quaerat provident officia corrupti voluptas doloribus dolores Consult with a fitness professional numquam minima earum rerum a distinctio eius suscipit! Non, ea!
        </p>
    </div>
    <div>
        <div className='max-w-[1340px] mx-auto grid md:grid-cols-3 gap-8 sm:px-4 sm:grid-cols-2'>
            <div className='flex flex-col w-[100%] mx-auto my-4 duration-300 rounded-lg shadow-xl relative'>
                <div className='text-white bg-primary h-[200px] w-full text-center relative'>
                    <h2 className='mt-10 text-3xl font-normal uppercase'>Silver</h2>
                </div>
                <div className='border-[6px] rounded-full h-36 w-36 border-primary flex flex-col items-center justify-center bg-white absolute left-[25%] top-[20%]'>
                    <div className='flex items-center p-2 font-semibold'>
                        <p className='text-lg'>$</p>
                        <h3 className='text-3xl'>12.99</h3>
                    </div>
                    <p>/Month</p>
                </div>
                <div className='items-center mt-24 text-center w-[300px] mx-auto flex flex-col'>
                    <p className='flex items-center p-2 text-lg text-center'><AiOutlineCheck />15 Body Building</p>
                    <p className='flex items-center p-2 text-lg text-center'><AiOutlineCheck />10 Boxing Classes</p>
                    <p className='flex items-center p-2 text-lg text-center'><AiOutlineCheck />5 Massage</p>
                    <p className='flex items-center p-2 text-lg text-center'><AiOutlineCheck />12 Swimming Sessions</p>
                </div>
                <button className='bg-primary w-[150px] rounded-full font-medium my-6 mx-auto text-white py-3 hover:bg-transparent hover:border-primary border-2 hover:text-primary '>select Plan</button>
            </div>


            <div className='flex flex-col w-[100%] mx-auto my-4 duration-300 rounded-lg shadow-xl hover:shadow-xl relative'>
                <div className='text-white bg-primary h-[200px] w-full text-center'>
                    <h2 className='mt-10 text-3xl font-normal uppercase'>Gold</h2>
                </div>
                <div className='border-[6px] rounded-full h-36 w-36 border-primary flex flex-col items-center justify-center bg-white absolute left-[25%] top-[20%]'>
                    <div className='flex items-center p-2 font-semibold'>
                        <p className='text-lg'>$</p>
                        <h3 className='text-3xl'>36.99</h3>
                    </div>
                    <p>/Month</p>
                </div>
                <div className='items-center mt-24 text-center w-[300px] mx-auto flex flex-col'>
                    <p className='flex items-center p-2 text-lg text-center'><AiOutlineCheck />15 Body Building</p>
                    <p className='flex items-center p-2 text-lg text-center'><AiOutlineCheck />10 Boxing Classes</p>
                    <p className='flex items-center p-2 text-lg text-center'><AiOutlineCheck />5 Massage</p>
                    <p className='flex items-center p-2 text-lg text-center'><AiOutlineCheck />12 Swimming Sessions</p>
                </div>
                <button className='bg-primary w-[150px] rounded-full font-medium my-6 mx-auto text-white py-3 hover:bg-transparent hover:border-primary border-2 hover:text-primary '>select Plan</button>
            </div>


            <div className='flex flex-col w-[100%] mx-auto my-4 duration-300 rounded-lg shadow-xl hover:shadow-xl relative'>
                <div className='text-white bg-primary h-[200px] w-full text-center'>
                    <h2 className='mt-10 text-3xl font-normal uppercase'>Platinum</h2>
                </div>
                <div className='border-[6px] rounded-full h-36 w-36 border-primary flex flex-col items-center justify-center bg-white absolute left-[25%] top-[20%] z-10'>
                    <div className='flex items-center p-2 font-semibold'>
                        <p className='text-lg'>$</p>
                        <h3 className='text-3xl'>74.99</h3>
                    </div>
                    <p>/Month</p>
                </div>
                <div className='items-center mt-24 text-center w-[300px] mx-auto flex flex-col'>
                    <p className='flex items-center p-2 text-lg text-center'><AiOutlineCheck />15 Body Building</p>
                    <p className='flex items-center p-2 text-lg text-center'><AiOutlineCheck />10 Boxing Classes</p>
                    <p className='flex items-center p-2 text-lg text-center'><AiOutlineCheck />5 Massage</p>
                    <p className='flex items-center p-2 text-lg text-center'><AiOutlineCheck />12 Swimming Sessions</p>
                </div>
                <button className='bg-primary w-[150px] rounded-full font-medium my-6 mx-auto text-white py-3 hover:bg-transparent hover:border-primary border-2 hover:text-primary z-10'>select Plan</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Prices
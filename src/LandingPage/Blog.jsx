import React from 'react'

function Blog() {
  return (
    <div className='w-screen h-screen py-24 bg-white'>
      <div className='w-[90%] h-[90%]  mx-auto '>
        <div >
          <h1 className='text-4xl font-bold text-center text-primary'>Our Blog</h1>
          <p className='py-6 text-4xl font-bold text-center'>Latest From Our Blog</p>
          <p className='text-center'>Welcome to our gym blog! In today's post, we will be focusing on one of the most sought-after fitness goals: building strong and toned arms. Whether you're looking to increase your overall strength, enhance athletic we will be focusing on one of the most sought-after fitness
           </p>
        </div>
        <div className='grid grid-cols-3 gap-4 p-8 mx-auto '>
           
        <div className='bg-gray-200'>
        <img src="https://www.healthpolo.com/wp-content/uploads/2021/05/Gym.jpg" alt="" />
        <h1 className='p-2 text-2xl font-bold '>Rshi Alexender</h1>
        <p className='p-2 text-2xl font-semibold'>Women's Physique</p>
        </div>
        <div className='bg-gray-200'>
        <img src="https://thumbs.dreamstime.com/b/attractive-sports-people-working-out-dumbbells-gym-189311541.jpg" alt="" />
        <h1 className='p-2 text-2xl font-bold '>John Williynsom</h1>
        <p className='p-2 text-2xl font-semibold'>Men's Bodybuilding</p>
        </div>
        <div className='bg-gray-200'>
        <img src="https://thumbs.dreamstime.com/b/young-people-gym-12269182.jpg" alt="" />
        <h1 className='p-2 text-2xl font-bold '>Joys Ben</h1>
        <p className='p-2 text-2xl font-semibold'>Men's Physique</p>
        </div>
        </div>
        </div>
      </div>
  )
}

export default Blog
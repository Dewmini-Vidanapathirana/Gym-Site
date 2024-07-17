import React from 'react'

function About() {
  return (
    <div className='w-screen h-auto py-8 mt-12 bg-gray-300 '>
      <div className='w-[1500px] mx-auto py-4 grid grid-cols-2 '>
        <div className=' w-[80%] h-[100%] bg-center bg-no-repeat bg-cover  ' style={{ backgroundImage: `url(${"https://images3.alphacoders.com/107/1079633.jpg"})` }}>'</div>
        <div className='px-2 '>
          <h1 className='text-4xl font-bold text-primary '>About us</h1>
          <p className='py-4 mt-4 text-4xl font-bold text-md'>Best Facilities And Experienced Trainers</p>
          <p className='py-6 text-xl text-left'>
            At our gym, we pride ourselves on offering the best facilities and experienced trainers to ensure you have a rewarding fitness experience. Our state-of-the-art facility is equipped with the latest exercise equipment, designed to cater to a variety of fitness levels and preferences.</p>
        
        </div>

      </div>

    </div>
  )
}

export default About
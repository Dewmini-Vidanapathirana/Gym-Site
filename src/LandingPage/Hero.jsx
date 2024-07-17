import React from 'react'

function Hero() {
    return (
        <div className='relative h-[70vh] text-white bg-black bg-center bg-no-repeat bg-cover -z-10 ' style={{ backgroundImage: `url(${"https://blog.goodlifefitness.com/media/1792/bootygains.jpg"})` }}>
            <div className="absolute top-0 left-0 w-full h-[70vh] bg-black opacity-80 -z-20"></div>
            <div className='flex items-center justify-center h-[70vh] text-center max-w-[1000px] mx-auto'>
                <div className='text-center '>
                    <h1 className='text-3xl font-semibold'>START YOUR TRAINING AT FITLIFE</h1>
                    <p className='py-4 mt-4 text-6xl font-bold text-md'>FIT BODY NEEDS MORE TAINING</p>
                    <p className='py-6 text-2xl'>Welcome to our gym website! We are dedicated to helping you achieve your fitness goalsand live a healthier lifestyle.
                     Our state-of-the-art facility is equipped.</p>
                     <button className='px-6 py-2 text-2xl font-semibold text-white rounded-full bg-primary'>Read More</button>
                </div>



            </div>
        </div>
    )
}

export default Hero
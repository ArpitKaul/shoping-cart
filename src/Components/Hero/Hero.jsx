import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='relative h-56 bg-gradient-to-b from-pink-100 via-transparent flex mt-10 z-10'>
      <div className='flex-1 flex flex-col justify-center pl-28 mr-80 mt-56'>
        <h2 className='text-gray-900 text-sm font-semibold mr-36  '>NEW ARRIVALS ONLY</h2>
        <div className='flex flex-col items-center gap-5'>  
          <div className='flex items-center gap-0 '>
            <p className='text-6xl mr-36  '>new</p>
            <img className='w-10 ' src={hand_icon} alt="" />
          </div>
          <p className='text-6xl font-semibold mr-10  '>Collections</p>
          <p className='text-6xl font-semibold   '>for everyone</p>
        </div>
        <div className="flex justify-center items-center gap-5 w-56  rounded-2xl mt-16 ml-16 h-24 bg-red-700 text-xl font-semibold text-white">
          <div>
            Latest Collection
          </div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className='hero-right'>
        <img className='w-96 justify-content-center flex-1 flex items-center' src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero

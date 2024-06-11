import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='h-56 bg-gradient-to-b from-pink-100 via-transparent  flex mt-10 '>
        <div className='flex-1 flex flex-col justify-center gap-20 pl-28 leading-tight'>
            <h2 className='text-blue-100 text-xl '>NEW ARRIVALS ONLY</h2>
            <div>
                <div>
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>
                    Latest Collection
                </div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_image} alt="" />
        </div>
      
    </div>
  )
}

export default Hero

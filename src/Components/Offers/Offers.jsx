import React from 'react';
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className='  w-full flex  h-96 mt-32 m-auto  bg-custom-gradient p-0 py-16'>
      <div className='flex-1 flex flex-col justify-center '>
        <h1 className=' text-gray-800 font-bold text-5xl mt-16'>Exclusive</h1>
        <h2 className='text-gray-800 font-semi-bold text-5xl mt-5'>Offers For You</h2>
        <p className=' text-gray-800 text-lg font-semibold mt-5'>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='w-56  rounded-full bg-red-600 text-white   font-semibold cursor-pointer mt-3 ml-48 h-56 '>Check Now</button>
      </div>
      <div className='flex-1 flex items-center justify-end pt-16'>
        <img className='h-80 w-66 mr-28 ' src={exclusive_image} alt="Exclusive Offers"  />
      </div>
    </div>
  );
}

export default Offers;

import React from 'react';
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className='  w-full flex justify-center items-center mt-32  bg-custom-gradient'>
      <div className='flex flex-col items-center text-center p-5'>
        <h1 className='text-4xl font-bold'>Exclusive</h1>
        <h2 className='text-2xl mt-2'>Offers For You</h2>
        <p className='text-xl mt-2'>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='mt-4 px-4 py-2 bg-red-700 text-white rounded'>Check Now</button>
      </div>
      <div>
        <img src={exclusive_image} alt="Exclusive Offers" className='w-64 h-auto' />
      </div>
    </div>
  );
}

export default Offers;

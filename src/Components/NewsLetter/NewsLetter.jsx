import React from 'react';

const NewsLetter = () => {
  return (
    <div className='flex flex-col items-center justify-center m-auto p-0 mt-28 bg-custom-gradient gap-28'>
      <h1 className='text-gray-700 text-5xl mt-16 font-semibold'>Get Exclusive Offers On your Email</h1>
      <p className='text-gray-700 text-lg'>Subscribe to our newsletter and stay updated</p>
      <div className='flex items-center justify-between text-white rounded-3xl border-white w-full max-w-xl p-2'>
        <input
          className='flex-grow ml-4 p-2 border border-gray-300 rounded-3xl outline-none text-gray-500 font-poppins text-xl'
          type="email"
          placeholder='Your Email id'
        />
        <button className='w-48 ml-4 rounded-3xl bg-black text-white text-xl cursor-pointer p-2'>
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;

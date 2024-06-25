import React, { useContext } from 'react';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);

  // Check if product is defined before accessing its properties
  if (!product) {
    return null;
  }

  return (
    <div className='flex mt-16'>
      <div className="flex gap-16  ">
        <div className="flex flex-col gap-2 ">
          <img className='h-32 w-32' src={product.image} alt="" />
          <img className='h-32 w-32' src={product.image} alt="" />
          <img className='h-32 w-32' src={product.image} alt="" /> 
          <img className='h-32 w-32' src={product.image} alt="" />
        </div>
        <div className="">
          <img className='w-[38rem] h-[34rem]' src={product.image} alt="" />
        </div>
      </div>
      <div className="flex flex-col ml-10 ">
        <h1 className=' text-2xl text-semibold '>{product.name}</h1>
        <div className=" flex items-center mt-2 gap-3 text-black text-lg ml-9  ">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className='flex gap-5 text-xl font-medium mt-8 ml-9'>
          <div className='text-gray-700 line-through '>${product.old_price}</div>
          <div className='text-red-400 '>${product.new_price}</div>
        </div>
        <div className='mt-6 '>
          <p className='ml-9'>A lightweight, usually knitted, pullover shirt, close-fitting and with a round necklace and short sleeves , worn as an undershirt or outer garment</p>
        </div>
        <div className='mr-'>
          <h1 className='mt-10 text-gray-800 text-xl font-semibold mr-36'>Select Size</h1>
          <div className='flex gap-5 mt-4 ml-9 '>
            <div className='bg-gray-50 border border-gray-200 rounded-lg cursor-pointer py-4.5 px-6 '>S</div>
            <div className='bg-gray-50 border border-gray-200 rounded-lg cursor-pointer py-4.5 px-6'>M</div>
            <div className='bg-gray-50 border border-gray-200 rounded-lg cursor-pointer py-4.5 px-6'>L</div>
            <div className='bg-gray-50 border border-gray-200 rounded-lg cursor-pointer py-4.5 px-6'>XL</div>
            <div className='bg-gray-50 border border-gray-200 rounded-lg cursor-pointer py-4.5 px-6'>XXL</div>
          </div>
        </div>
        <button className='bg-red-500 border-none outline-none w-32 h-10 text-white font-semibold text-sm mt-8 ml-9' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='mt-10 mr-72'><span className='font-bold'>Category :</span>Women , T-shirt, crop Top</p>
        <p className='mt-3 mr-96'><span className='font-bold'>Tags :</span>Modern , Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;

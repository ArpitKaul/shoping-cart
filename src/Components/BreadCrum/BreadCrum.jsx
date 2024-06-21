import React from 'react';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const BreadCrum = (props) => {
  const { product } = props;

  // Check if product is defined before accessing its properties
  if (!product) {
    return null;
  }

  return (
    <div className='flex text-sm items-center gap-1 text-gray-400 font-semibold'>
      HOME <img className='h-3 mt-1 ml-1' src={arrow_icon} alt="" /> SHOP <img className='h-3 mt-1 ml-1' src={arrow_icon} alt="" /> {product.category} <img className='h-3 mt-1 ml-1'src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default BreadCrum;

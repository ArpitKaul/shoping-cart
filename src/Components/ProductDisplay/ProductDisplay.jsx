import React from 'react';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';

const ProductDisplay = (props) => {
  const { product } = props;

  // Check if product is defined before accessing its properties
  if (!product) {
    return null;
  }

  return (
    <div className='flex mt-16'>
      <div className="flex gap-16  ">
        <div className="flex flex-col gap-1 ">
          <img className='h-24' src={product.image} alt="" />
          <img className='h-24' src={product.image} alt="" />
          <img className='h-24' src={product.image} alt="" />
          <img className='h-28' src={product.image} alt="" />
        </div>
        <div className="">
          <img className='w-[32rem] h-max' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star flex">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div>
          <div>${product.old_price}</div>
          <div>${product.new_price}</div>
        </div>
        <div className='prooductrightdescrip'>
          A lightweight, usually knitted, pullover shirt, close-fitting and with a round necklace and short sleeves , worn as an undershirt or outer garment
        </div>
        <div className='size'>
          <h1>Select Size</h1>
          <div  className='rytsize'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className='category'><span>Category :</span>Women , T-shirt, crop Top</p>
        <p className='category'><span>Tags :</span>Modern , Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;

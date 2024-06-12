import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className=' flex-col items-center  border-none '>
      <h1 className='text-gray-900 text-3xl font-semibold mt-72 '>POPULAR IN WOMEN</h1>
      <hr className=' h-10 rounded-sm ' />
      <div className='mt-5 flex gap-5 border-none '>
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  ) 
}

export default Popular

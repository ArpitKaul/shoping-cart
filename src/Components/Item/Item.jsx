import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return ( 
    <div className='w-80 transform hover:scale-105 transition-transform duration-500'> 
      
      <Link to ={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
      <p className='my-6 mx-0'>{props.name}</p>
      <div className='flex gap-20'>
        <div className=' font-medium text-xl'>
            ${props.new_price}
        </div>
        <div className='text-gray-600 text-xl font-medium line-through'>
            ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item

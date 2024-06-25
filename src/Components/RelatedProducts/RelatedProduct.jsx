import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const RelatedProduct = () => {
  return (
    <div className='flex flex-col items-center gap-5 h-16 mt-16'>
      <h1 className='text-gray-800 text-3xl font-semibold'>Related Products</h1>
      <hr className='w-56 h-6 rounded-lg bg-gray-900'/>
      <div className='mt-8 gap-9 flex '>
        {data_product.map((item ,i ) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProduct

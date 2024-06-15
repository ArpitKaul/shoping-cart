import React from 'react'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='flex-col items-center  border-none ' >
      <h1 className='text-gray-900 text-3xl font-semibold mt-72 '>NEW COLLECTIONS</h1>
      <hr className=' h-10 rounded-sm w-56'  />
      <div className='grid grid-cols-4 mt-16 gap-36  '>
        {new_collection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections

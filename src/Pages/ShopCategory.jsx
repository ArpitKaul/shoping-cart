import React, {useContext} from 'react'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='block m-28 m-7.5 mx-auto justify-between items-center  ' src={props.banner} alt="" />
      <div className='flex  justify-between    '>
        <p>
          <span className='font-semibold gap-16 ' >Showing 1-12</span> out of 36 products
        </p> 
        <div className='flex rounded-xl border border-gray-600  '> 
          Sort by <img className='h-2 mt-2.5 ml-2' src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className='mt-16 grid grid-cols-4 gap-28' >
        {all_product.map((item , i)=>{
          if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="flex justify-end  items-center w-32 h-16 rounded-3xl  text-white bg-gray-300 text-xl font-medium ml-auto mt-16 ">
        Explore more
      </div>
    </div>
  )
}

export default ShopCategory

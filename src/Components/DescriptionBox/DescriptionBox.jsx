import React from 'react'

const DescriptionBox = () => {
  return (
    <div className=''>
      <div className='flex mt-32 '>
        <div className='flex items-center justify-center text-lg w-32 h-14 border border-gray-400 font-semibold'>Description</div>
        <div className='flex items-center justify-center text-lg w-32 h-14 border border-gray-400 font-semibold text-gray-500'>Reviews (122)</div>
      </div>
      <div className='flex flex-col border border-gray-300 gap-8 pb-70 p-24 '>
        <p>An e-commerce website is an online platform that facilitate buying and seling of products or services over the internet serves as a virtual marketplace where buisness and individual shoewcase their products interact with customers , and conduct transaction without the need for a physical presenece E-commerce website have gained immense popularity due tom their convienent accessibility , and global reac they offer.</p>
        <p>E-commerce websites typically display products or services a detailed description, images, prices , and any available variations ( e.g.. sizes , colors ). Each product usually has its own dedicated page with releveant information</p>
      </div>
    </div>
  )
}

export default DescriptionBox

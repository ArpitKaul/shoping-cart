import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-24 mt-4 '>
      <div className="flex items-center gap-4 ">
        <img src={footer_logo} alt="" />
        <p className='text-gray-800 text-3xl font-semibold'>SHOPPER</p>
      </div>
      <ul className="flex list-none text-gray-800 text-lg gap-8 ">
        <li className='cursor-pointer'>Company</li>
        <li className='cursor-pointer'>Products</li>
        <li className='cursor-pointer'>offices</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>
      <div className="flex gap-10 ">
        <div className="p-1  bg-white border border-gray-200 ">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-28 w-full mt-28 text-black text-lg ">
        <hr className='w-full border-none rounded-sm h-1 bg-gray-800' />
        <p>Copyright @ 2024 - All Right - Reserved</p>
      </div>

    </div>
  )
}

export default Footer

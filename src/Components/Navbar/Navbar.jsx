import React, { useContext, useState  } from 'react';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';


const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-5'>
        <img src={logo} alt="Logo" />
        <p className='text-lg font-semibold'>SHOPPER</p>
      </div>
      <ul className='flex items-center list-none gap-10 text-lg font-medium cursor-pointer'>
        <li onClick={() => setMenu("shop")}><Link to='/'>shop</Link>
          {menu === "shop" && <hr className="border-none rounded-md bg-red-500 w-10 h-1" />}
        </li>
        <li onClick={() => setMenu("mens")}><Link to='/mens'>Men</Link>
          {menu === "mens" && <hr className="border-none rounded-md bg-red-500 w-10 h-1" />}
        </li>
        <li onClick={() => setMenu("womens")}><Link to = "/womens">Womens</Link>
         {menu === "womens" && <hr className="border-none rounded-md bg-red-500 w-10 h-1" />}
        </li>
        <li onClick={() => setMenu("kids")}><Link to='/Kids'>Kids</Link>
          {menu === "kids" && <hr className="border-none rounded-md bg-red-500 w-10 h-1" />}
        </li>
      </ul>
      <div className='flex items-center gap-8 relative'>
        <Link to='/login'><button className='w-28 h-12 outline-none rounded-full text-medium bg-white text-lg border border-solid border-black cursor-pointer active:bg-gray-200'>Login</button></Link>
        <div className='relative'>
          <Link to='/Cart'><img src={cart_icon} alt="Cart" /></Link>
          <div className='absolute -top-2 ml-9 w-5 h-5 flex justify-center items-center text-lg bg-red-600 border rounded-full text-white'>{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

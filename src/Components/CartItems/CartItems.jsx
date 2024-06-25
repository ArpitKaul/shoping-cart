import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="mt-16">
      <div className="grid grid-cols-6 gap-4 text-center font-medium text-gray-700 mb-4">
        <p className="col-span-1">Products</p>
        <p className="col-span-1">Title</p>
        <p className="col-span-1">Price</p>
        <p className="col-span-1">Quantity</p>
        <p className="col-span-1">Total</p>
        <p className="col-span-1">Remove</p>
      </div>
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id} className="grid grid-cols-6 gap-4 items-center mb-4">
              <img src={product.image} alt={product.name} className="h-28 col-span-1" />
              <p className="col-span-1">{product.name}</p>
              <p className="col-span-1">{product.new_price}</p>
              <button className="col-span-1 bg-gray-200 py-1 px-2 rounded">
                {cartItems[product.id]}
              </button>
              <p className="col-span-1">{product.new_price * cartItems[product.id]}</p>
              <img
                src={remove_icon}
                alt="Remove"
                className="w-8 h-8 cursor-pointer col-span-1"
                onClick={() => removeFromCart(product.id)}
              />
              <hr className="col-span-6 my-2 border-t border-gray-200" />
            </div>
          );
        }
        return null; 
      })}

      
      <div className="flex mt-10">
        <div className="flex-1 flex flex-col gap-9 mr-56">
          <h1 className="text-xl font-bold">Cart Totals</h1>
          <div>
            <div className="flex justify-between py-4">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="border-t border-gray-200" />
            <div className="flex justify-between py-4">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr className="border-t border-gray-200" />
            <div className="flex justify-between py-4">
              <h3 className="font-bold">Total</h3>
              <h3 className="font-bold">${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="w-48 bg-blue-500 text-white py-2 rounded shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="promocode">
          <p className="mb-2">If you have a promo code, enter it here</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter promo code"
              className="border border-gray-300 px-3 py-1 rounded-l focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-4 py-1 rounded-r ml-1 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

import React, {useContext} from 'react'
// import Link
import {} from 'react-router-dom'
// import Icons
import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'
// import Components
import CartItem from './CartItem'
// import SideBarContext
import { SideBarContext } from '../context/SideBarContext'
//import CartContext
import { CartContext } from '../context/CartsContext'
import { Link } from 'react-router-dom'


const SideBar = () => {
  const {isOpen, handleClose} = useContext(SideBarContext);
  const {cart, clearCart, total} = useContext(CartContext);

  return (
    <div className={`${isOpen? 'right-0': '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw]
     transition-all duration-300 z-20 px-4 lg:px-[35px]`}
     >
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>
        {/* icon */}
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl'/>
        </div>
      </div>
      {/* Cartitems displayed */}
      <div className='flex flex-col gap-y-2 overflow-y-auto h-56 overflow-x-hidden border-b lg:h-60'>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />
        })}
      </div>
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          {/* total */}
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total:</span>$ {`${parseFloat((total).toString()).toFixed(2)}`}
          </div>
          {/* Clear Cart */}
          <div onClick={()=> clearCart()} className='cursor-pointer py-4 text-white w-12 h-12  bg-red-500 flex justify-center 
          items-center text-xl'>
            <FiTrash2 />
          </div>
        </div>
         <Link to="/" className='bg-gray-200 flex justify-center items-center p-4 text-primary w-full
         font-medium'>
          View Cart
          </Link>
        <Link to={`/`} className='bg-black text-white flex justify-center items-center p-4 text-primary w-full
         font-medium'>Checkout</Link>
      </div>
    </div>
  )
}

export default SideBar
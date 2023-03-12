import React, {useContext} from 'react'
import CartModel from '../model/carts'
// import link
import {Link} from "react-router-dom"
// import icons
import {IoMdClose, IoMdRemove, IoMdAdd} from "react-icons/io"
//importing cartsContext
import { CartContext } from '../context/CartsContext'

interface CartProps{
  item: CartModel
}

const CartItem = ({item}: CartProps) => {
  const {id, image,amount, category, title, price} = item;
  const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext);

  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        {/* image */}
        <Link to={`/products/${id}`}><img src={image} alt="" className='max-w-[80px]' /></Link>
        <div className='w-full flex flex-col'>
          {/* title & remove Icon */}
          <div className='flex justify-between mb-2'>

              {/* title */}
              <Link to={`/products/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline">
                {title}
              </Link>
              {/* remove icon */}
              <div onClick={()=> removeFromCart(id)} className='text-xl cursor-pointer'>
                <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
              </div>
          </div>
          <div className='flex gap-x-2 h-[36px] text-sm'>
               {/* quantity */}
               <div  className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
                  {/* minus -icon */}
                  <div onClick={()=> decreaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                     <IoMdRemove />
                  </div>
                  
                  {/* amount */}
                  <div className='h-full flex justify-center items-center px-2'>{amount}</div>
                  {/* plus icon */}
                  <div onClick={()=> increaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                      <IoMdAdd />
                  </div>
               </div>
              {/* item price */}
              <div className='flex-1 flex items-center justify-around '>$ {price}</div>
              {/* final price */}
              <div className='flex-1 flex justify-end items-center text-primary font-medium'>
                {`$ ${parseFloat((price * amount).toString()).toFixed(2)}`}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
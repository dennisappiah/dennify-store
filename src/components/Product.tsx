import React, {useContext} from 'react'
import ProductModel from './../model/products';
// import link
import {Link} from 'react-router-dom'
// import icons
import {BsPlus, BsEyeFill} from "react-icons/bs"
//import CartContext
import { CartContext } from '../context/CartsContext'

interface ProductProps{
  product: ProductModel
}

const Product = ({product} : ProductProps)   => {
  const {id, image, category, title, price} = product;
  const {addToCart} = useContext(CartContext);

  return (
  <div>
      <div className=' border border-[#e4e4e4] h-[300px] mb-4 relative  overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center transition-all duration-300'>
            {/* image */}
            <div className='w-[200px] mx-auto flex justify-center items-center'>
              <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt="" />
            </div>
            
            {/* button */}
            <div className='absolute top-0 right-0 bg-red-500/40 p-2 flex flex-col items-center justify-center
            gap-y-2 opacity-0 group-hover:opacity-100'>
              <button onClick={() => addToCart(product, id)} >
                <div className="flex justify-center items-center text-white w-5 h- bg-red-500">
                  <BsPlus className='text-3xl' />
                </div>
                <Link to={`/products/${id}`} className='w-5 h-5 flex justify-center items-center text-primary
                drop-shadow-xl bg-white'><BsEyeFill /></Link>
              </button>
            </div>
      </div>
      </div>
      {/* Category & title price */}
      <div>
        <div className='text-sm capitalize text-gray-500'>{category}</div>
        <Link to={`/products/${id}`}>
          <h2 className='font-semibold mb-1'>{title}</h2>
        </Link>
        <div className='font-semibold '>{price}</div>
      </div>
   </div>
  
  )
}

export default Product
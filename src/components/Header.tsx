import React, {useContext, useState, useEffect} from 'react'
// import SideBarContext
import { SideBarContext } from '../context/SideBarContext'
// import icons
import { BsBag } from 'react-icons/bs';
import {CartContext} from "../context/CartsContext"
import { Link } from 'react-router-dom';

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const {isOpen, setIsOpen} = useContext(SideBarContext);
  const {itemAmount} = useContext(CartContext);

  //event listener
  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })

  return (
    <header className={`${isActive ? 'bg-[#CCD5AE]': 'bg-[#F0EEED]'} fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex justify-between items-center h-full'>
        <Link to={`/`}>
          <div>
            <span className='text-black-500 uppercase font-bold-500'>Dennify<span className='uppercase text-red-500 font-bold-500'>Store</span></span>
          </div>
        </Link>
        <div onClick={()=> setIsOpen(!isOpen)} className="cursor-pointer flex relative ">
          <BsBag className='text-2xl '/>
          <div className='absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] rounded-full 
          flex justify-center items-center bg-red-500'>
            {itemAmount}
          </div>
      </div>
      </div>
      
    </header>
  )
}

export default Header
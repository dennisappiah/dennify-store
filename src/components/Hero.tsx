import React from 'react'
//import imgages
import menBag from "../img/menbag.jpg"
//import link
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='bg-hero h-[100px] bg-no-repeat bg-cover bg-center py-24'>
        <div className='container mx-auto flex justify-around h-full'>
          {/* text */}
          <div className='flex'>
            <div></div>
          </div>

          {/* image */}
          <div className='hidden lg:block'>
            <img src="" alt="" />
          </div>
        </div>
      </section>
  )
}

export default Hero
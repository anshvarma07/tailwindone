import React from 'react'
import Typed from 'react-typed';

export default function Banner() {
  return (
    <div className='bg-[#2699fb]'>
        <div className="py-[100px] text-bold w-full">
            <div className='text-center md:text-4xl  text-2xl'>Learn with us.</div>
            <div className='text-center text-white md:text-7xl text-3xl'>Grow with us.</div>
            <div className='text-center md:text-3xl'>
            <Typed strings={[' Hello Nigga!',' Hello Paaji!']} typeSpeed={60} backSpeed={90} loop/>
            </div>
        </div>
      
    </div>
  )
}

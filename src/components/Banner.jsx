import React from 'react'
// import Typed from 'react-typed';

export default function Banner() {
  return (
    <div className='bg-[#2699fb] h-full py-[150px] text-bold w-full text-center'>
        <div >
            <div className='md:text-4xl  text-3xl'>Learn with us.</div>
            <div className='text-white md:text-7xl text-5xl'>Grow with us.</div>
            <div className='text-4xl md:text-3xl'>
            {/* <Typed strings={[' Hello Nigga!',' Hello Paaji!']} typeSpeed={60} backSpeed={90} loop/> */}
            Hello Paaji!
            </div>
            <button type="button" className='p-[4px] my-6 border border-black rounded-md bg-black text-white w-40'>Get Started</button>
        </div>
      
    </div>
  )
}
